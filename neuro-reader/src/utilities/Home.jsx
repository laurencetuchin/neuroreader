import React from "react";
import AdjustTextSize from "../features/AdjustTextSize";
import NeuroReader from "../features/NeuroReader";

export default function Home() {
	const textSize = "text-5xl";
	return (
		<div className="container m-auto">
			<div className="py-4">
				{/* Other potential header options */}
				{/* <h1 class="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-orange-300 via-teal-500 to-purple-700 bg-clip-text text-transparent">Neuro Reader</h1>       */}
				{/* <h1 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl  font-bold text-transparent bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 bg-clip-text">Neuro Reader</h1> */}
				{/* <h1 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl  font-bold text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text">Neuro Reader</h1> */}
				{/* <h1 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl  font-bold text-transparent bg-gradient-to-r from-blue-400 via-teal-500 to-green-500 bg-clip-text">Neuro Reader</h1> */}
				{/* <h1 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl  font-bold text-transparent bg-gradient-to-r from-pink-200 via-purple-300 to-blue-400 bg-clip-text">Neuro Reader</h1> */}
				{/* <h1 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl  font-bold text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text">Neuro Reader</h1> */}
				{/* <h1 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl  font-bold text-transparent bg-gradient-to-r from-pink-400 via-red-500 to-orange-500 bg-clip-text">Neuro Reader</h1> */}
				{/* <h1 class="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl  font-bold bg-gradient-to-r from-pink-400 to-blue-500 bg-clip-text text-transparent">Neuro Reader</h1> */}
				{/* <h1 class="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl  font-bold bg-gradient-to-r from-purple-400 to-teal-500 bg-clip-text text-transparent">Neuro Reader</h1> */}

				{/* <p className='font-sans text-base py-2'>It's time to upgrade your reading</p> */}

				{/* Add animation that bolds the writing in the P tag */}
				<NeuroReader />
			</div>
		</div>
	);
}
