import React from 'react';
import './introduction.css';
import headshot from '../../assets/headshotTransparent.png';

const introduction = () =>
{
	return (
		<section className="introduction">

      <div className = "titles">

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

			</div>

			
			<div className = "description">
				<br />

				<span> I am a graduate from the Computer Engineer program at the Memorial University of Newfoundland and 
					I have a passion for software development. I have two years of previous experience in a variety of roles, 
					first as an electrical engineering student at PanGeo Subsea, then as a researcher at the National Research Council of Canada 
					and Furtwangen University, and more recently as a software developer at C-Core and PragmaClin. 

				</span>
				<br />
				<br />
				
			</div>	
				<br />
				<br />
				<br />

		</section>




	)
}

export default introduction;
