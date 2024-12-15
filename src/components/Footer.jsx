import { communityLinks, platformLinks, resourcesLinks } from "../constants";

const Footer = () => {
	const footerSections = [
		{ name: "Resources", links: resourcesLinks },
		{ name: "Platform", links: platformLinks },
		{ name: "Community", links: communityLinks },
	];

	return (
		<footer className="grid grid-cols-1 sm:grid-cols-3 my-20 sm:mx-10 lg:mx-20 pt-20 border-t border-neutral-800">
			{footerSections.map((section, index) => (
				<div
					key={index}
					className="flex flex-col items-center sm:items-start gap-4 sm:gap-6 px-10 mx-8 mb-12"
				>
					<h6 className="font-bold text-lg tracking-wider">{section.name}</h6>

					{section.links.map((link, idx) => (
						<a
							key={idx}
							href={link.href}
							className=" hover:font-bold hover:tracking-wider transition
							duration-300"
						>
							{link.text}
						</a>
					))}
				</div>
			))}
		</footer>
	);
};

export default Footer;
