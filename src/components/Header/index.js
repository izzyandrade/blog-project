import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

export default class Header extends React.Component{
	render(){
		return(
			<header id='main-header'>
				<div className="header-content">
					<Link to='/'>PORTFOLIO IZZY</Link>
					<Link to='/login'>Entrar</Link>
				</div>
			</header>
		);
	}
}