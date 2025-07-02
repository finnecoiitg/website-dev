import React from 'react';
import './Teams.css';
import Piggy3 from '../img/piggy3 3.svg';
import Ellipse from '../img/Ellipse 37.svg';

const teamData = [
  { title: "FEC QUANT" },
  { title: "FEC DEFI" },
  { title: "FEC CAPITAL" },
];



function Teams() {
  return (
    <>
      <div className="bhai">
        <div className="india">
          <div className="akshaya">
            {teamData.map((team, index) => (
              <div className="card" key={index}>
                <div className="card-title">
                  <p>{team.title.split(' ')[0]} <br /> {team.title.split(' ')[1]}</p>
                </div>
                <div className="card-body-aks">
                  <p className="card-text-aks">
                    Our mission is to create meaningful opportunities for personal and professional growth.
                    Through collaboration, innovation, and hard work, we strive to create sustainable solutions to the challenges facing our community.
                  </p>
                  <img alt="piggy-img" src={Piggy3} className="piggy-aks" />
                  <img alt="ellipse" src={Ellipse} className="ellipse1-aks" />
                </div>
                <div className="arrow-circle-aks">
                  <b>→</b>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Teams;
