import { cx } from '@/lib/utils'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return <div className="text-center h-screen flex">Hello word!</div>
}
