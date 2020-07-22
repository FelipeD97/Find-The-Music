import React, { Component } from 'react';
import { Consumer } from "../../context";
import Spinner from "../layout/Spinner";
import ArtistCard from "../artists/ArtistCard";

class Artists extends Component {
    render() {
        return (
            <Consumer>
                {value => {

                    const { artists } = value;

                    if(artists === undefined) {
                        return <Spinner />
                    }
                    else {
                        return (
                            <React.Fragment>
                                <div className="row">
                                    {artists.map(item => (
                                        <ArtistCard key={item.artist.artist_id} artist={item.artist} />
                                    ))}
                                </div>
                            </React.Fragment>
                        )
                    }
                }}
            </Consumer>
        )
    }
}

export default Artists;