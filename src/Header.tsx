import React from 'react';
import './Header.css';

interface Props {
    title: string;
}

const Header: React.FC<Props> = ({
    title = 'Demo'
}) => {
    return (
        <div className="header">
            <div className="header-logo"></div>
            <div className="header-title">{title}</div>
        </div>
    );
}

export default Header;
