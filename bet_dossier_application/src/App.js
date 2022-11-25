import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Home} from './Components/Home';
import { Admin } from "./Components/Admin";
import { Cashier } from "./Components/Cashier";
import { FundRequest } from "./Components/FundRequest";
import {BrowserRouter,Route,Routes,NavLink} from 'react-router-dom';

function App() {
  return (
		<BrowserRouter>
			<div className="App container">
				<h2
					className="d-flex justify-content-center m-3"
					style={{ color: "pink" }}
				>
					BETDOSSIER COMPANY
				</h2>
				<nav className="navbar navbar-expand-sm bg-light navbar-dark">
					<ul className="navbar-nav">
						<li className="nav-item m-1">
							<NavLink className="btn btn-light btn-outline-primary" to="/home">
								HOME
							</NavLink>
						</li>
						<li className="nav-item m-1">
							<NavLink
								className="btn btn-light btn-outline-primary"
								to="/admin"
							>
								ADMIN
							</NavLink>
						</li>
						<li className="nav-item- m-1">
							<NavLink
								className="btn btn-light btn-outline-primary"
								to="/cashier"
							>
								CASHIER
							</NavLink>
						</li>
						<li className="nav-item- m-1">
							<NavLink
								className="btn btn-light btn-outline-primary"
								to="/fund-request"
							>
								FUNDREQUEST
							</NavLink>
						</li>
					</ul>
				</nav>
				<Routes>
					<Route path="/home" element={<Home />} />
					<Route path="/admin" element={<Admin />} />
					<Route path="/cashier" element={<Cashier />} />
					<Route path="/fund-request" element={<FundRequest />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
