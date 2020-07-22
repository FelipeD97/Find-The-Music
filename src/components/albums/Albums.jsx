import React, { Component } from 'react';
import { Consumer } from "../../context";
import Spinner from "../layout/Spinner";
import AlbumCard from "./AlbumCard";

class Albums extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    const { artist, albums } = value;

                    // if(artist === undefined) {
                    //     return <Spinner />
                    // }
                    // else {
                        return (
                            <React.Fragment>
                                <h3 className="text-center mb-4">{artist}</h3>
                                <div className="row">
                                    {albums.map 
                                    (item => (
                                        <AlbumCard key={item.artist.artist_id} artist={item.artist} />
                                    ))}
                                </div>
                            </React.Fragment>
                        )
                    
                }}
            </Consumer>
        )
    }
}

export default Albums;