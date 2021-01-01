import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail'

function App() {
  return (
    <Router>
      <Route path='/' component={Home} exact />
      <Route path='/detail/:id' component={Detail} />
    </Router>
  )
}

export default App
