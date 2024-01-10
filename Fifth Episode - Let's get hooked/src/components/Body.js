import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData"
import { useState } from "react";
import resList from "../utils/mockData"

const Body = () =>{

    let [listOfRestaurants, setListOfRestaurants]=useState(
        resList
    )

    // let listOfRestaurants=[
    //     {id: "347868",
    // name: "KFC",
    // cuisines: [
    //     "Burgers",
    //     "Biryani",
    //     "American",
    //     "Snacks",
    //     "Fast Food"
    //   ],
    // avgRating: 4,
    // costForTwo: "₹400 for two",
    // deliveryTime: 19,
    // cloudinaryImageId:"f01666ac73626461d7455d9c24005cd4"},

    // {id: "23846",
    // name: "Domino's Pizza",
    // cuisines: [
    //     "Pizzas",
    //      "Italian",
    //     "Pastas",
    //     "Desserts"
    //   ],
    // avgRating: 4.4,
    // costForTwo: "₹400 for two",
    // deliveryTime: 30,
    // cloudinaryImageId:"aadw5xxrjtv6xxhtscai"},

    // {id: "402710",
    // name: "WarmOven Cake & Desserts",
    // cuisines: [
    //     "Bakery",
    //     "Desserts",
    //     "Ice Cream",
    //     "Beverages"
    //   ],
    // avgRating: 3.9,
    // costForTwo: "₹200 for two",
    // deliveryTime: 26,
    // cloudinaryImageId:"e938fb5f416cc2c28b4b519cf27b04cc"},

    // ]


    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={
                    ()=>{
                        let filterRestaurants=listOfRestaurants.filter((resData)=>resData.avgRating>=4)
                        setListOfRestaurants(filterRestaurants)
                        console.log(filterRestaurants);
                }}>
                Top Restaurants
                </button>
            </div>
            <div className="restaurantContainer">
                {
                    listOfRestaurants.map(restaurant => <RestaurantCard key={restaurant.id} resData={restaurant}/>)
                }
            </div>
        </div>
    )
}


export default Body;