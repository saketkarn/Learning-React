import React from "react";
import ReactDOM from "react-dom/client"

const Header = () =>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://img.freepik.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg"></img>
            </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
        </div>
    )
}

const RestaurantCard = (props) =>{
    const {resData}=props
    return(
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img className="res-logo" alt="res-logo" src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
            +resData.cloudinaryImageId}
            />
            <h3>{resData.name}</h3>
            <h4>{resData.cuisines.join(", ")}</h4>
            <h4>{resData.avgRating} stars</h4>
            <h4>{resData.costForTwo}</h4>
            <h4>{resData.deliveryTime} minutes</h4>
        </div>
    )
}


const resList=[
        {id: "347868",
        name: "KFC",
        cuisines: [
            "Burgers",
            "Biryani",
            "American",
            "Snacks",
            "Fast Food"
          ],
        avgRating: 4,
        costForTwo: "₹400 for two",
        deliveryTime: 19,
        cloudinaryImageId:"f01666ac73626461d7455d9c24005cd4"},
        
        {id: "23846",
        name: "Domino's Pizza",
        cuisines: [
            "Pizzas",
             "Italian",
            "Pastas",
            "Desserts"
          ],
        avgRating: 4.4,
        costForTwo: "₹400 for two",
        deliveryTime: 30,
        cloudinaryImageId:"aadw5xxrjtv6xxhtscai"},
        
        {id: "314691",
        name: "Momoz",
        cuisines: [
            "Chinese",
            "Thai",
            "Seafood",
            "Asian",
            "Malaysian"
          ],
        avgRating: 4,
        costForTwo: "₹350 for two",
        deliveryTime: 29,
        cloudinaryImageId:"ktiphhoyhayzyrxxxyy6"},
        
        {id: "70161",
        name: "mperio Restaurant",
        cuisines: [
            "Chinese",
            "North Indian",
            "Tandoor",
            "Continental",
            "Desserts",
            "Kerala",
            "Andhra",
            "Beverages",
             "Mughlai",
            "Seafood",
            "Hyderabadi",
            "Healthy Food",
            "Arabian",
            "Biryani",
            "Burgers",
            "Barbecue",
            "Oriental",
            "Juices",
            "Fast Food"
          ],
        avgRating: 4,
        costForTwo: "₹300 for two",
        deliveryTime: 32,
        cloudinaryImageId:"a1629b9c7f59577a55411e94425c6d99"},
        
        {id: "76879",
        name: "Art Of Delight - Ice Creams, Sundaes And Desserts",
        cuisines: [
            "Desserts",
            "Ice Cream"
          ],
        avgRating: 4.6,
        costForTwo: "₹400 for two",
        deliveryTime: 26,
        cloudinaryImageId:"k26tlvm4wdapvrtndmdv"},
        
        {id: "45871",
        name: "Subway",
        cuisines: [
            "Fast Food",
            "Salads",
            "Snacks",
            "Desserts",
            "Beverages"
          ],
        avgRating: 4.3,
        costForTwo: "₹350 for two",
        deliveryTime: 19,
        cloudinaryImageId:"1ace5fa65eff3e1223feb696c956b38b"},
        
        {id: "402710",
        name: "WarmOven Cake & Desserts",
        cuisines: [
            "Bakery",
            "Desserts",
            "Ice Cream",
            "Beverages"
          ],
        avgRating: 3.9,
        costForTwo: "₹200 for two",
        deliveryTime: 26,
        cloudinaryImageId:"e938fb5f416cc2c28b4b519cf27b04cc"},
        ];


const Body = () =>{
    return(
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="restaurantContainer">

                {
                    resList.map(restaurant => <RestaurantCard key={restaurant.id} resData={restaurant}/>)
                }
            </div>
        </div>
    )
}

const AppLayout = () =>{
    return(
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}


const root= ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)