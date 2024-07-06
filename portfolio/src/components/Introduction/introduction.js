import React from 'react';
import './introduction.css';
import headshot from '../../assets/headshotTransparent.png';

const introduction = () =>
{
	return (
		<section className="introduction">

			<div className = "name">
				<span>Cameron King</span>
				<br />
				<br />
				<br />
			</div>

		  <div className="headshotContainer">
				<img src={headshot} alt="Profile" className="headshot"/>
      </div>

      <div className = "titles">
				<br />
				<br />

	    	<span>Software Engineer. &nbsp;  &nbsp; </span>
				<span>Game Developer. &nbsp;  &nbsp;</span>
				<span>Sports Fan. &nbsp;  &nbsp;</span>
				<span>Newfoundlander. &nbsp;  &nbsp;</span>
				<br />
				<br />
				<br />
			
			</div>
			
			<div className = "description">
				<span> Hey! I'm a Computer Engineer from Memorial University of Newfoundland's Class of 2024.
				I have a passion for software development and am always trying to learn an improve myself as an engineer.
				Here are a few of the things that I've worked on recently.
				 </span>
			</div>	

		</section>




	)
}

export default introduction;
