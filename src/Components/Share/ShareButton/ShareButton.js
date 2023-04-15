import React from 'react';
import callVector from "../../../Asset/Page1/call.svg";
import "./ShareButton.css"
import { FaPhone} from "react-icons/fa";

const ShareButton = ({children}) => {
    return (
        <div>
             <button className="primaryBtn px-0 md:px-6 sm:px-6 lg:px-8 xl:px-10  2xl:px-10 btn btn-outline border-white text-white bg-none">
                <FaPhone className='mr-3 rotate-90' />
                {children}
              </button>
        </div>
    );
};

export default ShareButton;
