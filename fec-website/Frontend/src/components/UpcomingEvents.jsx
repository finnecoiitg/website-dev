import React, { useState,useRef , useEffect } from "react";
import "./UpcomingEvents.css";
import Up from "../img/events/upcoming.png";

const Events = [
  { title: "Europe Street beat", date: "February 23, 2023", description: "MnAnalyse is India’s only and Largest Mergers & Acquisition Based Case Competition. Started in 2022 it attracts teams from more than 100 i", src: Up },
  { title: "Europe Street beat", date: "February 23, 2023", description: "MnAnalyse is India’s only and Largest Mergers & Acquisition Based Case Competition. Started in 2022 it attracts teams from more than 100 i", src: Up },
  { title: "Europe Street beat", date: "February 23, 2023", description: "MnAnalyse is India’s only and Largest Mergers & Acquisition Based Case Competition. Started in 2022 it attracts teams from more than 100 i", src: Up },
  { title: "Europe Street beat", date: "February 23, 2023", description: "MnAnalyse is India’s only and Largest Mergers & Acquisition Based Case Competition. Started in 2022 it attracts teams from more than 100 i", src: Up },
  { title: "Europe Street beat", date: "February 23, 2023", description: "MnAnalyse is India’s only and Largest Mergers & Acquisition Based Case Competition. Started in 2022 it attracts teams from more than 100 i", src: Up },
  { title: "Europe Street beat", date: "February 23, 2023", description: "MnAnalyse is India’s only and Largest Mergers & Acquisition Based Case Competition. Started in 2022 it attracts teams from more than 100 i", src: Up },
  { title: "Europe Street beat", date: "February 23, 2023", description: "MnAnalyse is India’s only and Largest Mergers & Acquisition Based Case Competition. Started in 2022 it attracts teams from more than 100 i", src: Up },
  { title: "Europe Street beat", date: "February 23, 2023", description: "MnAnalyse is India’s only and Largest Mergers & Acquisition Based Case Competition. Started in 2022 it attracts teams from more than 100 i", src: Up },
  { title: "Europe Street beat", date: "February 23, 2023", description: "MnAnalyse is India’s only and Largest Mergers & Acquisition Based Case Competition. Started in 2022 it attracts teams from more than 100 i", src: Up },
  { title: "Europe Street beat", date: "February 23, 2023", description: "MnAnalyse is India’s only and Largest Mergers & Acquisition Based Case Competition. Started in 2022 it attracts teams from more than 100 i", src: Up },
];

export default function UpcomingEvents() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const listRef = useRef(null);
  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  // Decide items per page based on screen width
  const isMobile = window.innerWidth <= 768;
  const itemsPerPage = isMobile ? 4 : 8; // 4x1 on mobile, 5x2 on desktop

  const totalPages = Math.ceil(Events.length / itemsPerPage);

  const indexOfLastEvent = currentPage * itemsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - itemsPerPage;
  const currentEvents = Events.slice(indexOfFirstEvent, indexOfLastEvent);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    if (listRef.current) {
      listRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="up-container" ref={listRef}>
      <div className="center-list">
        <div className="upcoming-list" >
          {currentEvents.map((event, index) => (
            <div className="event-card" key={index}>
              {index === 0 && (
                <div className="dropdown-container">
                  <button
                    onClick={toggleDropdown}
                    className={`dropdown-button ${isOpen ? "open" : ""}`}
                  >
                    {selected}
                    <span className={`arrow ${isOpen ? "open" : ""}`}>
                      &#9662;
                    </span>
                  </button>

                  {isOpen && (
                    <div className="dropdown-menu">
                      {["All", "Upcoming", "Completed"].map((option) => (
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
                <div className="event-btn">
                  <button type="submit" className="register-button">
                    Register <span>→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => paginate(i + 1)}
              className={`page-number ${currentPage === i + 1 ? "active" : ""}`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
