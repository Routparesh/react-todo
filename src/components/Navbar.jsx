import React from 'react';

const /* The `Navbar` component is a functional component in a React application. It is rendering a `<div>` element. */
	Navbar = () => {
		return (
			<nav className="flex justify-between bg-slate-700 text-white py-2">
				<div className="logo">
					<span className="font-bold text-xl mx-8">iTasks</span>
				</div>
				<ul className="flex gap-8 mx-9">
					<li className="cursor-pointer hover:font-bold transition-all">Your Tasks</li>
					<li className="cursor-pointer hover:font-bold transition-all">Home</li>
				</ul>
			</nav>
		);
	};

export default Navbar;
