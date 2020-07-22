import React, { Component } from 'react';
import axios from 'axios';
import { Consumer } from "../../context";

class Search extends Component {
    state = {
        trackTitle: '',
        artist: ''
    }

    findTrack = (dispatch, e) => {
        e.preventDefault();
        
        axios
            .get(
                `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${
                    this.state.trackTitle
                }&page_size=10&page=1&s_track_rating=desc&apikey=${
                    process.env.REACT_APP_MM_KEY
                }`
            )
            .then(res => {
                dispatch({
                    type: 'SEARCH_TRACKS',
                    payload: res.data.message.body.track_list
                });

               this.setState({ trackTitle: '' }) 
            })
            .catch(err => console.log(err));

    };

    findArtist = (dispatch, e) => {
        e.preventDefault();
        
        axios
            .get(
                `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/artist.search?q_artist=${
                    this.state.artist
                }&page_size=5&apikey=${
                    process.env.REACT_APP_MM_KEY
                }`
            )
            .then(res => {
                dispatch({
                    type: 'SEARCH_ARTISTS',
                    payload: res.data.message.body.artist_list
                });

               this.setState({ artist: '' }) 
            })
            .catch(err => console.log(err));

    };

    onChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return(
                        <div className="card card-body mb-4 p-4">
                            <h1 className="display-4 text-center">
                                <i className="fas fa-music"></i> Search For A Song
                            </h1>
                            <p className="lead text-center">Get the lyrics and infromation for any song</p>
                            <div className="search-container">
                                <form onSubmit={this.findTrack.bind(this, dispatch)} className="search-bar">
                                    <div className="form-group">
                                        <input 
                                        type="text" 
                                        className="form-control form-control-lg" 
                                        placeholder="Song Title..." 
                                        name="trackTitle"
                                        value={this.state.track_list}
                                        onChange={this.onChange} 
                                        />
                                    </div>
                                    <button className="btn btn-dark btn-lg btn-block mb-5" type="submit">Get Track Info</button>
                                </form>
                                <form onSubmit={this.findArtist.bind(this, dispatch)} className="search-bar">
                                    <div className="form-group">
                                        <input 
                                        type="text" 
                                        className="form-control form-control-lg" 
                                        placeholder="Artist Name..." 
                                        name="artist"
                                        value={this.state.artist}
                                        onChange={this.onChange} 
                                        />
                                    </div>
                                    <button className="btn btn-dark btn-lg btn-block mb-5" type="submit">Get Artist Info</button>
                                </form>
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default Search;