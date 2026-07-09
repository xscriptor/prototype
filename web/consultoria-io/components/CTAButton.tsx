"use client"

export default function CTAButton({
  children = "QUIERO ESTO",
  large = false,
}: {
  children?: React.ReactNode
  large?: boolean
}) {
  return (
    <button
      onClick={() => {
        if (typeof window !== "undefined" && (window as any).typeformEmbed?.makePopup) {
          ;(window as any).typeformEmbed.makePopup(
            "https://form.typeform.com/to/Pgn8Zrs8",
            { mode: "popup", autoOpen: true }
          )
        } else {
          window.open("https://form.typeform.com/to/Pgn8Zrs8", "_blank")
        }
      }}
      className={large ? "btn-primary-large" : "btn-primary"}
      aria-label="Solicitar sesión informativa"
    >
      {children}
    </button>
  )
}
