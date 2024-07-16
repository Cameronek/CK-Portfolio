import React from 'react';
import './lighthouse.css';
import lighthouseImage from '../../assets/lighthouse2.png';
import lighthouseGround from '../../assets/lighthouseGround.png';

// homepage consists of a lighthouse with stars in the background.
const lighthouse = () => 
{
	return (

		<section className="homepage">

			<div className ="lighthouseSil">
				<img src={lighthouseImage} className = "lighthouseImage" />
				<img src={lighthouseGround} className = "groundImage" />	
			</div>
			
		</section>

		)

} 
export default lighthouse;
