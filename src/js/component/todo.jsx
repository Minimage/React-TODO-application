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

			<div>
				{list.map((item, index) => {
					return (
						<div key={index}>
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
						</div>
					);
				})}
			</div>
		</div>
	);
};
export default TODO;
