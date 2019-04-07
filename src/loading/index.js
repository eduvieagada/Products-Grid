import React from 'react';
import './style.scss';
import loaderSrc from'../assets/loader.gif';

const LoadingImage = (props) => (
    <div className="overlay">
        <div className="text">
            <p>Loading....</p>
            <img style={{ width: 200 }} src={loaderSrc} alt="Loader icon" />
        </div>

    </div>
);

export default LoadingImage;