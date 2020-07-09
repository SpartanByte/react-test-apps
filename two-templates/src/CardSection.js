import React from "react"
import Card from "./Card"

const CardSection = () => {
    return(
        <section className="contact bg-success ">
      <div className="container ">
        <h2 className="text-white">We love new friends!</h2>
        <div className="row">
          <div className="col-4">
            <Card title="Card 1" buttonText="Card 1"/>
          </div>
          <div className="col-4">
            <Card title="Card 2" buttonText="Card 2" imgSrc="https://images.pexels.com/photos/3532544/pexels-photo-3532544.jpeg" subText="Brie queso cow. Swiss pecorino who moved my cheese when the cheese comes out everybody's happy cheese and wine brie."/>
          </div>
          <div className="col-4">
            <Card title="Card 3" buttonText="Card 3" imgSrc="https://images.pexels.com/photos/2522663/pexels-photo-2522663.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" subText="Port-salut cottage cheese jarlsberg. Ricotta pecorino brie cream cheese cheese strings dolcelatte 
            ricotta stinking bishop."/>
          </div>
        </div>
      </div>
    </section>
    )
}

export default CardSection