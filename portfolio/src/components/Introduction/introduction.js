import React from 'react';
import './introduction.css';
import headshot from '../../assets/headshotTransparent.png';

const introduction = () =>
{
	return (
		<section className="introduction">

      <div className = "titles">
				<br />
				<br />

	    	<span style={{color:"#8BE9FD"}}>Engineer.  &nbsp;</span>
				<span style={{color:"#50FA7B"}}>Game Dev. &nbsp;</span>
				<span style={{color:"#FF79C6"}}>Sports Fan. &nbsp;</span>
				<span style={{color:"#F1FA8C"}}>Newfoundlander. &nbsp;</span>
				<br />
				<br />

			</div>

		  <div className="headshotContainer">
				<img src={headshot} alt="Profile" className="headshot"/>
      </div>

      <div className = "pageBreak">
				<br />
				<br />
      </div>
			<div className = "name">
				<span>Hey! I'm Cameron.</span>
				<br />
				<br />
			</div>

			
			<div className = "description">
				<br />
				<br />
				<span> I am a Computer Engineer from the Memorial University of Newfoundland and 
					I have a passion for software development. I am always trying to learn and improve myself as an engineer, 
					by researching and creating new projects. 
				</span>
				<br />
				<br />
				
				<span> 
					Here are a few of the things that I've worked on recently.
				</span>
			</div>	

		</section>




	)
}

export default introduction;
