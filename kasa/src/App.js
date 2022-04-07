import "./style/App.css";
import Home from "./views/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route exact path="/" element={<Home />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
