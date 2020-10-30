import React from 'react';
import './Popup.scss';

const Popup = ({ message, cancel }) => {
    return (
        <div className="popup__background">
            <div className="popup">
                <p className="popup__message">
                    {message}
                </p>

                <button
                    type="button"
                    onClick={cancel}
                    className="popup__cancel"
                >
                    ok
                </button>
            </div>
        </div>
    )
}

export default Popup;