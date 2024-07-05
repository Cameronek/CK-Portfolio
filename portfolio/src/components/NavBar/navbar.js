import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
// import logo from '../../assets/logoSmallDark.png';
import linkedIn from '../../assets/linkedInDark.png';
import github from '../../assets/githubDark.png';
import email from '../../assets/emailDark.png';
import { Link } from 'react-scroll';

const navbar = () => {
	return (
		<nav className="navbar">
			<img src={logo} alt="logo" className="logo"/>
			<div className="desktopMenu">
				<Link className="desktopMenuListItem">Home </Link>
				<Link className="desktopMenuListItem">About Me </Link>
				<Link className="desktopMenuListItem">Projects </Link>
				<Link className="desktopMenuListItem">Resume </Link>
			</div>

			<div className="desktopButtonContainer">
				<button className="desktopMenuButton">
					<img src={linkedIn} alt="linkedInDesktopButton" className="linkedInDesktopButton"/>
				</button>

				<button className="desktopMenuButton">
					<img src={github} alt="githubDesktopButton" className="githubDesktopButton"/>
				</button>

				<button className="desktopMenuButton">
					<img src={email} alt="emailDesktopButton" className="emailDesktopButton"/>
				</button>
			</div>
		</nav>
	)
}

export default navbar;