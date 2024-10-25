import { resourcesLinks, platformLinks, communityLinks } from "../constants";
const Footer = () => {
    return (
        <footer className="mt-20 border-t py-10 border-neutral-700">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4"> {/* Updated the grid */}
                <div>
                    <h3 className="text-md font-semibold mb-4 bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">Resources</h3>
                    <ul className="space-y-2">
                        {resourcesLinks.map((link, index) => (
                            <li key={index}>
                                <a className="text-neutral-300 hover:text-white" 
                                href={link.href}>{link.text}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="text-md font-semibold mb-4 bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">Platform</h3>
                    <ul className="space-y-2">
                        {platformLinks.map((link, index) => (
                            <li key={index}>
                                <a className="text-neutral-300 hover:text-white" 
                                href={link.href}>{link.text}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="text-md font-semibold mb-4 bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">Community</h3>
                    <ul className="space-y-2">
                        {communityLinks.map((link, index) => (
                            <li key={index}>
                                <a className="text-neutral-300 hover:text-white" 
                                href={link.href}>{link.text}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
