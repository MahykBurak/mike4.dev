import { getNowPlaying } from '@/lib/spotify';
import Link from 'next/link';
import SpotifyNowPlaying from './SpotifyNowPlaying';

async function nowPlaying() {
  const response = await getNowPlaying();
  if (response.status === 204) {
    return { isPlaying: false } as const;
  }
  const data = await response.json();
  const song = data.item;
  const isPlaying = true;
  const name = song.name;
  const artistName = song.artists
    .map((_artist: any) => _artist.name)
    .join(', ');
  const albumName = song.album.name;
  const albumImage = song.album.images[2].url;
  const songUrl = song.external_urls.spotify;
  const songData = {
    isPlaying,
    name,
    artistName,
    albumName,
    albumImage,
    songUrl,
  } as const;
  return songData;
}
export default async function Footer() {
  const data = await nowPlaying();
  return (
    <footer className="mainContainer mx-auto mb-8 flex max-w-2xl flex-col items-start justify-center pt-10">
      <hr className="border-1 mb-8 w-full border-gray-200 dark:border-gray-800" />
      <SpotifyNowPlaying data={data} />
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
