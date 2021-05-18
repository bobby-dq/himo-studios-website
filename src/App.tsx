// Packages
import { useState } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

// Styles and animations
import { GlobalStyle } from './styles/globalStyle';
import { AnimatePresence } from 'framer-motion';

//Pages
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { WorksPage } from './pages/WorksPage';
import { ContactPage } from './pages/ContactPage';
import { FaqPage } from './pages/FaqPage';

// Components
import { Navbar } from './components/Navbar'

function App() {
	const [navbarOpen, setNavbarOpen] = useState(false);
	
	let backgroundColor;
	const location = useLocation();
	location.pathname === "/services" || location.pathname==="/contact" ? backgroundColor ="#EAE8DC" : backgroundColor = "#1B1B1B";
	
    return (
		<div className="App" style={{background: backgroundColor}}>
			<GlobalStyle />
			<Navbar navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} navColor={'transparent'}/>
			<div>
				<AnimatePresence exitBeforeEnter >
				<Switch location={location} key={location.pathname}>
					<Route  exact path="/" component={HomePage} />
					<Route exact path="/services" component={ServicesPage} />
					<Route exact path="/works" component={WorksPage} />
					<Route exact path="/faq" component={FaqPage} />
					<Route exact path="/contact" component={ContactPage} />
				</Switch>
				</AnimatePresence>	
			</div>
			
		</div>
    );
}

export default App;
 