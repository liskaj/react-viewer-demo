import React, { useState } from 'react';
import './App.css';
import Viewer from './Viewer'

interface Props {
    urn?: string;
}

const App: React.FC<Props> = ({
}) => {

    const [urn, setUrn] = React.useState<string>();

    const onLoadClick = () => {
        setUrn('dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6ZGEtdGVzdF92Mmd4dnBmZG1jajhham04eXp0YThhcWJvbWhmYWduNi9BcmNoaXRlY3R1cmFsXzIwMjAucnZ0');
        console.debug(`onLoadClick`);
    }

    const onDocumentLoaded = () => {
        console.debug(`onDocumentLoaded`);
    }

    const onViewerInitialized = () => {
        console.debug(`onViewerInitialized`);
    }

    return (
        <div className="App">
            <button onClick={onLoadClick}>Load</button>
            <Viewer urn={urn}
                onDocumentLoaded={onDocumentLoaded}
                onViewerInitialized={onViewerInitialized}/>
        </div>
    );
};

export default App;
