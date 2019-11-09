import React from 'react';

const NoMatch = () => {
    const style={
        height:"1300px",
        textAlign:"center",
    };
    return (
        <div className="no_match" style={style}>
           <h1>Not Found 404</h1> 
        </div>
    );
};

export default NoMatch;