// --- Dependencies
import {Route, Routes} from 'react-router'

// --- Screens
import HomeScreen from '../screens/HomeScreen'

// --- Components
import Container from '../components/container/Container'

// --- Stack: MainStack.jsx
export default function MainStack() {
	return (
		<Container>
			<Routes>
				<Route path="/" element={<HomeScreen />} />
			</Routes>
		</Container>
	)
}