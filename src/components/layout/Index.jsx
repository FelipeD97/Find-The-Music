import React from "react";
import Tracks from "../tracks/Tracks";
import Search from "../tracks/Search";
import Artists from "../artists/Artists";

const Index = () => {
    return (
        <React.Fragment>
            <Search />
            <Tracks />
            <Artists />
        </React.Fragment>
    );
};

export default Index;