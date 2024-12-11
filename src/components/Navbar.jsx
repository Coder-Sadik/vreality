import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const toggleNavbar = () => setMenuOpen(!menuOpen);

	return (
		<nav className="sticky top-0 z-100 py-3 backdrop-blur-lg border-b border-neutral-700/80">
			<div className="container px-4 mx-auto relative text-sm">
				<div className="flex justify-between items-center">
					{/* icon and title */}
					<div className="flex items-center flex-shrink-0">
						<img className="h-10 w-10 mr-2" src={logo} alt="logo" />
						<span className="text-xl tracking-tight">VReality</span>
					</div>

					{/* nav items */}
					<ul className="hidden lg:flex ml-14 space-x-12">
						{navItems.map((item, index) => (
							<li key={index}>
								<a href="{item.href}">{item.label}</a>
							</li>
						))}
					</ul>

					{/* buttons only for large screen */}
					<div className="hidden lg:flex justify-center items-center space-x-12">
						<a className="border rounded-md py-2 px-3" href="#">
							SIgn In
						</a>
						<a
							className=" rounded-md py-2 px-3 bg-gradient-to-r from-orange-500 to-orange-800"
							href="#"
						>
							Create an account
						</a>
					</div>

					{/* mobile menu icon */}
					<div className="lg:hidden md:flex flex-col justify-end">
						<button onClick={toggleNavbar}>
							{menuOpen ? <X /> : <Menu />}
						</button>
					</div>
				</div>

				{/* mobile menu items*/}
				{menuOpen && (
					<div className="lg:hidden fixed right-0 flex flex-col justify-center items-center  z-50 w-full p-12 bg-neutral-900">
						<ul>
							{" "}
							{navItems.map((item, index) => (
								<li key={index} className="py-4">
									<a href="{item.href}">{item.label}</a>
								</li>
							))}
						</ul>
						<div className="space-x-6 flex mt-4">
							<a className="border rounded-md py-2 px-3" href="#">
								SIgn In
							</a>
							<a
								className=" rounded-md py-2 px-3 bg-gradient-to-r from-orange-500 to-orange-800"
								href="#"
							>
								Create an account
							</a>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
