import React from 'react';
import { resourcesLinks, platformLinks, communityLinks } from '../constants/index';

interface Link {
  href: string;
  text: string;
}

interface LinkSectionProps {
  title: string;
  links: Link[];
}

const LinkSection: React.FC<LinkSectionProps> = ({ title, links }) => (
  <div>
    <h3 className="text-md font-semibold mb-4 bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
      {title}
    </h3>
    <ul className="space-y-2">
      {links.map((link, index) => (
        <li key={index}>
          <a className="text-neutral-300 hover:text-white" href={link.href}>
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer: React.FC = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <LinkSection title="Resources" links={resourcesLinks} />
        <LinkSection title="Platform" links={platformLinks} />
        <LinkSection title="Community" links={communityLinks} />
      </div>
    </footer>
  );
};

export default Footer;