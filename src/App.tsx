// Packages
import { useState } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import styled from 'styled-components';

// Styles and animations
import { GlobalStyle } from './styles/globalStyle';
import { AnimatePresence } from 'framer-motion';

//Pages
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { WorksPage } from './pages/WorksPage';
import { ContactPage } from './pages/ContactPage';
import { BlogHome } from './blog/display/BlogHome';
// import { BlogInDepth } from './blog/display/BlogInDepth';

// Components
import { Navbar } from './components/Navbar';
import { ScrollTop } from './components/ScrollTop';
import { Opening } from './components/Opening';
import { Footer } from './components/Footer';
import { InProgress } from './components/InProgress';
import { NotFound } from './components/NotFound';

function App() {
	// States
	const [navbarOpen, setNavbarOpen] = useState(false);

	// Background colors
	let backgroundColor;
	const location = useLocation();
	location.pathname === "/services" || 
		location.pathname ==="/contact" ||
		location.pathname === ("/blog") ? backgroundColor ="#EAE8DC" : 
		backgroundColor = "#1B1B1B";
	
	window.onload = function () {
        setTimeout(function() {
            window.scrollTo(0,0);
        } , 1)
    }

    return (
		<div style={{background: backgroundColor, transition: 'background 0.5s ease', overflow: 'hidden'}}>
			<GlobalStyle />
            <Opening />
			<Navbar navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} navColor={'transparent'}/>
			<SApp className="App" style={{background: 'transparent'}}>
				<AnimatePresence exitBeforeEnter >
					<Switch location={location} key={location.pathname}>
						<Route exact path="/" component={HomePage} />
						<Route exact path="/services" component={ServicesPage} />
						<Route exact path="/works" component={WorksPage} />
						<Route exact path="/contact" component={ContactPage} />
						<Route exact path="/inprogress" component={InProgress} />
						<Route exact path="/blog" component={BlogHome} />
						<Route exact path="/blog/:blogid" component={InProgress} />

						<Route component={NotFound} />
					</Switch>
				</AnimatePresence>
			</SApp>
			<Footer></Footer>
			<ScrollTop />	
		</div>
		
    );
}

export default App;
 
const SApp = styled.div`
	max-width: 1440px;
	margin: auto;
	overflow: hidden;
`;



