import * as React from 'react'
import { cn } from '../../lib/utils'

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(
        'h-10 w-full rounded-xl border border-slate-700 bg-slate-900 px-3 text-sm text-slate-100 outline-none placeholder:text-slate-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20',
        className,
      )}
      {...props}
    />
  )
})

Input.displayName = 'Input'
