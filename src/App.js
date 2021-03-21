import Header from './Header'
import Footer from './Footer'
import AboutMe from './AboutMe'
import Contact from './Contact'
import Projects from './Projects'
import {
    HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">

        <Router>
        <div>
            <Header/>
            <main className="container-fluid">
                <Switch>
                    <Route path="/projects">
                        <Projects/>
                    </Route>
                    <Route path="/contact">
                        <Contact/>
                    </Route>
                    <Route path="/">
                        <AboutMe/>
                    </Route>
                </Switch>
            </main>
            <Footer/>
        </div>
        </Router>
      
    </div>
  );
}

export default App;
