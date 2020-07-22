import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import Spinner from "../layout/Spinner";
import Albums from "../albums/Albums";
import AlbumCard from "../albums/AlbumCard";


class Artist extends Component {
    state = {
        artist: {},
        albums: {}
    }

    componentDidMount() {
        axios
            .get(
                `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/artist.albums.get?artist_id=${
                    this.props.match.params.id
                }&s_release_date=desc&g_album_name=1&apikey=${
                    process.env.REACT_APP_MM_KEY
                }`
            )
            .then(res => {
                this.setState({ albums: res.data.message.body.album_list });

                return axios.get(
                    `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/artist.get?artist_id=${
                        this.props.match.params.id
                    }&apikey=${
                        process.env.REACT_APP_MM_KEY
                    }`
                )
            })
            .then(res => {
                this.setState({ artist: res.data.message.body.artist });
            })
            .catch(err => console.log(err));
    }

    render() {
        const { artist, albums } = this.state;
        if(
            albums === undefined || Object.keys(albums).length === 0) {
                return <Spinner />
            }
            else {
                return (
                    <React.Fragment>
                        <Link to="/" className="btn btn-dark btn-sm mb-4">Go Back</Link>
                        <h3 className="text-center mb-4">{artist.artist_name}</h3>
                                <div className="row">
                                    {/* {albums.map(item => (
                                        <AlbumCard key={item.artist.artist_id} artist={item.artist} />
                                    ))} */}
                                </div>
                    </React.Fragment>
                )
            }  
    }
}

export default Artist;