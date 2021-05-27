import "./Moose.css"

function Moose(props) {
    return(
        <div className="mooseCont">
            <h2 className="mooseTitle">Moose Tracks</h2>
            <h3>The project</h3>
            <p className="mooseText">Moose Tracks is about empowering users across the continent whether in remote communities, on the road, near a campsite, or in a regular suburban neighborhood. Moose tracks enables it’s users to view sightings of potentially hazardous or inconvenient wildlife in there area. This allows users to plan and react accordingly. To add a spot a user simply needs to create an account with us and by adding a spot they can alert users in their local area of the animals approximate location. Spots do timeout so there is no need to worry about removing your old spots.</p>
            <div className='siteInf'>
                <a className="linked" rel="noopener noreferrer" href="https://moosetracks.herokuapp.com/" target="_blank">The Site</a>
                <a className="linked" rel="noopener noreferrer" href="https://github.com/Raymond2200/WildLifeSpotter" target="_blank">The Code</a>
                <h3>Guest Account</h3>
                <p>Username: guest@guest &nbsp;&nbsp;  Password: welcome </p>
            </div>
            <h3>Technologies Involved</h3>
            <div className="skillContainer">
                <div className="skillSingle"> <img src="https://img.icons8.com/fluent/96/000000/google-maps-new.png" alt="1"/><p className="skillTxt">Google Maps API</p></div>
                <div className="skillSingle"> <img src="https://img.icons8.com/color/96/000000/material-ui.png" alt="1"/><p className="skillTxt">Material UI</p></div>
                <div className="skillSingle"> <img src="https://img.icons8.com/color/96/000000/heroku.png" alt="1"/><p className="skillTxt">Heroku</p></div>
                <div className="skillSingle"> <img src="https://img.icons8.com/color/96/000000/css3.png" alt="1"/><p className="skillTxt">CSS</p></div>
                <div className="skillSingle"> <img src="https://i.imgur.com/f97E9si.png" alt="1"/><p className="skillTxt">ExpressJS</p></div>
                <div className="skillSingle"> <img src="https://img.icons8.com/color/96/000000/react-native.png" alt="1"/><p className="skillTxt">ReactJS</p></div>
                <div className="skillSingle"> <img src="https://img.icons8.com/color/96/000000/nodejs.png" alt="1"/><p className="skillTxt">Node.js</p></div>
                <div className="skillSingle"> <img src="https://i.imgur.com/W2yOMF2.png" alt="1"/><p className="skillTxt">MongoDB</p></div>
                <div className="skillSingle"> <img className="skillSz" src="https://i.imgur.com/jCJWCZ3.png" alt="1"/><p className="skillTxt">JWT</p></div>
                <div className="skillSingle"> <img className="skillSz" src="https://img.icons8.com/plasticine/100/000000/github.png" alt="1"/><p className="skillTxt">GitHub</p></div>
            </div>
            <div className="moosePics">
                <img className="mooseImg" src="https://i.imgur.com/BD4V14b.png" alt="1"/>
                <img className="mooseImg" src="https://i.imgur.com/ZCI0ASf.png" alt="1"/>
                <img className="mooseImg" src="https://i.imgur.com/WfQPEne.png" alt="1"/>
                <img className="mooseImg" src="https://i.imgur.com/hpnPx0I.png" alt="1"/>
            </div>
        </div>  
    )
}

export default Moose