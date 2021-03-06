import React from 'react';
import { Link } from "react-router-dom";

const ArtistCard = (props) => {
    const { artist } = props;

    return (
        <div className="col-md-6">
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h5>{artist.artist_name}</h5>
                    <Link to={`artist/${artist.artist_id}`}className="btn btn-dark btn-block">
                        <i className="fas fa-chevron-right"></i> View Artist Info
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ArtistCard;