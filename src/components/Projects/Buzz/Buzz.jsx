import './Buzz.css'

function Buzz(props) {
    return(
        <div className="mooseCont">
            <h2 className="mooseTitle">Buzz</h2>
            <h3>The project</h3>
            <p className="mooseText">Buzz is an app designed for mobile use by a team of Full Stack Developers and User Experience Designers. It’s main feature revolves around being able to look up and add specific coffee reviews for coffee lovers. To be able to do so users must first create an account. Once done they will be able to add specific coffees to store and add associated reviews. </p>
            <div className='siteInf'>
                <a className="linked" rel="noopener noreferrer" href="https://buzzcollectco.herokuapp.com/" target="_blank">The Site</a>
                <a className="linked" rel="noopener noreferrer" href="https://github.com/Ckrcok/buzz" target="_blank">The Code</a>
                <h3>Guest Account</h3>
                <p>Username: Guest &nbsp;&nbsp;  Password: Welcomee </p>
            </div>
            <h3>Technologies Involved</h3>
            <div className="skillContainer">
                <div className="skillSingle"> <img src="https://img.icons8.com/color/96/000000/heroku.png" alt=" "/><p className="skillTxt">Heroku</p></div>
                <div className="skillSingle"> <img src="https://img.icons8.com/color/96/000000/css3.png" alt=" "/><p className="skillTxt">CSS</p></div>
                <div className="skillSingle"> <img src="https://i.imgur.com/sxqbXcf.png" alt=" "/><p className="skillTxt">Django</p></div>
                <div className="skillSingle"> <img className="skillSz" src="https://img.icons8.com/plasticine/100/000000/github.png" alt="1"/><p className="skillTxt">GitHub</p></div>
                <div className="skillSingle"> <img className="skillSz" src="https://i.imgur.com/4KGqaPU.png" alt=" "/><p className="skillTxt">Yelp API</p></div>
                <div className="skillSingle"> <img src="https://img.icons8.com/color/96/000000/postgreesql.png" alt=" "/><p className="skillTxt">PostgreSQL</p></div>
                <div className="skillSingle"> <img src="https://img.icons8.com/color/96/000000/amazon-s3.png" alt=" "/><p className="skillTxt">AWS S3</p></div>
                <div className="skillSingle"> <img src="https://img.icons8.com/color/96/000000/python.png" alt=" "/><p className="skillTxt">Python 3</p></div>
                <div className="skillSingle"> <img className="skillSz" src="https://i.imgur.com/OMqd5I8.png" alt=" "/><p className="skillTxt">HTML5</p></div>
            </div>
            <div className="moosePics">
                <img className="mooseImg" alt=" " src="https://i.imgur.com/GSht3DQ.png" />
                <img className="mooseImg" alt=" " src="https://i.imgur.com/TfTfetx.png" />
                <img className="mooseImg" alt=" " src="https://i.imgur.com/npkAj48.png" />
                <img className="mooseImg" alt=" " src="https://i.imgur.com/ydDaTJt.png" />
            </div>
        </div>  
    )
}

export default Buzz