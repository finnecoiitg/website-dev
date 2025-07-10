import React, {useState} from "react";
import './UpcomingEvents.css';
import Up from '../img/events/upcoming.png';

const Events = [
    {title: "Europe Street beat", date: "February 23, 2023", description: "MnAnalyse is the India’s only and Largest Mergers & Ecquisition Based Case Competition. Started in 2022 it attracts teams from more than 100 i", src: Up},
    {title: "Europe Street beat", date: "February 23, 2023", description: "MnAnalyse is the India’s only and Largest Mergers & Ecquisition Based Case Competition. Started in 2022 it attracts teams from more than 100 i", src: Up},
    {title: "Europe Street beat", date: "February 23, 2023", description: "MnAnalyse is the India’s only and Largest Mergers & Ecquisition Based Case Competition. Started in 2022 it attracts teams from more than 100 i", src: Up},
    {title: "Europe Street beat", date: "February 23, 2023", description: "MnAnalyse is the India’s only and Largest Mergers & Ecquisition Based Case Competition. Started in 2022 it attracts teams from more than 100 i", src: Up},
]

export default function UpcomingEvents() { 
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState("All");
    const options = ["All", "Upcoming", "Completed"];

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleSelect = (option) => {
      setSelected(option);
      setIsOpen(false);
    }; 
    return (
        <div className="up-container">
            <div className="center-list">
                <div className="upcoming-list">
                    {Events.map((event, index) => (
                        <div className="event-card" key={index}>
                            {index === 0 && (
                              <div className="dropdown-container">
                                  <button onClick={toggleDropdown} className={`dropdown-button ${isOpen ? "open" : ""}`}>
                                    {selected}
                                    <span className={`arrow ${isOpen ? "open" : ""}`}>&#9662;</span>
                                  </button>

                                  {isOpen && (
                                    <div className="dropdown-menu">
                                      {options.map((option) => (
                                        <button
                                          key={option}
                                          onClick={() => handleSelect(option)}
                                          className={`dropdown-item ${
                                            selected === option ? "selected" : ""
                                          }`}
                                        >
                                          {option}
                                        </button>
                                      ))}
                                    </div>
                                  )}
                                </div>
                            )}
                            <img src={event.src} alt={event.title} className="event-image" />
                            <p className="event-title">{event.title}</p>
                            <p className="event-description">{event.description}</p>
                            <div className="event-footer">
                                <p className="event-date">{event.date}</p>
                                <div className="event-btn"><button type="submit" className="register-button"> Register <span>→</span></button></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
