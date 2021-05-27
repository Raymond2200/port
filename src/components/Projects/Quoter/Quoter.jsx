import './Quoter.css'

function Quoter(props) {
    return (
        <div className="mooseCont">
            <h2 className="mooseTitle">Quoter</h2>
            <h3>The project</h3>
            <p className="mooseText">Quoter is an express based web application. It’s primary function is in allowing users to track quotes on a personal list. On this list users can add quotes which are randomly fetched from an API. Or if they want they can search the app’s database for an existing one. If no quote is present than the user can create new quotes which will be added to the database and made available to other users.</p>
            <div className='siteInfo'>
                <a className="linked" rel="noopener noreferrer" href="https://secret-river-35567.herokuapp.com/" target="_blank">The Site</a>
                <a className="linked" rel="noopener noreferrer" href="https://github.com/Raymond2200/Project2" target="_blank">The Code</a>
            </div>
            <h3>Technologies Involved</h3>
            <div className="skillContainer">
                <div className="skillSingle"> <img src="https://img.icons8.com/color/96/000000/heroku.png" alt="1"/><p className="skillTxt">Heroku</p></div>
                <div className="skillSingle"> <img src="https://img.icons8.com/color/96/000000/css3.png" alt="1"/><p className="skillTxt">CSS</p></div>
                <div className="skillSingle"> <img src="https://i.imgur.com/f97E9si.png" alt="1"/><p className="skillTxt">ExpressJS</p></div>
                <div className="skillSingle"> <img src="https://img.icons8.com/color/96/000000/nodejs.png" alt="1"/><p className="skillTxt">Node.js</p></div>
                <div className="skillSingle"> <img src="https://i.imgur.com/W2yOMF2.png" alt="1"/><p className="skillTxt">MongoDB</p></div>
                <div className="skillSingle"> <img className="skillSz" src="https://img.icons8.com/plasticine/100/000000/github.png" alt="1"/><p className="skillTxt">GitHub</p></div>
                <div className="skillSingle"> <img src="https://img.icons8.com/color/96/000000/bootstrap.png" alt="1"/><p className="skillTxt">Bootstrap</p></div>
                <div className="skillSingle"> <img src="https://i.imgur.com/7ukKABg.png" alt="1"/><p className="skillTxt">Google Auth</p></div>
                <div className="skillSingle"> <img className="skillSz" src="https://i.imgur.com/OMqd5I8.png" alt="1"/><p className="skillTxt">HTML5</p></div>

            </div>
            <div className="moosePics">
                <img className="quoterImg" src="https://i.imgur.com/DLg5nIh.png" alt="1"/>
                <img className="quoterImg" src="https://i.imgur.com/GyVxbpc.png" alt="1"/>
            </div>
        </div>  
    )
}

export default Quoter