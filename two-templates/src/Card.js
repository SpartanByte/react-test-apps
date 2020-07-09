import React from "react"

const Card = ({title="Default Card Title", buttonText="Default Button Text", subText="Enter Subtext", imgSrc="https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg"}) => {
    return(
        <div className="card" style={{width: "18rem"}}>
        <img
            src={imgSrc}
            className="card-img-top"
            alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{subText}</p>
          <a href="#" className="btn btn-success">{buttonText}</a>
        </div>
        </div>
    )
}

export default Card