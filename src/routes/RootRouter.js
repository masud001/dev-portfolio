import { createRoutesFromElements, createBrowserRouter, Route } from 'react-router-dom';
import AboutPage from '../pages/AboutPage/AboutPage';
import ContactPage from '../pages/ContactPage/ContactPage';
import HomePage from '../pages/HomePage/HomePage';
import LayoutPage from '../pages/LayoutPage/LayoutPage';
import ErrorPage from '../pages/NotFoundPage/ErrorPage';
import WorkPage from '../pages/WorkPage/WorkPage';

const RootRouter = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<LayoutPage />} errorElement={<ErrorPage />}>
			<Route errorElement={<ErrorPage />}>
				<Route index element={<HomePage />} />
				<Route path='contact' element={<ContactPage />} />
				<Route path='works' element={<WorkPage />} />
				<Route path='about' element={<AboutPage />} />
			</Route>
		</Route>
	)
);
export default RootRouter;
