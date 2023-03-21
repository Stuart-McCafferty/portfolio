import React, {useState} from 'react';
import './App.css';
import { Link } from 'react-scroll';
import HomeContainer from './containers/HomeContainer';
import AboutContainer from './containers/AboutContainer';
import ContactContainer from './containers/ContactContainer';
import ProjectsContainer from './containers/ProjectsContainer';
import { renderToStaticMarkup } from "react-dom/server";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export default function App(){
	return (
		<>
		<head>
			<link href='https://fonts.googleapis.com/css2?family=Sawarabi+Gothic&display=swap' rel='stylesheet'/>
		</head>
		<div className="App">
			<header className="nav">
				<nav className="nav__container__actions">
					<ul className="nav_ul">
					<li className="nav_li">
							<Link activeClass="active" smooth spy to="home">
								Home
							</Link>
						</li>
						<li className="nav_li">
							<Link activeClass="active" smooth spy to="about">
								About
							</Link>
						</li>
						<li className="nav_li">
							<Link activeClass="active" smooth spy to="projects">
								Projects
							</Link>
						</li>
						<li className="nav_li">
							<Link activeClass="active" smooth spy to="contact">
								Contact Me
							</Link>
						</li>
					</ul>
				</nav>
				<li className="icons">	
					<a href="http://www.bbc.co.uk"> <FontAwesomeIcon icon={faGithub} size="2x"/></a>
				</li>
				<li className="icons">
					<a href="http://www.google.com"> <FontAwesomeIcon icon={faLinkedinIn} size="2x"/></a>
				</li>
			</header>
			<section id="home"><HomeContainer/></section>
			<section id="about"><AboutContainer/></section>
			<section id="projects"><ProjectsContainer/></section>
			<section id="contact" ><ContactContainer/></section>
		
		</div>
		</>
	)
}

