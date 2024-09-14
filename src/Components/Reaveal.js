import React from 'react';
import Slide from 'react-reveal/Slide';

function Reaveal() {
  return (
    <div className='container text-canter d-flex justify-content-center align-items-center'>
        <Slide left  duration={1000}> {/* Change 'left' to 'right', 'up', or 'down' */}
            <h1>Slide Animation Test</h1>
        </Slide>
    </div>
  );
}

export default Reaveal;
