import React, {createContext, useState, useContext} from 'react';

const PopupContext = createContext();

export const PopupProvider = ({children}) => {
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [popupContent, setPopupContent] = useState(null);
    const [mediaType, setMediaType] = useState('');
    const [searchEnginer, setSearchEnginer] = useState('');

    const openPopup = (content, media_type) => {
        setPopupContent(content);
        setMediaType(media_type);
        setPopupOpen(true);
    }

    const closePopup = () => {
        setPopupOpen(false);
        setMediaType('');
        setPopupContent(null);
    }

    return (
        <PopupContext.Provider value={{isPopupOpen, mediaType, popupContent, searchEnginer, openPopup, closePopup, setSearchEnginer}}>
            {children}
        </PopupContext.Provider>
    )
}

export const usePopup = () => {
    return useContext(PopupContext);
}