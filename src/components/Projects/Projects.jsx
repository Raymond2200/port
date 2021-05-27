import "./Projects.css"
import React, { useState } from 'react';
import Moose from "./Moose/Moose"
import Buzz from "./Buzz/Buzz"
import Quoter from "./Quoter/Quoter"

function Projects(props) {
    let [current, setCurrent] = useState(1);

    return(
        <div className="projBC">
            <h1 className="projTitle">My Projects</h1>
            <div className="projCards">
                {(current===1)? 
                <div className="projCard">
                    <img src="https://i.imgur.com/jDPXmXe.png"  className="projImg" alt="1"/>
                    <div className="projSelect">
                        <h2 className="projName">Moose Tracks</h2>
                        <p className="projTeam">Wildlife Spotting App</p>
                        <p className="projTeam">Team Based Project</p>
                    </div>
                </div>:
                <div onClick={() => setCurrent(1)} className="projCard">
                    <img src="https://i.imgur.com/jDPXmXe.png"  className="projImg" alt="1"/>
                    <div className="projCont">
                        <h2 className="projName">Moose Tracks</h2>
                        <p className="projTeam">Wildlife Spotting App</p>
                        <p className="projTeam">Team Based Project</p>
                    </div>
                </div>}
                {(current === 2)? 
                <div className="projCard">
                    <img src="https://i.imgur.com/cLDoFTE.png"  className="projImg" alt="1"/>
                    <div className="projSelect">
                        <h2 className="projName">Buzz</h2>
                        <p className="projTeam">Coffee Review App</p>
                        <p className="projTeam">Team Based Project</p>
                    </div>
                </div>:
                <div className="projCard" onClick={() => setCurrent(2)}>
                    <img src="https://i.imgur.com/cLDoFTE.png"  className="projImg" alt="1"/>
                    <div className="projCont">
                        <h2 className="projName">Buzz</h2>
                        <p className="projTeam">Coffee Review App</p>
                        <p className="projTeam">Team Based Project</p>
                    </div>
                </div>}
                {(current===3)? 
                <div className="projCard">
                    <img src="https://i.imgur.com/DaDX3H5.png"  className="projImg" alt="1"/>
                    <div className="projSelect">
                        <h2 className="projName">Quoter</h2>
                        <p className="projTeam">Quote Tracking App</p>
                        <p className="projTeam">Solo Project</p>
                    </div>
                </div>:
                <div className="projCard" onClick={() => setCurrent(3)}>
                    <img src="https://i.imgur.com/DaDX3H5.png"  className="projImg" alt="1"/>
                    <div className="projCont">
                        <h2 className="projName">Quoter</h2>
                        <p className="projTeam">Quote Tracking App</p>
                        <p className="projTeam">Solo Project</p>
                    </div>
                </div>}
            </div>
            <div className="projPres">
                {(current===1)? <Moose />:(current===2)? <Buzz/>:<Quoter/>} 
            </div>
        </div>
    )
}

export default Projects