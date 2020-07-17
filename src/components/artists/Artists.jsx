import React, { Component } from 'react';
import { Consumer } from "../../context";
import Spinner from "../layout/Spinner";
import Artist from "../artists/Artist";

class Artists extends Component {
    render() {
        return (
            <Consumer>
                {value => {

                    const { artists, heading } = value;

                    if(artists === undefined || artists.length === 0) {
                        return <Spinner />
                    }
                    else {
                        return (
                            <React.Fragment>
                                <h3 className="text-center mb-4">{heading}</h3>
                                <div className="row">
                                    {artists.map(item => (
                                        <Artist key={item.artist.artist_id} artist={item.artist} />
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