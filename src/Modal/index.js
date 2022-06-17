import React from "react";
import * as ReactDOM from 'react-dom';

function Modal({children}) {
    return ReactDOM.createPortal(
        <div className="bg-gray-600 pt-6 rounded text-white fixed w-full top-0 bottom-0 left-0 md:left-2/3 flex items-center justify-center opacity-90">
        {children}
        </div>,
        document.getElementById('modal')
    );
}

export {Modal};