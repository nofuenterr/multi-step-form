import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FormProviderLayout from './components/FormProviderLayout';
import Error from './pages/Error';
import Info from './pages/Info';
import Plan from './pages/Plan';
import Addons from './pages/Addons';
import Summary from './pages/Summary';
import ThankYou from './pages/ThankYou';

function App() {
	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={<FormProviderLayout />}
					errorElement={<Error />}
				>
					<Route index={true} element={<Info />}></Route>
					<Route path="/plan" element={<Plan />}></Route>
					<Route path="/addons" element={<Addons />}></Route>
					<Route path="/summary" element={<Summary />}></Route>
					<Route path="/thank-you" element={<ThankYou />}></Route>
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
