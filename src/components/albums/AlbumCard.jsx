import React from 'react';
import { Link } from "react-router-dom";
import Artist from '../artists/Artist';

const AlbumCard = (props) => {
    const { albums, artist } = props;
    console.log(albums);
    return (
        <div className="col-md-6">
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h4>{artist.artist_id}</h4>
                    <h5>{albums[0].album.album_name}
                    </h5>
                    
                </div>
            </div>
        </div>
    )
}

export default AlbumCard;