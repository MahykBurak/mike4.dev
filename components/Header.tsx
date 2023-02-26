'use client';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const navLinks = {
  '/': {
    name: 'Anasayfa',
    x: 0,
    y: 0,
    w: '128px',
  },
  '/about': {
    name: 'hakkında',
    x: 128,
    y: 35,
    w: '128px',
  },
  '/blog': {
    name: 'blog',
    x: 256,
    y: 69,
    w: '128px',
  },
  '/wall': {
    name: 'duvar',
    x: 384,
    y: 104,
    w: '128px',
  },
};
export default function Header() {
  const pathname = usePathname() || '/';
  return (
    <div className="header flex justify-center pt-6">
      <nav className="flex flex-row items-start relative ">
        <div className="flex flex-row space-x-0 mb-2">
          {navLinks[pathname as keyof typeof navLinks] ? (
            <>
              <div>
                <motion.div
                  className="absolute w-32 bg-neutral-800 h-[34px] rounded-md z-[-1]"
                  layoutId="nav"
                  initial={{
                    opacity: 0,
                    width: 0,
                    x: navLinks[pathname as keyof typeof navLinks].x,
                  }}
                  animate={{
                    opacity: 1,
                    x: navLinks[pathname as keyof typeof navLinks].x,
                    width: 128,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 350,
                    damping: 30,
                  }}
                />
              </div>
            </>
          ) : null}
          {Object.keys(navLinks).map((path) => {
            const isActive = pathname === path;
            return (
              <Link
                key={path}
                href={path}
                className={clsx(
                  'transition-all text-center hover:text-neutral-800 w-32 dark:hover:text-neutral-200 py-[5px]',
                  {
                    'text-neutral-500': !isActive,
                    'font-bold': isActive,
                  }
                )}
              >
                {navLinks[path as keyof typeof navLinks].name}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
