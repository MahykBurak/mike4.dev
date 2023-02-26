import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="mainContainer mt-12">
      <div className="flex flex-col-reverse sm:flex-row">
        <div className="flex flex-col text-center sm:pr-8 sm:text-left">
          <h1 className="mb-1 font-acumin text-5xl font-black text-black dark:text-white sm:text-8xl">
            Burak Mike
          </h1>
          <h2 className="mb-4 text-lg text-gray-700 dark:text-gray-200 sm:text-2xl"></h2>
          <p className="mb-16 text-gray-600 dark:text-gray-400 lg:text-xl">
            Kendimce geliştirdiğim projelerime
            <Link href="https://github.com/MahykBurak">Github</Link>
            adresimden ulaşabilirsiniz
          </p>
        </div>
        <div className="mx-auto mb-8 h-32 w-32 shrink-0 items-start rounded-xl shadow-xl shadow-gray-500 dark:shadow-lg dark:shadow-black sm:mb-0 md:ml-auto md:mr-0">
          <Image
            src="https://images.unsplash.com/profile-1651235203210-1edaba0e7021image?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff"
            className="rounded-xl"
            width={128}
            height={128}
            alt="Burak Mike"
          />
        </div>
      </div>
    </div>
  );
}
