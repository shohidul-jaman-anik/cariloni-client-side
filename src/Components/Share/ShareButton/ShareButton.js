import React from 'react';

const ShareButton = ({children}) => {
    return (
        <div>
            <button className="btn btn-outline btn-white border-white text-white">{children}</button>
        </div>
    );
};

export default ShareButton;
