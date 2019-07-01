import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'
const Header = () =>(
	<header id="main-header">
		<a className='logo' href='/'>BotApp</a>
		<div>
			<a className='resto' href='/bots'>Bots</a>
			<a className='resto' href='/chats'>Chats</a>
		</div>


	</header>
)

export default Header