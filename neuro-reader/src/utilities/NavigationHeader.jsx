import { Link, Routes, Route, NavLink } from "react-router-dom";
import About from "./About";
import "tailwindcss/tailwind.css";

export default function NavigationHeader() {
	return (
		<nav className="text-right">
			<div className="space-x-8 md:flex md:justify-end ">
				<NavLink exact to="/">
					Home
				</NavLink>
				<NavLink exact to="about">
					About
				</NavLink>
			</div>
			<div></div>
		</nav>
	);
}
