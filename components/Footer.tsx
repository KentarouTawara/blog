import Link from 'next/link';

type Props = {
  href: string;
  children: string;
};

const ExternalLink = ({ href, children }: Props) => (
  <a
    className="text-gray-900 dark:text-white"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-start max-w-4xl mx-auto w-full mb-8">
      <hr className="w-full border-1 border-gray-200 mb-8" />
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-2">
        <div className="flex flex-col space-y-4">
          <Link href="/">
            <a className="text-gray-900 dark:text-white">Home</a>
          </Link>
          <Link href="/about">
            <a className="text-gray-900 dark:text-white">About</a>
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://twitter.com/kentarotawara">
            Twitter
          </ExternalLink>
          <ExternalLink href="https://github.com/KentarouTawara">
            GitHub
          </ExternalLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
