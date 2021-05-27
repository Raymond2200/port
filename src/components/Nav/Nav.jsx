import './Nav.css';

function Nav(props) {
    
    let mailTo = () => {
        window.open("mailto:raycasgrain@gmail.com")
    }

    return (
        <div className="nav">
            <ul>
                <li><a href="https://github.com/Raymond2200"><img alt="Github" className="navImg" src="https://i.imgur.com/Vu0sWdk.png"/></a></li>
                {/* <li className="linked">About</li>
                <li className="linked">Projects</li>
                <li className="linked">Contact</li> */}
                <li className="linked" onClick={mailTo}> Contact Me</li>
                <li><a href="https://www.linkedin.com/in/raymondcasgrain/"><img className="navImg2" alt="linkein" src="https://i.imgur.com/JtxJz8Y.png"/></a></li>
            </ul>
        </div>
    )
}

export default Nav