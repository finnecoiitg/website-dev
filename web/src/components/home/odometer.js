import React from 'react'
import CountUp from 'react-countup';
import './odometer copy.css';


function Odometer() {
  return (
    <div>
        
        <div className='container'>
            <div className='row'>
                <div className='col-sm'>
                    <div>+$</div><div id='data' className='num'><CountUp start={0} end={500} duration={2} delay={0} /></div><div>B</div>
                    <br />
                    <div id='value-holders'>Total value enabled</div>
                </div>
                <div className="col-sm">
                    <div>+</div><div id="data" className="num"><CountUp start={0} end={600} duration={2} delay={0} /></div><div>M</div>
                    <br />
                    <div id="value-holders">Data-feed updates</div>
                </div>
                <div className="col-sm">
                    <div>+</div><div id="data" className="num"><CountUp start={0} end={700} duration={2} delay={0} /></div><div>M</div>
                    <br />
                    <div id="value-holders">Data-feed updates</div>
                </div>
                <div className="col-sm">
                    <div>+</div><div id="data" className="num"><CountUp start={0} end={800} duration={2} delay={0} /></div>
                    <br />
                    <div id="value-holders">Networks we support</div>
                </div>
                <div className="col-sm">
                    <div>+$</div><div id="data" className="num"><CountUp start={0} end={900} duration={2} delay={0} /></div><div>M</div>
                    <br />
                    <div id="value-holders">Raised</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Odometer;