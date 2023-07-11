import React, { useEffect } from 'react';
import $ from 'jquery';

const CounterComponent = () => {
  useEffect(() => {
    $('.counter').counterUp({
      delay: 10,
      time: 1000
    });
  }, []); // Empty dependency array to ensure the effect runs only once on component mount

  return (
    <div>
      {/* Your JSX code here */}
    </div>
  );
};

export default CounterComponent;