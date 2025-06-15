import React from 'react'
import "./footer.css"
import logo from  "../img/logo.svg"
function Footer() {
  return (
      
    <footer className="footer">
    <div className="footer__container">
        <div className="footer__top">
            

            <div className="itemss">
                <div className="item1">
                    <ul className="footer__list">
                        <li className="footer__list-item">
                            <a href="/#" className="footer__list-link" id='spe' >Learn</a>
                        </li>
                        <li className="footer__list-item">
                            <a href="/#" className="footer__list-link">About</a>
                        </li>
                        <li className="footer__list-item">
                            <a href="/#" className="footer__list-link">FAQS</a>
                        </li>
                        <li className="footer__list-item">
                            <a href="/#" className="footer__list-link">Contact Us</a>
                        </li>
                    </ul>
                </div>
                <div className="item2">
                    <ul className="footer__list">
                        <li className="footer__list-item">
                            <a href="/#" className="footer__list-link" id='spe'>Community</a>
                        </li>
                        <li className="footer__list-item">
                            <a href="/#" className="footer__list-link">Blog</a>
                        </li>
                        <li className="footer__list-item">
                            <a href="/#" className="footer__list-link">LINKedin</a>
                            <div className="icon"><i  className="fa">&#xf0e1;</i></div>
                        </li>
                        <li className="footer__list-item">
                            <a href="/#" className="footer__list-link">Instagram</a>
                            <div className="icon"><i  className="fa">&#xf16d;</i></div>

                        </li>
                        <li className="footer__list-item">
                            <a href="https://www.instagram.com/fec_iitg/?hl=en" className="footer__list-link">Facebook</a>
                            <div className="icon"><i  className="fa">&#xf09a;</i></div>

                        </li>
                        <li className="footer__list-item">
                            <a href="/#" className="footer__list-link">Youtube</a>
                            <div className="icon"><i  className="fa">&#xf16a;</i></div>

                        </li>
                        <li className="footer__list-item">
                            <a href="/#" className="footer__list-link">Medium</a>
                            <div className="icon"><i  className="fa"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-medium" viewBox="0 0 16 16">
                                <path d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8zm4.95 0c0 2.34-1.01 4.236-2.256 4.236-1.246 0-2.256-1.897-2.256-4.236 0-2.34 1.01-4.236 2.256-4.236 1.246 0 2.256 1.897 2.256 4.236zM16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795z"/>
                              </svg></i></div>
                           
                        </li>
                        
                    </ul>
                </div>
                
            </div>

            <div className="imm">
                <ul className="footer__list">
                    <li className="footer__list-item">
                        <a href="/#" className="footer__list-link" id='spe' >Community</a>
                    </li>
                    <li className="footer__list-item">
                        <a href="/#" className="footer__list-link">Blog</a>
                    </li>
                    <li className="footer__list-item">
                        <a href="/#" className="footer__list-link">LINKedin</a>
                        <div className="icon"><i  className="fa">&#xf0e1;</i></div>
                    </li>
                    <li className="footer__list-item">
                        <a href="/#" className="footer__list-link">Instagram</a>
                        <div className="icon"><i  className="fa">&#xf16d;</i></div>

                    </li>
                    <li className="footer__list-item">
                        <a href="/#" className="footer__list-link">Facebook</a>
                        <div className="icon"><i  className="fa">&#xf09a;</i></div>

                    </li>
                    <li className="footer__list-item">
                        <a href="/#" className="footer__list-link">Youtube</a>
                        <div className="icon"><i  className="fa">&#xf16a;</i></div>

                    </li>
                    <li className="footer__list-item">
                        <a href="/#" className="footer__list-link">Medium</a>
                        <div className="icon"><i  className="fa"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-medium" viewBox="0 0 16 16">
                            <path d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8zm4.95 0c0 2.34-1.01 4.236-2.256 4.236-1.246 0-2.256-1.897-2.256-4.236 0-2.34 1.01-4.236 2.256-4.236 1.246 0 2.256 1.897 2.256 4.236zM16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795z"/>
                          </svg></i></div>
                       
                    </li>
                    
                </ul>
            </div>

            <div className="space">
                <div className="col-sm vl2">
            
          </div>
            </div>
            <div className="company__info">
                <h2 className="company__logo"><img src={logo} alt='' ></img><div className="textt"> finance and economics <br/> club, iit Guwahati</div>  </h2>
                <p className="company__description">
                  <span className='desc'>finance and economics club, iit Guwahati is a club part of techboard IIT guwahati. Our club was founded in 2014 and since then has progressed very much. In the recent 2 years the activities inside the club had increased exponentially.</span>  
                </p>
                <ul className="footer__list">
                    <li className="footer__list-item">
                        <a href="/#" className="footer__list-link">
                            <i className="ri-facebook-circle-line"></i>
                        </a>
                    </li>
                    <li className="footer__list-item">
                        <a href="/#" className="footer__list-link">
                            <i className="ri-instagram-line"></i>
                        </a>
                    </li>
                    <li className="footer__list-item">
                        <a href="/#" className="footer__list-link">
                            <i className="ri-twitter-line"></i>
                        </a>
                    </li>
                </ul>
                
            </div>
        </div>
    </div>
    <div >        <span className="copyright"><center>Copy right- finance and economics club, iit Guwahati</center> </span>
    </div>
</footer>
  )
}

export default Footer