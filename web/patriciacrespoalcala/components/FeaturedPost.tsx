import Link from "next/link"
import Image from "next/image"
import TagBadge from "./TagBadge"
import { formatDate, getExcerpt } from "@/lib/posts"
import type { Post } from "@/lib/types"

interface FeaturedPostProps {
  post: Post
}

export default function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <section className="relative">
      <div className="bg-gradient-to-br from-primary/5 via-background to-wood-light/10 rounded-xl overflow-hidden border border-wood-light/20 shadow-sm">
        <Link href={`/blog/${post.slug}`} className="block group">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Image */}
            {post.featuredImage && (
              <div className="relative h-64 sm:h-80 md:h-full min-h-[280px] overflow-hidden bg-wood-light/10">
                <img
                  src={post.featuredImage}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent md:bg-gradient-to-r md:from-transparent md:to-background/10" />
              </div>
            )}

            {/* Content */}
            <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-center">
              {/* Badge */}
              <span className="inline-block font-accent text-lg text-accent mb-2">
                Destacado
              </span>

              {/* Date */}
              <time className="font-body text-xs text-text-muted/60 uppercase tracking-wider">
                {formatDate(post.date)}
              </time>

              {/* Title */}
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-primary mt-2 mb-4 leading-tight group-hover:text-accent transition-colors duration-200">
                {post.title}
              </h2>

              {/* Excerpt */}
              <p className="font-body text-base text-text-muted leading-relaxed line-clamp-4">
                {getExcerpt(post.body, 200)}
              </p>

              {/* Tags */}
              {post.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-5">
                  {post.tags.slice(0, 4).map((tag) => (
                    <TagBadge key={tag} tag={tag} isCompact />
                  ))}
                </div>
              )}

              {/* Read more */}
              <div className="mt-6">
                <span className="inline-flex items-center gap-2 font-body text-sm text-primary font-medium hover:text-accent transition-colors">
                  Leer más
                  <svg
                    className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  )
}
