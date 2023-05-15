import React from "react";
import { TextContext, SET_RESET, initialState } from "../utilities/MyContext";
import { useContext } from "react";

export default function Reset() {
	const [state, dispatch] = useContext(TextContext);

	const handleResetChange = () => {
		dispatch({ type: SET_RESET, payload: initialState });
	};

	return (
		<div>
			<p className="text-lg font-medium text-slate-700 mt-2">Reset:</p>
			<button
				className={`border ${
					state.textSize === initialState.textSize
						? "border-gray-300"
						: "border-red-400"
				} rounded-md py-2 px-4 mt-2 mb-2 hover:border-red-400 hover:text-white-500`}
				onClick={() => handleResetChange()}>
				Reset Settings
			</button>
		</div>
	);
}
