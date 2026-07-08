#!/usr/bin/env node

import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync } from 'fs';
import { join, relative, dirname } from 'path';

const DATA_DIR = '/home/x0z/Documents/repos/prototypes/web/pat/shinobi-www.patriciacrespoalcala.com-11c72a20';
const OUTPUT_DIR = '/home/x0z/Documents/repos/prototypes/web/pat/patriciacrespoalcala';
const OUTPUT_FILE = join(OUTPUT_DIR, 'lib', 'posts.json');

// Ensure output directory exists
if (!existsSync(join(OUTPUT_DIR, 'lib'))) {
  mkdirSync(join(OUTPUT_DIR, 'lib'), { recursive: true });
}

// Extract site info from index.html
function extractSiteInfo(html) {
  const titleMatch = html.match(/<title>([^<]*)<\/title>/);
  // Find subtitle: "De poéticas"
  const subtitleMatch = html.match(/<p>\s*([^<]+?)\s*<\/p>\s*<\/div>\s*<\/div><\/div>/);
  
  // Extract nav links from PageList
  const navLinks = [];
  const pageListMatch = html.match(/<div class='widget PageList'[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/);
  if (pageListMatch) {
    const linkRegex = /<a href='([^']*)'>([^<]*)<\/a>/g;
    let linkMatch;
    while ((linkMatch = linkRegex.exec(pageListMatch[0])) !== null) {
      navLinks.push({ href: linkMatch[1], title: linkMatch[2] });
    }
  }

  // Extract featured post info from FeaturedPost widget
  let featuredPost = null;
  const featuredMatch = html.match(/<div class='widget FeaturedPost'[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/);
  if (featuredMatch) {
    const title = featuredMatch[0].match(/<h3 class='post-title'><a[^>]*>([^<]*)<\/a><\/h3>/);
    const snippet = featuredMatch[0].match(/<div class='snippet-item r-snippetized'>([\s\S]*?)<\/div>/);
    const image = featuredMatch[0].match(/<img[^>]*src='([^']*googleusercontent[^']*)'/);
    const link = featuredMatch[0].match(/<a class='timestamp-link' href='([^']*)'/);
    const dateMatch = featuredMatch[0].match(/datetime='([^']*)'/);
    
    if (title) {
      featuredPost = {
        title: title[1],
        snippet: snippet ? snippet[1].trim() : '',
        image: image ? image[1] : null,
        link: link ? link[1] : null,
        date: dateMatch ? dateMatch[1] : null,
      };
    }
  }

  return {
    title: titleMatch ? titleMatch[1] : 'Patricia Crespo Alcalá',
    subtitle: subtitleMatch ? subtitleMatch[1].trim() : 'De poéticas',
    navLinks,
    featuredPost,
  };
}

// Extract post data from HTML content
function extractPost(html, filePath) {
  // Get post title
  const titleMatch = html.match(/<h3 class='post-title entry-title'>\s*([\s\S]*?)\s*<\/h3>/);
  const title = titleMatch ? titleMatch[1].trim() : '';

  // Get post body (between post-body entry-content and post-bottom)
  const bodyMatch = html.match(/<div class='post-body entry-content[^']*'[^>]*>([\s\S]*?)<div class='post-bottom'>/);
  let body = bodyMatch ? bodyMatch[1].trim() : '';
  // Remove trailing </div> which is the post-body closing tag
  body = body.replace(/<\/div>\s*$/, '').trim();

  // Get post date
  const dateMatch = html.match(/<time class='published' datetime='([^']*)'/);
  const date = dateMatch ? dateMatch[1] : '';

  // Get labels/tags
  const tags = [];
  const tagRegex = /<a href='[^']*' rel='tag'>([^<]*)<\/a>/g;
  let tagMatch;
  while ((tagMatch = tagRegex.exec(html)) !== null) {
    tags.push(tagMatch[1]);
  }

  // Get image URLs (from blogger or googleusercontent)
  const images = [];
  const imgRegex = /<img[^>]*src=['"]([^'"]*(?:blogger|googleusercontent)[^'"]*)['"][^>]*\/?>/g;
  let imgMatch;
  while ((imgMatch = imgRegex.exec(html)) !== null) {
    if (!images.includes(imgMatch[1])) {
      images.push(imgMatch[1]);
    }
  }

  // Also check meta og:image or link rel='image_src'
  const metaImgRegex = /<meta[^>]*property='og:image'[^>]*content='([^']*)'/;
  const metaImgMatch = html.match(metaImgRegex);
  if (metaImgMatch && !images.includes(metaImgMatch[1])) {
    images.unshift(metaImgMatch[1]);
  }

  // Get featured image (first image)
  const featuredImage = images.length > 0 ? images[0] : null;

  // Create slug from the file path
  // Path is like: DATA_DIR/2018/01/destino.html -> slug: 2018/01/destino
  const relativePath = relative(DATA_DIR, filePath).replace(/\.html$/, '');
  const slug = relativePath;

  return {
    slug,
    title,
    date,
    body,
    tags,
    images,
    featuredImage,
  };
}

// Main extraction
function main() {
  console.log('Reading data from:', DATA_DIR);

  // Read index.html
  const indexHtml = readFileSync(join(DATA_DIR, 'index.html'), 'utf-8');
  const siteInfo = extractSiteInfo(indexHtml);
  console.log('Site title:', siteInfo.title);
  console.log('Subtitle:', siteInfo.subtitle);
  console.log('Nav links:', siteInfo.navLinks.length);
  console.log('Featured post:', siteInfo.featuredPost?.title || 'none');

  // Find all post HTML files (excluding index.html)
  const posts = [];
  
  function walkDir(dir) {
    const entries = readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = join(dir, entry.name);
      if (entry.isDirectory()) {
        walkDir(fullPath);
      } else if (entry.isFile() && entry.name.endsWith('.html') && entry.name !== 'index.html') {
        console.log('Processing:', fullPath);
        const html = readFileSync(fullPath, 'utf-8');
        const post = extractPost(html, fullPath);
        if (post.title) {
          posts.push(post);
        }
      }
    }
  }

  walkDir(DATA_DIR);

  // Sort posts by date (newest first)
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  console.log(`\nExtracted ${posts.length} posts`);

  // Build output
  const output = {
    site: siteInfo,
    posts,
  };

  writeFileSync(OUTPUT_FILE, JSON.stringify(output, null, 2), 'utf-8');
  console.log('Written to:', OUTPUT_FILE);
}

main();
