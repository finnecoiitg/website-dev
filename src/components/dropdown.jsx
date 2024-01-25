import React, { useState } from 'react';
import './dropdown.css';
import sphinx2 from './images/sphinx2.svg';
import mnanalyse2 from './images/Mnanalyse2.svg';
import casestudy2 from './images/Casestudy2.svg';
import nft2 from './images/NFT2.svg';

const DropDown = () => {
  const [selectedOption, setSelectedOption] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  const cards = [
    // Replace with your actual card data
    { id: 1, 
      title: 'Sphinx Group Case', 
      description: 'MnAnalyse is the India’s only and Largest Mergers & Ecquisition Based Case Competition. Started in 2022 it attracts teams from more than 100 i', 
      date: '2023-09-15', 
      img: sphinx2 
    },
    { id: 2, 
      title: 'MnAnalyse-Case comp', 
      description: 'MnAnalyse is the India’s only and Largest Mergers & Ecquisition Based Case Competition. Started in 2022 it attracts teams from more than 100 i', 
      date: '2023-09-10', 
      img: mnanalyse2 
    },
    { id: 3, 
      title: 'Fundamental Case Study', 
      description: 'MnAnalyse is the India’s only and Largest Mergers & Ecquisition Based Case Competition. Started in 2022 it attracts teams from more than 100 i',  
      date: '2024-09-05', 
      img: casestudy2 
    },
    { id: 4, 
      title: 'Europe Street beat', 
      description: 'MnAnalyse is the India’s only and Largest Mergers & Ecquisition Based Case Competition. Started in 2022 it attracts teams from more than 100 i',  
      date: '2024-09-20', 
      img: nft2 
    },
    { id: 5, 
      title: 'Sphinx Group Case', 
      description: 'MnAnalyse is the India’s only and Largest Mergers & Ecquisition Based Case Competition. Started in 2022 it attracts teams from more than 100 i',  
      date: '2024-09-02', 
      img: sphinx2 
    },
    { id: 6, 
      title: 'MnAnalyse-Case comp', 
      description: 'MnAnalyse is the India’s only and Largest Mergers & Ecquisition Based Case Competition. Started in 2022 it attracts teams from more than 100 i',  
      date: '2023-09-25', 
      img: mnanalyse2 
    },
  ];

  // Filter cards based on the selected option
  const filteredCards = cards.filter((card) => {
    if (selectedOption === 'all') return true;
    if (selectedOption === 'upcoming') return new Date(card.date) >= new Date();
    if (selectedOption === 'past') return new Date(card.date) < new Date();
    return false;
  });

  // Calculate the start and end indexes for displaying cards on the current page
  const cardsPerPage = 4;
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const currentCards = filteredCards.slice(startIndex, endIndex);

  // Handle dropdown selection change
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
    setCurrentPage(1); // Reset to the first page when the option changes
  };

  // Handle pagination
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className='dropdown-list'>
      <div className='dropdown-title'>Find your inspiration at <br></br>our engaging events</div>
      <div className='dropdown-select'>
        <label htmlFor="options" ></label>
        <select id="options" value={selectedOption} onChange={handleOptionChange}>
          <option value="all">All</option>
          <option value="upcoming">Upcoming</option>
          <option value="past">Past</option>
        </select>
      </div>
      <div className='dropdown-cards-container'>
        {currentCards.map((card) => (
          <div key={card.id} className="card">
            <img src={card.img} alt={`Image for ${card.title}`} className="testimonial-img" />
            <div className="card-text">
              <p className='card-title'>{card.title}</p>
              <p className='card-description'>{card.description}</p>
              <div className='card-date-flex'>
                <div className='card-date'>{card.date}</div>
                <div style={{display:'flex'}}> <button className="dropdown-button">REGISTER <span className="fa fa-chevron-right fa-xxs"></span></button></div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        {/* Pagination */}
        {filteredCards.length > cardsPerPage && (
          <div className='page-buttons'>
            {Array.from({ length: Math.ceil(filteredCards.length / cardsPerPage) }).map((_, index) => (
              <button key={index} onClick={() => handlePageChange(index + 1)}>
                {index + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DropDown;
