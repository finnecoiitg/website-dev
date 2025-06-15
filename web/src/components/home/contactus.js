import React from 'react'
import "./contactus.css"
import Img from "../img/team.svg"
import Yes from "../img/lowerleft.svg"



function Contactus() {
  return (
    <main>
        <div className="uppercontainer">
            <div className="upleft">
                <p className="smaller">
                    Want to collaborate with us or<br />explore finance
                </p>
                <p className="larger">
                    Discover your potential<br /> with us
                </p>
                <p className="larger2">
                    Discover your<br /> potential with <br />us
                </p>
                <button type="Button" className="but">
                    JOIN US &nbsp; &rarr;
                </button>
            </div>
            <div className="upright">
                <img src={Img} alt="Insert Image here" className="pic" />
            </div>
        </div>

        <div className="lowercontainer">
            <div className="lowleft">
                <img src={Yes} alt="No image" className="pic2" />
            </div>
            <div className="lowright">
                <h2 className="desktop">Have a question or an idea<br /> to share with us? Drop us <br /> a line</h2>
                <h2 className="mobile">Have a question <br />or an idea to <br />share with us?<br /> Drop us a line
                </h2>
                <form>
                    <label htmlFor="name">Your Name</label><br />
                    <input type="text" id="name" name="name" required />
                    <br />
                    <label htmlFor="email">Email</label><br />
                    <input type="email" id="email" name="email" required />
                    <br />
                    <label htmlFor="description">Description</label><br />
                    <input type="text" id="description" name="description" required />
                    <br />
                    <button type="submit" className="submit">SUBMIT &nbsp; &rarr;</button>
                </form>
            </div>
        </div>
    </main>
  )
}

export default Contactus