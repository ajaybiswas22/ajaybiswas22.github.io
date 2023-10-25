import './App.css';
import { NavbarElement } from './Navbar';
import { BackgroundImagePage } from './component'; 
const Home = () =>  {
    return (
        <>
        <div className="App">
            <NavbarElement /> 
            <div class="flex-bio">
                <div class="flex-bio-child bio">
                    <h2>About Me</h2>
                    <p>From my childhood, I was passionate about computers and would love spending hours playing games in it. Throughout my school days I developed interest towards programming and computer based skills.</p>
                    <p>I followed my passion and completed my Bachelor's and Master's in the field of computer science.</p>
                    <p>Currently I am working as an Associate Software Development Engineer in Sigmoid and have one year experience in Data Engineering.</p>

                </div>
                <div class="flex-bio-child photo"><BackgroundImagePage /></div>
            </div>
        </div>
        </>
    );
}

export {Home}