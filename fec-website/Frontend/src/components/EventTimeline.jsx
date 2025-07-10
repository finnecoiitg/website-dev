import './EventsTimeline.css';
import React, {useState, useEffect} from 'react';
import Img from "../img/events/upcoming.png"

const cards = [
  {
    title: "Europe Street beat 1",
    link: "www.instagram.com",
    desc: "A quick guide to better understanding HIPAA compliance, obligations and rezre",
    date: "February 14, 2023",
    image: Img
  },
  {
    title: "Europe Street beat 2",
    link: "www.instagram.com",
    desc: "A quick guide to better understanding HIPAA compliance, obligations and rezre",
    date: "February 14, 2023",
    image: Img
  },
  {
    title: "Europe Street beat 3",
    link: "www.instagram.com",
    desc: "A quick guide to better understanding HIPAA compliance, obligations and rezre",
    date: "February 14, 2023",
    image: Img
  },
  {
    title: "Europe Street beat 4",
    link: "www.instagram.com",
    desc: "A quick guide to better understanding HIPAA compliance, obligations and rezre",
    date: "February 14, 2023",
    image: Img
  },
];

export default function EventTimeline(){
    const [index, setIndex] = useState(0);
    const [visibleCards, setVisibleCards] = useState(3);
    useEffect(() => {
    const updateVisibleCards = () => {
        const width = window.innerWidth;
          if (width < 800) {
            setVisibleCards(1);
          } else if (width < 1000) {
            setVisibleCards(2);
          } else {
            setVisibleCards(3);
          }
        };

        updateVisibleCards(); // Initial check
        window.addEventListener("resize", updateVisibleCards);
        return () => window.removeEventListener("resize", updateVisibleCards);
    }, []);
  
    const handlePrev = () => {
        if (index > 0) setIndex(index - 1);
    };
  
    const handleNext = () => {
        if (index < cards.length - visibleCards) setIndex(index + 1);
    };
  
    // Slice cards to show 3, add empty slots if needed
    const visible = cards.slice(index, index + visibleCards);
    while (visible.length < visibleCards) {
        visible.push(null);
    }
  
    return (
        <div className="carousel-container">
            <button onClick={handlePrev} className="carousel-btn">←</button>
            <div className="carousel-track">
                {visible.map((card, i) =>
                    card ? (
                        <div className="carousel-card" key={i}>
                            <img src={card.image}  alt="card" />
                            <h3>{card.title}</h3>
                            <p>{card.link} {card.desc}</p>
                            <p>{card.date}</p>
                            <button className="register-btn">REGISTER →</button>
                        </div>
                    ) : (
                      <div className="carousel-card empty" key={i}></div>
                    )
                )}
            </div>
            <button onClick={handleNext} className="carousel-btn">→</button>
        </div>
    );
}