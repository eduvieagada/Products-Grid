import React from 'react';

const ProductPic = (props) => {
    const pictureStyle = {
        fontSize: props.pictureSize
    };

    return (
        <div className="ellipse">
            <p className="product-pic" style={pictureStyle}>{props.picture}</p>
        </div>
    )
};

export default ProductPic;