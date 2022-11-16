import React from "react";

const images = (props) => {

    const image=props.images.map((images)=>{
        return <img key={images.id} src={images.webformatURL} />
    });
    
    return <div>{image}</div>;
};
export default images;