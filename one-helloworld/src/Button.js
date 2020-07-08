import React from "react"

const Button = ({title="Default Title"}) => {
    return(
        <div>
            <button className="button">{title}</button>
        </div>
    )
}

export default Button;