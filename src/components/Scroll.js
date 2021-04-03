import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{ overflowY: 'scroll', borderTop: '2px solid pink', height: '1000px' }}>
      { props.children }
    </div>
  )
}

export default Scroll;
