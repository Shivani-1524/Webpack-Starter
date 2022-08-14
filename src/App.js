import _ from 'lodash';
import "./App.css";
import Logo from './logo.svg'

const App = ({ name }) => {
    return `
    <div class="container">
    <h1> ${_.join(["Greetings,", name], " ")} </h1>
    <h2>This is the Webpack starter kit</h2>
    <img src='${Logo}' alt='build logo' />
    </div>
   `
}

export default App