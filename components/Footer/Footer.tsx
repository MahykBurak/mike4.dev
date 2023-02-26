import Link from 'next/link';
import SpotifyNowPlaying from './SpotifyNowPlaying';

export default async function Footer() {
  return (
    <footer className="mainContainer mx-auto mb-8 flex max-w-2xl flex-col items-start justify-center pt-10">
      <hr className="border-1 mb-8 w-full border-gray-200 dark:border-gray-800" />
      <SpotifyNowPlaying />
      <div className="grid w-full max-w-2xl grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link className="footerLink" href="/">
            {' '}
            Anasayfa{' '}
          </Link>
          <Link className="footerLink" href="/about">
            {' '}
            Hakkımda{' '}
          </Link>
          <Link className="footerLink" href="/wall">
            {' '}
            Duvar{' '}
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <Link className="footerLink" href="https://twitter.com/burakmahyk">
            {' '}
            Twitter{' '}
          </Link>
          <Link className="footerLink" href="https://github.com/MahykBurak">
            {' '}
            GitHub{' '}
          </Link>
          <Link className="footerLink" href="https://unsplash.com/@mahykisreal">
            {' '}
            Unsplash{' '}
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <Link className="footerLink" href="/photos">
            {' '}
            Galeri{' '}
          </Link>
          <Link className="footerLink" href="/bookmarks">
            {' '}
            Yerimleri{' '}
          </Link>
          <Link className="footerLink" href="/projects">
            {' '}
            Projeler{' '}
          </Link>
        </div>
      </div>
    </footer>
  );
}
