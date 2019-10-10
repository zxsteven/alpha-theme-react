import React from 'react'

import './header.styles.scss'


const Header = () => {
  return (
    <header id="header" className="alt">
			<h1><a href="/">Alpha</a></h1>
			<nav id="nav">
				<ul>
					<li><a href="/generic">Generic</a></li>
					<li><a href="/elements">Elements</a></li>
					<li><a href="/contact">Contact</a></li>
					<li><a href="/" className="button">Sign Up</a></li>
				</ul>
			</nav>
		</header>
  )
}

export default Header