import React from "react";
import TODO from "./todo.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="d-flex justify-content-center">
					<TODO />
				</div>
			</div>
		</div>
	);
};

export default Home;
