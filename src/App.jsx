import _ from 'lodash';
import "./App.css";
import Logo from './logo-pack.svg'


const App = () => {
    return <>
        <h1> {_.join(["Welcome,", "user"], " ")} </h1>
        <h2>Webpack Starter Kit + React</h2>
        <div className="img-container">
            <img src={Logo} alt='build logo' />
        </div>
    </>
}


export default App