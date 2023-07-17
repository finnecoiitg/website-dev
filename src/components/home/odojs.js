import React from 'react';
import './odometer.css';

function CounterComponent(){
  return (
    <div>
      {/* Your JSX code here */}
        <div>
          <div className="container">
            <div className="row">
                <div className="bootstrap">
                    <div id="data">+$500B</div>
                    <div id="value-holders">Total value enabled</div>
                </div>
                <div className="bootstrap">
                    <div id="data">+600M</div>
                    <div id="value-holders">Data-feed updates</div>
                </div>
                <div className="bootstrap">
                    <div id="data">+700M</div>
                    <div id="value-holders">Data-feed updates</div>
                </div>
                <div className="bootstrap">
                    <div id="data">+800</div>
                    <div id="value-holders">Networks we support</div>
                </div>
                <div className="bootstrap">
                    <div id="data">+$900M</div>
                    <div id="value-holders">Raised</div>
                </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default CounterComponent;