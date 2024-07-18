import React from 'react';
import './lighthouse.css';
import lighthouseImage from '../../assets/lighthouse2.png';
import lighthouseGround from '../../assets/lighthouseGround.png';


import ParticlesComponent from './particles';

// homepage consists of a lighthouse with stars in the background.
const lighthouse = () => 
{
	return (

		<section className="homepage"   style={{position: 'relative', overflow: 'hidden', height: '100vh' }}>
 
      <ParticlesComponent id = "particlesComp" />

      <div className = "textDiv">
      	<br/>
      	<br/>
      	<br/>
      	<br/>
      	<br/>
      	<br/>
      	<br/>
      	<br/>
      	Let me show you what I can do...
      </div>


			<div className ="lighthouseSil">
				<img src={lighthouseImage} className = "lighthouseImage" />
				<img src={lighthouseGround} className = "groundImage" />	
			</div> 
			
		</section>

		)

} 
export default lighthouse;
