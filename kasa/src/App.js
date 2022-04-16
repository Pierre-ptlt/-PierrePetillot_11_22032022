import "./style/App.css";
import Home from "./views/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About/About";
import Error from "./components/404/Error";

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="about" element={<About />} />
				<Route exact path="*" element={<Error />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
