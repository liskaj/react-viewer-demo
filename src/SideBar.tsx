import React, { useContext } from 'react';
import './SideBar.css';
import AppContext from './AppContext';

const SideBar: React.FC = () => {
    const { setUrn } = useContext(AppContext);

    const onLoadClick = () => {
        console.debug(`onLoadClick`);
        setUrn('dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6ZGEtdGVzdF92Mmd4dnBmZG1jajhham04eXp0YThhcWJvbWhmYWduNi9BcmNoaXRlY3R1cmFsXzIwMjAucnZ0');
    }

    return (
        <div className="sidebar">
            <button onClick={onLoadClick}>Load</button>
        </div>
    );
}

export default SideBar;
