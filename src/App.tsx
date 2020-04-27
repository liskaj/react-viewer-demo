import React, { useState } from 'react';
import './App.css';
import AppContext from './AppContext';
import Viewer from './Viewer'
import Header from './Header';
import SideBar from './SideBar';

interface Props {
    urn?: string;
}

const App: React.FC<Props> = () => {

    const [urn, setUrn] = useState<string>();

    return (
        <AppContext.Provider
            value={{
                urn,
                setUrn
            }}
        >
            <div className="app">
                <Header title="Forge Viewer Demo" />
                <div className="main">
                    <SideBar />
                    <div className="viewer-container">
                        <Viewer
                            urn={urn} />
                    </div>
                </div>
            </div>
        </AppContext.Provider>
    );
};

export default App;
