
// import './App.css'
import Home from './components/Home'
import ProductContext from './components/ProductContext'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Footer from './components/Footer'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'



function App() {
  

  return (
    <div>
    {/* aici am facut partea de routing si am declarat si restul componentelor */}
    <Router> 
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product/:id' element={<ProductContext/>}/>
      </Routes>
      <Sidebar/>
      <Footer/>
    </Router>
    
    </div>
  )
}

export default App
