import { HTMLAttributes, PropsWithChildren } from "react";

export default function TextSmall({ className, ...props }: PropsWithChildren<HTMLAttributes<HTMLElement>>) {
  return (
    <small className={`text-sm font-medium leading-none ${className}`} {...props} />
  )
}
