import React, { useState } from 'react';
import './App.css';
import Viewer from './Viewer'
import Header from './Header';
import SideBar from './SideBar';

interface Props {
    urn?: string;
}

const App: React.FC<Props> = () => {

    const [urn, setUrn] = useState<string>();

    const onLoad = () => {
        console.debug(`onLoad`);
        setUrn('dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6ZGEtdGVzdF92Mmd4dnBmZG1jajhham04eXp0YThhcWJvbWhmYWduNi9BcmNoaXRlY3R1cmFsXzIwMjAucnZ0');
    }

    return (
        <div className="app">
            <Header title="Forge Viewer Demo" />
            <div className="main">
                <SideBar onLoad={onLoad} />
                <div className="viewer-container">
                    <Viewer
                        urn={urn} />
                </div>
            </div>
        </div>
    );
};

export default App;
