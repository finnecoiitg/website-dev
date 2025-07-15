import React, { useState, useRef , useEffect, use } from "react";
import Filter from "../img/Icon.png";
import Up from "../img/events/upcoming.png";

const Blogs = [
  { title: "Europe Street beat", date: "February 23, 2023", description: "MnAnalyse is the India’s only and Largest Mergers & Acquisition Based Case Competition. Started in 2022 it attracts teams from more than 100 i", src: Up, tag: ["Finance", "Investment"] },
  { title: "Europe Street beat", date: "February 23, 2023", description: "MnAnalyse is the India’s only and Largest Mergers & Acquisition Based Case Competition. Started in 2022 it attracts teams from more than 100 i", src: Up },
  { title: "Europe Street beat", date: "February 23, 2023", description: "MnAnalyse is the India’s only and Largest Mergers & Acquisition Based Case Competition. Started in 2022 it attracts teams from more than 100 i", src: Up },
  { title: "Europe Street beat", date: "February 23, 2023", description: "MnAnalyse is the India’s only and Largest Mergers & Acquisition Based Case Competition. Started in 2022 it attracts teams from more than 100 i", src: Up },
  { title: "Europe Street beat", date: "February 23, 2023", description: "MnAnalyse is the India’s only and Largest Mergers & Acquisition Based Case Competition. Started in 2022 it attracts teams from more than 100 i", src: Up },
  { title: "Europe Street beat", date: "February 23, 2023", description: "MnAnalyse is the India’s only and Largest Mergers & Acquisition Based Case Competition. Started in 2022 it attracts teams from more than 100 i", src: Up },
  { title: "Europe Street beat", date: "February 23, 2023", description: "MnAnalyse is the India’s only and Largest Mergers & Acquisition Based Case Competition. Started in 2022 it attracts teams from more than 100 i", src: Up },
  { title: "Europe Street beat", date: "February 23, 2023", description: "MnAnalyse is the India’s only and Largest Mergers & Acquisition Based Case Competition. Started in 2022 it attracts teams from more than 100 i", src: Up },
  { title: "Europe Street beat", date: "February 23, 2023", description: "MnAnalyse is the India’s only and Largest Mergers & Acquisition Based Case Competition. Started in 2022 it attracts teams from more than 100 i", src: Up },
  { title: "Europe Street beat", date: "February 23, 2023", description: "MnAnalyse is the India’s only and Largest Mergers & Acquisition Based Case Competition. Started in 2022 it attracts teams from more than 100 i", src: Up },
  { title: "Europe Street beat", date: "February 23, 2023", description: "MnAnalyse is the India’s only and Largest Mergers & Acquisition Based Case Competition. Started in 2022 it attracts teams from more than 100 i", src: Up },
  { title: "Europe Street beat", date: "February 23, 2023", description: "MnAnalyse is the India’s only and Largest Mergers & Acquisition Based Case Competition. Started in 2022 it attracts teams from more than 100 i", src: Up },
];

export default function BlogContent() {
  const [currentPage, setCurrentPage] = useState(1);

  const cardsPerPageLarge = 10; // 5x2
  const cardsPerPageSmall = 4;  // 4x1

  const isSmallScreen = window.innerWidth <= 768;
  const cardsPerPage = isSmallScreen ? cardsPerPageSmall : cardsPerPageLarge;

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = Blogs.slice(indexOfFirstCard, indexOfLastCard);

  const totalPages = Math.ceil(Blogs.length / cardsPerPage);
  const listRef = useRef(null);
  const handlePageClick = (number) => {
    setCurrentPage(number);
  };
  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollIntoView({ behavior: "smooth" });
    }
  } , [currentPage]);

  return (
    <div className="blog-content" ref={listRef}>
      <div className="blog-search">
        <input type="text" placeholder="Search" />
        <button type="button">
          <img src={Filter} alt="filter icon" />
          Filter
        </button>
      </div>
      <div className="blog-line" />
      <div className="blog-articles">
        <div className="bl-container">
          <div className="center-list">
            <div className="blog-list">
              {currentCards.map((blog, index) => (
                <div className="blog-card" key={index}>
                  <div className="blog-image-container">
                    <img src={blog.src} alt={blog.title} className="blog-image" />
                    <div className="blog-tags">
                      {blog.tag && blog.tag.map((tag, tagIndex) => (
                        <div className="blog-tag" key={index * 100 + tagIndex}>{tag}</div>
                      ))}
                    </div>
                  </div>
                  <p className="blog-title">{blog.title}</p>
                  <p className="blog-description">{blog.description}</p>
                  <div className="blog-footer">
                    <p className="blog-date">{blog.date}</p>
                    <div className="blog-btn">
                      <button type="submit" className="read-button">
                        READ MORE <span>→</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="pagination">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => handlePageClick(i + 1)}
                  className={`page-number ${currentPage === i + 1 ? 'active' : ''}`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
