import React from "react";
import Card from './card.jsx';
import Jumbotron from'./jumbotron.jsx';

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Cartoon</h1>
			<Jumbotron/>
			<div className="row">
				<Card titulo= 'Tom and Jerry' img= "https://w0.peakpx.com/wallpaper/658/1005/HD-wallpaper-tom-and-jerry-animasyon-cizgi-film.jpg "/>
				
				<Card titulo= 'Pink Panther' img="https://images5.alphacoders.com/429/429930.jpg "/>
				
				<Card titulo= 'Looney Toones' img=" https://wallpaper.dog/large/10903121.jpg"/>				
		
			</div>	
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>
	);
};

export default Home;
