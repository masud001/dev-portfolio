import React from 'react';
import { useRouteError } from 'react-router-dom';
const ErrorPage = () => {
	const error = useRouteError();
	return (
		<React.Fragment>
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				<i>{error.status}</i>
			</p>
			<p>
				<i>{error.error.message}</i>
			</p>
			<p>
				<i>{error.statusText}</i>
			</p>
		</React.Fragment>
	);
};

export default ErrorPage;
