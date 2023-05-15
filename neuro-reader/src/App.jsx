import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavigationHeader from "./utilities/NavigationHeader";
// pages to import
import About from "./utilities/About";
import Home from "./utilities/Home";
import "tailwindcss/tailwind.css";
import NeuroReader from "./features/NeuroReader";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
	NavLink,
} from "react-router-dom";
// layouts
import RootLayout from "./layouts/RootLayout";
import HowToUse from "./utilities/HowToUse";
import { TextProvider } from "./utilities/MyContext";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<RootLayout />}>
			<Route index element={<Home />} />
			<Route path="about" element={<About />} />
			<Route path="how" element={<HowToUse />} />
		</Route>
	)
);

function App() {
	return (
		<>
			<TextProvider>
				<div>
					{/* <NavigationHeader /> */}

					{/* <NeuroReaderBranding /> */}
					{/* <NavigationHeader /> */}
					{/* <NavLink to="/">Home</NavLink> */}
					{/* <NavLink to="about">About</NavLink> */}
					{/* <div className="bg-primary text-secondary p-4 rounded-lg shadow-lg">
  This is a styled div using Tailwind CSS classes
</div> */}

					<RouterProvider router={router} />
				</div>
			</TextProvider>
		</>
	);
}

export default App;
