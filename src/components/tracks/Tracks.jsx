import React, { Component } from "react";
import { Consumer } from "../../context";
import Spinner from "../layout/Spinner";
import Track from "../tracks/Track";

class Tracks extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    //pulls the variables from the value in context to use in this component w/o saying value.item
                    const { track_list, heading } = value;

                    if(track_list === undefined) {
                        return <Spinner />
                    }
                    else {
                        return (
                            <React.Fragment>
                                <h3 className="text-center mb-4">{heading}</h3>
                                <div className="row">
                                    {track_list.map(item => (
                                        <Track key={item.track.track_id} track={item.track}/>
                                    ))}
                                </div>
                            </React.Fragment>
                            
                        )
                    }
                }}
            </Consumer>
        );
    } 
};

export default Tracks;