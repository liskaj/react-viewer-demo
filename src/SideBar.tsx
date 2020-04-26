import React from 'react';
import './SideBar.css';

interface Props {
    onLoad?: () => void;
}

const SideBar: React.FC<Props> = ({
    onLoad = null
}) => {

    const onLoadClick = () => {
        console.debug(`onLoadClick`);
        if (onLoad) {
            onLoad();
        }
    }

    return (
        <div className="sidebar">
            <button onClick={onLoadClick}>Load</button>
        </div>
    );
}

export default SideBar;
