import React from 'react';

const AppContext = React.createContext({
    urn: null,
    setUrn: (urn: string) => {}
});

export default AppContext;
