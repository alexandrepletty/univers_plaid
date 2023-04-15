// --- Dependencies
import {BrowserRouter as Router} from 'react-router-dom'

// --- Stack
import MainStack from './stacks/MainStack'

// --- Application
export default function App() {
	return (
		<Router>
			<MainStack />
		</Router>
	)
}
