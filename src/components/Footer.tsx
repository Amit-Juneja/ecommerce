import { FC } from 'react';
import Link from 'next/link';

const Footer: FC = () => (
  <footer className="bg-blueGray-50 mt-auto">
    <hr className="bg-blueGray-200" />
    <div className="w-full inline-flex items-center justify-center h-16">
      <span className="inline-flex">
        Made by&nbsp;
        <Link href="https://www.linkedin.com/in/amit-juneja25/" passHref>
          <a target="_blank" className="text-blueGray-500 hover:text-blueGray-700">
            Amit Juneja
          </a>
        </Link>
      </span>
    </div>
  </footer>
);

export default Footer;
