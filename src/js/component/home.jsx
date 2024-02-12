import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [color, setColor] = useState("red");

	return (
		<div className="traffic-light">
			<div
				onClick={() => setColor("red")}
				className={
					"light red" + (color === "red" ? " glow" : "")
				}style={{'--glow-color': 'red'}}></div>
			<div 
				onClick={() => setColor("yellow")}
				className={
					"light yellow" + (color=== "yellow" ? " glow" : "")
				}style={{'--glow-color': 'yellow'}}></div>
			<div 
				onClick={() => setColor("green")}
				 className={
					"light green" + (color === "green" ? " glow" : "")
				}style={{'--glow-color': 'green'}}></div>
		</div>
	);
}

export default Home;
