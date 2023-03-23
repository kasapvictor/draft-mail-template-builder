import {BrowserRouter, Link, NavLink, Route, Routes} from "react-router-dom";

import './App.css'

import {Home} from "./Home.jsx";
import {Template1} from "./templates/Template1.jsx";
import {Template2} from "./templates/Template2.jsx";
import {Template3} from "./templates/Template3.jsx";
import {Template4} from "./templates/Template4.jsx";
import {Template as Template5} from "./template5/Template.jsx";

const Routers = () => {
    return (<Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/template1" element={<Template1/>}/>
            <Route path="/template2" element={<Template2/>}/>
            <Route path="/template3" element={<Template3/>}/>
            <Route path="/template4" element={<Template4/>}/>
            <Route path="/template5" element={<Template5/>}/>
        </Routes>)
}

const Header = () => {
    return (<header>
        <nav>
            MJML Blocks:
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='template1'>Template1</NavLink></li>
            <li><NavLink to='template2'>Template2</NavLink></li>
            <li><NavLink to='template3'>Template3</NavLink></li>
            <li><NavLink to='template4'>Template4</NavLink></li>
            <li><NavLink to='template5'>Template5</NavLink></li>
        </nav>
    </header>)
}

function App() {
    return (<BrowserRouter>
        <div className="container">
            <Header/>
            <Routers/>
        </div>
    </BrowserRouter>)
}

export default App
