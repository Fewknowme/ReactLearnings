import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Translate from "./components/Translate";
import Dropdown from "./components/Dropdown";
import Route from "./components/Route";
import Header from "./components/Header";

const items = [
	{
		title: "what is React?",
		content: "Front-End JS framework",
	},
	{
		title: "why React?",
		content: "Flexible af",
	},
	{
		title: "lorem ipsum dorem?",
		content: "lorenm ipsum dorem?",
	},
];

const options = [
	{
		label: "The Color Red",
		value: "red",
	},
	{
		label: "The Color Green",
		value: "green",
	},
	{
		label: "A Shade of Blue",
		value: "blue",
	},
];

export default () => {
	const [selected, setSelected] = useState(options[0]);
	return (
		<div>
			<Header />
			<Route path="/">
				<Accordion items={items} />
			</Route>
			<Route path="/list">
				<Search />
			</Route>
			<Route path="/dropdown">
				<Dropdown
					label="Select a Color"
					options={options}
					selected={selected}
					onSelectedChange={setSelected}
				/>
			</Route>
			<Route path="/translate">
				<Translate />
			</Route>
		</div>
	);
};
