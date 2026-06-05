"use client"

interface SparklesProps {
  className?: string
  density?: number
  color?: string
  size?: number
  speed?: number
}

export function Sparkles({
  className,
  color = "#1a1a1a",
}: SparklesProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className || ""}`}>
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(2px 2px at 10% 20%, ${color}, transparent),
            radial-gradient(2px 2px at 30% 60%, ${color}, transparent),
            radial-gradient(2px 2px at 50% 10%, ${color}, transparent),
            radial-gradient(2px 2px at 70% 80%, ${color}, transparent),
            radial-gradient(2px 2px at 90% 40%, ${color}, transparent),
            radial-gradient(1px 1px at 15% 85%, ${color}, transparent),
            radial-gradient(1px 1px at 45% 35%, ${color}, transparent),
            radial-gradient(1px 1px at 75% 55%, ${color}, transparent),
            radial-gradient(1px 1px at 85% 15%, ${color}, transparent),
            radial-gradient(1px 1px at 25% 45%, ${color}, transparent),
            radial-gradient(2px 2px at 60% 90%, ${color}, transparent),
            radial-gradient(2px 2px at 80% 25%, ${color}, transparent)`,
          backgroundSize: "200% 200%",
          animation: "sparkle-drift 20s ease-in-out infinite",
        }}
      />
      <style>{`
        @keyframes sparkle-drift {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(-5%, 3%); }
          50% { transform: translate(3%, -5%); }
          75% { transform: translate(-3%, 2%); }
        }
      `}</style>
    </div>
  )
}
