import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

export function BadgeCheck({ className }) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full bg-green-500 px-2 py-0.5 text-xs font-medium text-white",
        className,
      )}
    >
      <Check className="mr-1 h-3 w-3" />
      Verified
    </div>
  )
}