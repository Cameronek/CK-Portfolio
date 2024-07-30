import React from 'react';
import './resume.css';
import resumeImage from '../../assets/resumeScreenshot.jpg';

const resume = () => {
	return (
	<div class ="resumeSection">
		<img class="resumeImage" src={resumeImage} />
	</div>
)}

export default resume;