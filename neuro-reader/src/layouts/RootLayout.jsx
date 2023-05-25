import React from "react";
import { NavLink, Outlet } from "react-router-dom";
export default function RootLayout() {
	return (
		<div>
			<div className="root-layout">
				<header>
					<nav className="md:flex md:justify-around lg:flex lg:justify-around">
						<div className="flex-items-center text-right text-base mt-6">
							<NavLink to="/">Home</NavLink>
							<NavLink to="about">About</NavLink>
							<NavLink to="how">How to use</NavLink>
						</div>
					</nav>
				</header>

				<main className="md:container md:mx-auto ">
					<div className="mb-8">
						<h1 className="text-center text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-transparent bg-gradient-to-r from-pink-300 via-purple-300 to-blue-400 bg-clip-text">
							Neuro Reader
						</h1>
						<h4 className="text-center text-lg xl:text-3xl py-2 text-slate-300">
							Upgrade your learning today
						</h4>
					</div>

					<Outlet />
				</main>
			</div>
		</div>
	);
}
