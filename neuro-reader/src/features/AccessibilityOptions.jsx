import React from "react";
import AdjustAlignment from "./AdjustAlignment";
import AdjustColor from "./AdjustColor";
import AdjustFontWeight from "./AdjustFontWeight";
import AdjustTextFont from "./AdjustTextFont";
import AdjustTextSize from "./AdjustTextSize";
import Reset from "./Reset";

export default function AccessibilityOptions() {
	return (
		<>
			<div className="container mx-auto mt-4">
				<h4 className="text-xl font-bold mb-8 text-slate-700">
					Accessibility options
				</h4>
			</div>
			<AdjustTextSize />
			<AdjustColor />
			<AdjustTextFont />
			<AdjustFontWeight />
			<AdjustAlignment />
			<Reset />
		</>
	);
}
