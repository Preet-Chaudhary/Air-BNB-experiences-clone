import React from "react";
import Navbar from "./navbar";
import Hero from "./hero";
import Card from "./card";
import data from "./data"
export default function App()
{
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                img={item.coverImg}
                rating={item.stats.rating}
                reviewCount={item.stats.reviewCount}
                location={item.location}
                title={item.title}
                price={item.price}
                openSpots={item.openSpots}
            />
        )
    })        
    return(
       <div>
        <Navbar />
        <Hero />
        <div className="card--area">
            {cards}
        </div>
    
       </div>
    )
}