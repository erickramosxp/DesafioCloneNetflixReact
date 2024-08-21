import React, {createContext, useState, useContext} from 'react';

const PopupContext = createContext();

export const PopupProvider = ({children}) => {
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [popupContent, setPopupContent] = useState(null);

    const openPopup = (content) => {
        setPopupContent(content);
        setPopupOpen(true);
    }

    const closePopup = () => {
        setPopupOpen(false);
        setPopupContent(null);
    }

    return (
        <PopupContext.Provider value={{isPopupOpen, popupContent, openPopup, closePopup}}>
            {children}
        </PopupContext.Provider>
    )
}

export const usePopup = () => {
    return useContext(PopupContext);
}