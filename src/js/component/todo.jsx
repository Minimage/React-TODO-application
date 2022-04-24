import React from "react";

const TODO = () => {
	const [text, setText] = React.useState("");
	const [list, setList] = React.useState(["This is text", "this is the 2nd"]);

	return (
		<div>
			<input
				value={text}
				onChange={(e) => setText(e.target.value)}
				onKeyPress={(e) => {
					if (e.key === "Enter") {
						let newList = [...list];
						newList.push(text);
						setList(newList);
						setText("");
					}
				}}></input>

			<ul>
				{list.map((item, index) => {
					return (
						<li key={index}>
							{item}{" "}
							<button
								onClick={() => {
									const newList = list.filter(
										(item, j) => index !== j
									);
									setList(newList);
								}}>
								Delete
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
export default TODO;
