import Header from './Header'
import '../css/App.css'
import Intro from './Intro'
import Calculator from './Calculator'

function App() {


  return (
    <div className="app-container">
     <Header/>
     <Intro/>

    <p id='helper_text'>Perform business calculations below.</p>

    <Calculator/>

    </div>
  )
}

export default App
