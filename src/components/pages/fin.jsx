import React from 'react';
import './fin.css';
import Lappy from '../img/ruthson-zimmerman-FVwG5OzPuzo-unsplash 1.png'
import Shash from '../img/2.png'
import Khush from '../img/Khushi Tongia.png'
import Hima from '../img/4.png'
import Utkarshh from '../img/20230327_205832-fotor-bg-remover-20230327221158.png'
import Shreya from '../img/IMG_20230328_204811_024.png'
import Tan from '../img/IMG_0299.png'
import Ishu from '../img/IMG-20230329-WA0018.png'
import Harsh from '../img/har.png'


function Fin() {
  return (
    <div className='fin'>
          <div className="top">
        <h1 className="fundamental">Fundamental.</h1>
        <h1 className="analysis">Analysis.</h1>
        <p className="intro-to-fa">Elevate your career with our certified course in fundamental analysis. Explore the depths
            of economic, industry, and company analysis with our comprehensive resources.</p>
            <div className="buttons">
                <a className="button2" href="/#">REGISTER NOW →</a>
        <a className="button" href="#middle">ACCESS MATERIAL →</a>
        </div>
        <div className='abt-crs'>
        <div className="abt-t-crs">
            <h1>About the course</h1>
            <ul>
                <li>
                    <div className="dot"></div>Gain insight into fundamental analysis and its critical role in making
                    informed investment decisions.
                </li>
                <li>
                    <div className="dot"></div>Acquaint students with essential financial statements and ratios utilized in
                    fundamental analysis.
                </li>
                <li>
                    <div className="dot"></div>Develop the ability to assess a company's financial performance and master
                    industry analysis and competitive dynamics.
                </li>
            </ul>
        </div>
        </div>
    </div>
    <div className="middle" id="middle">
        <div className="lap-image">
            <img src={Lappy} alt="laptop"/>
        </div>
        <div className="image-text">
            <h1>What is fundamental analysis?</h1>
            <p>Fundamental analysis is an evaluative approach employed to assess the inherent worth of an asset, be it a
                stock, bond, or commodity. Its objective is to ascertain whether the asset is overvalued or undervalued
                in relation to its intrinsic value. Through an examination of the fundamental factors influencing the
                asset value, investors gain the ability to make well-informed decisions.</p>
        </div>
    </div>
    <div className="bottom">
        <div className="m-y-m">
            <h1>Meet your mentors</h1>
            <div className="cards">
                <div className="row1">
                    <div className="c1">
                        <div className="image1">
                            <img src={Shash}alt="shashwat"/>
                        </div>
                        <div className="text1">
                            <p className="name">Shashwat Pandey</p>
                            <p className="designation">Designation</p>
                            <a className="linkedin" href ="https://www.linkedin.com/in/shashwat-pandey-0o/">Linkedin ↗</a>
                        </div>
                    </div>
                    <div className="c1">
                        <div className="image1">
                            <img src={Khush}alt="khushi"/>
                        </div>
                        <div className="text1">
                            <p className="name">Khushi Tongia</p>
                            <p className="designation">Designation</p>
                            <a className="linkedin" href="https://www.linkedin.com/in/khushitongia/">Linkedin ↗</a>
                        </div>
                    </div>
                    <div className="c1">
                        <div className="image1">
                            <img src={Hima} alt="himank"/>
                        </div>
                        <div className="text1">
                            <p className="name">Himank Gupta</p>
                            <p className="designation">Designation</p>
                            <a className="linkedin" href="https://www.linkedin.com/in/himank-g19/">Linkedin ↗</a>
                        </div>
                    </div>
                    <div className="c1">
                        <div className="image1">
                            <img src={Utkarshh} alt="utkarsh"/>
                        </div>
                        <div className="text1">
                            <p className="name">Utkarsh Utpal</p>
                            <p className="designation">Designation</p>
                            <a className="linkedin" href="https://www.linkedin.com/in/utkarsh-utpal-9i/">Linkedin ↗</a>
                        </div>
                    </div>
                </div>
                <div className="row1">
                    <div className="c1">
                        <div className="image1">
                            <img src={Shreya}alt="Shreyanshi"/>
                        </div>
                        <div className="text1">
                            <p className="name">Shreyanshi</p>
                            <p className="designation">Designation</p>
                            <a className="linkedin" href="https://www.linkedin.com/in/shreyanshi-4a9776229/">Linkedin ↗</a>
                        </div>
                    </div>
                    <div className="c1">
                        <div className="image1">
                            <img src={Tan} alt="tanmay"/>
                        </div>
                        <div className="text1">
                            <p className="name">Tanmay Bhatnagar</p>
                            <p className="designation">Designation</p>
                            <a className="linkedin" href="https://www.linkedin.com/in/tanmayb03/">Linkedin ↗</a>
                        </div>
                    </div>
                    <div className="c1">
                        <div className="image1">
                            <img src={Ishu} alt="ishan"/>
                        </div>
                        <div className="text1">
                            <p className="name">Ishan Agashe</p>
                            <p className="designation">Designation</p>
                            <a className="linkedin" href="https://www.linkedin.com/in/ishan-agashe-67793a216/">Linkedin ↗</a>
                        </div>
                    </div>
                    <div className="c1">
                        <div className="image1">
                            <img src={Harsh} alt="harsh" className="bg-col"/>
                        </div>
                        <div className="text1">
                            <p className="name">Harsh Katara</p>
                            <p className="designation">Designation</p>
                            <a className="linkedin" href="https://www.linkedin.com/in/harsh-katara-706b7397/">Linkedin ↗</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="m-y-m2">
            <h1>Meet your mentors</h1>
            <div className="cards2">
                <div className="row2">
                    <div className="col2">
                        <div className="image2">
                            <img src={Shash} alt="shashwat"/>
                        </div>
                        <div className="text2 big">
                            <p className="name2">Shashwat Pandey</p>
                            <p className="designation2">Designation</p>
                            <a className="linkedin2" href="https://www.linkedin.com/in/shashwat-pandey-0o/">Linkedin ↗</a>
                        </div>
                    </div>
                    <div className="col2">
                        <div className="image2">
                            <img src={Khush} alt="khushi"/>
                        </div>
                        <div className="text2">
                            <p className="name2">Khushi Tongia</p>
                            <p className="designation2">Designation</p>
                            <a className="linkedin2" href="https://www.linkedin.com/in/khushitongia/">Linkedin ↗</a>
                        </div>
                    </div>
                </div>
                <div className="row2">
                    <div className="col2">
                        <div className="image2">
                            <img src={Hima}alt="himank"/>
                        </div>
                        <div className="text2">
                            <p className="name2">Himank Gupta</p>
                            <p className="designation2">Designation</p>
                            <a className="linkedin2" href="https://www.linkedin.com/in/himank-g19/">Linkedin ↗</a>
                        </div>
                    </div>
                    <div className="col2">
                        <div className="image2">
                            <img src={Utkarshh} alt="utkarsh"/>
                        </div>
                        <div className="text2">
                            <p className="name2">Utkarsh Utpal</p>
                            <p className="designation2">Designation</p>
                            <a className="linkedin2" href="https://www.linkedin.com/in/utkarsh-utpal-9i/">Linkedin ↗</a>
                        </div>
                    </div>
                </div>
                <div className="row2">
                    <div className="col2">
                        <div className="image2">
                            <img src={Shreya} alt="Shreyanshi"/>
                        </div>
                        <div className="text2">
                            <p className="name2">Shreyanshi</p>
                            <p className="designation2">Designation</p>
                            <a className="linkedin2" href="https://www.linkedin.com/in/shreyanshi-4a9776229/">Linkedin ↗</a>
                        </div>
                    </div>
                    <div className="col2">
                        <div className="image2">
                            <img src={Tan}alt="tanmay"/>
                        </div>
                        <div className="text2 big">
                            <p className="name2">Tanmay Bhatnagar</p>
                            <p className="designation2">Designation</p>
                            <a className="linkedin2" href="https://www.linkedin.com/in/tanmayb03/">Linkedin ↗</a>
                        </div>
                    </div>
                </div>
                <div className="row2">
                    <div className="col2">
                        <div className="image2">
                            <img src={Ishu} alt="ishan"/>
                        </div>
                        <div className="text2">
                            <p className="name2">Ishan Agashe</p>
                            <p className="designation2">Designation</p>
                            <a className="linkedin2" href="https://www.linkedin.com/in/ishan-agashe-67793a216/">Linkedin ↗</a>
                        </div>
                    </div>
                    <div className="col2">
                        <div className="image2">
                            <img src={Harsh}alt="harsh" className="bg-col"/>
                        </div>
                        <div className="text2">
                            <p className="name2">Harsh Katara</p>
                            <p className="designation2">Designation</p>
                            <a className="linkedin2" href="https://www.linkedin.com/in/harsh-katara-706b7397/">Linkedin ↗</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
}

export default Fin;