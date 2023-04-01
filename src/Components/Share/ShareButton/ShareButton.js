import React from 'react';

const ShareButton = ({children}) => {
    return (
        <div>
            <button className="btn btn-outline btn-white">{children}</button>
        </div>
    );
};

export default ShareButton;