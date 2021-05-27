import './About.css'

function About(props) {
    return (
        <div className="aboutBG">
            <div>
                <h1 className="aboutHead">About Me</h1>
                <p className="aboutTxt">Hello, my name is Raymond a recent graduate from the General Assembly Software Development immersive course. I am a <strong>full-stack developer</strong> who is an avid learner and challenge seeker.</p>
                <br/>
                <p className="aboutTxt">My background originates in finance and the capital markets which helps give me a strong flexibility when working with customer needs, as well as technical requirements. My transition to a software developer was initiated by me need to learn and be challenged. To that end I am constantly bringing my best and always seeking to improve his best. I am a question asker, but one that seeks to take his own initiative.</p>
                <br/>
                <p className="aboutTxt">I am currently completing a python machine learning course on Udemy and will be developing my skills with react native in the near future.</p>
            </div>
            <h2 className="aboutStr">Strong Skills</h2>
            <div className="skillContainer">
                <div className="skillSingle"> <img src="https://img.icons8.com/color/96/000000/html-5--v2.png" alt=""/><p className="skillTxt">JavaScript</p></div>
                <div className="skillSingle"> <img src="https://img.icons8.com/color/96/000000/python.png" alt=""/><p className="skillTxt">Python 3</p></div>
                <div className="skillSingle"> <img src="https://img.icons8.com/color/96/000000/nodejs.png" alt=""/><p className="skillTxt">Node.js</p></div>
                <div className="skillSingle"> <img className="skillSz" src="https://i.imgur.com/OMqd5I8.png" alt=""/><p className="skillTxt">HTML5</p></div>
                <div className="skillSingle"> <img src="https://img.icons8.com/color/96/000000/css3.png" alt=""/><p className="skillTxt">CSS</p></div>
                <div className="skillSingle"> <img src="https://i.imgur.com/f97E9si.png" alt=""/><p className="skillTxt">ExpressJS</p></div>
                <div className="skillSingle"> <img src="https://img.icons8.com/color/96/000000/react-native.png" alt=""/><p className="skillTxt">ReactJS</p></div>
                <div className="skillSingle"> <img src="https://img.icons8.com/color/96/000000/bootstrap.png" alt=""/><p className="skillTxt">Bootstrap</p></div>
                <div className="skillSingle"> <img src="https://i.imgur.com/W2yOMF2.png" alt=""/><p className="skillTxt">MongoDB</p></div>
                <div className="skillSingle"> <img className="skillSz" src="https://img.icons8.com/plasticine/100/000000/github.png" alt=""/><p className="skillTxt">GitHub</p></div>
            </div>
            <h2 className="aboutStr">Working Skills</h2>
            <div className="skillContainer">
                <div className="skillSingle"> <img src="https://i.imgur.com/sxqbXcf.png" alt=""/><p className="skillTxt">Django</p></div>
                <div className="skillSingle"> <img className="skillSz" src="https://i.imgur.com/jCJWCZ3.png" alt=""/><p className="skillTxt">JWT</p></div>
                <div className="skillSingle"> <img src="https://i.imgur.com/7ukKABg.png" alt=""/><p className="skillTxt">Google Auth</p></div>
                <div className="skillSingle"> <img src="https://img.icons8.com/color/96/000000/postgreesql.png" alt=""/><p className="skillTxt">PostgreSQL</p></div>
                <div className="skillSingle"> <img src="https://img.icons8.com/color/96/000000/amazon-s3.png" alt=""/><p className="skillTxt">AWS S3</p></div>
                <div className="skillSingle"> <img src="https://img.icons8.com/fluent/96/000000/google-maps-new.png" alt=""/><p className="skillTxt">Google Maps API</p></div>
                <div className="skillSingle"> <img src="https://img.icons8.com/color/96/000000/material-ui.png" alt=""/><p className="skillTxt">Material UI</p></div>
                <div className="skillSingle"> <img src="https://img.icons8.com/color/96/000000/heroku.png" alt=""/><p className="skillTxt">Heroku</p></div>
            </div>
        </div>
    )
}

export default About
