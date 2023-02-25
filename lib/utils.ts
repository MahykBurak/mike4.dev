import { clsx, ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cx(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}
