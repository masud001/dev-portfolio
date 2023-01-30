import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const LayoutPage = () => {
	return (
		<div>
			<header>
				<h1>header</h1>
				<nav>
					<ul>
						<li>
							<Link to='/'>home</Link>
						</li>
						<li>
							<Link to='works'>works</Link>
						</li>
						<li>
							<Link to='about'>about-me</Link>
						</li>
						<li>
							<Link to='contact'>contacts</Link>
						</li>
					</ul>
				</nav>
			</header>
			<hr />
			<main>
				<Outlet />
			</main>
			<hr />
			<footer>
				<h1>footer</h1>
			</footer>
		</div>
	);
};

export default LayoutPage;
