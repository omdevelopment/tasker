import React from "react";
import * as ReactDOM from 'react-dom';

function Modal({children}) {
    return ReactDOM.createPortal(
        <div className="bg-gray-600 pt-6 rounded-2xl text-white fixed w-96 top-1/4 bottom-1/3 left-10 md:left-2/3 flex justify-center opacity-90">
        {children}
        </div>,
        document.getElementById('modal')
    );
}

export {Modal};