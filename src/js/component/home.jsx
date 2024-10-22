import React, {useState, useEffect} from "react";
import SecondsCounter from "./SecondsCounter"


//create your first component
const Home = () => {
	const [conter, setConter] = useState(0)
	

	useEffect(() => {

		setInterval(() => {
			setConter((pre) => pre + 1 ) 
		
		}, 1000);
	
	} ,[]) 
	
	return (
		<div className="text-center">
			<SecondsCounter seconds={conter}/>
		</div>
	);
};

export default Home;
