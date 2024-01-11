import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () =>{

    const [listOfRestaurants, setListOfRestaurants]=useState([])

    const [filteredRestaurants, setFilteredRestaurants] = useState([])

    const [searchText, setSearchText] = useState("")

    useEffect(()=>{
        fetchData()
    }, [])

    const fetchData = async()=>{
        const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    
        const json = await data.json()

        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    
    };

    //Conditional Rendering  -- Rendering on the basis of a particular condition
    // if(listOfRestaurants.length===0){
    //     return <Shimmer/>
    // }


    return listOfRestaurants.length===0 ? <Shimmer/> : 
    (
        <div className="body">
            <div className="filter">
            <div className="search">
                <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                    setSearchText(e.target.value)
                }}/>

                <button className="search-btn" onClick={()=>{
                    console.log(searchText)
                    const searchedRestaurants= listOfRestaurants.filter((res)=>
                        res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    )

                    setFilteredRestaurants(searchedRestaurants)
                }}>Search</button>                
            </div>
            
                <button className="filter-btn" onClick={
                    ()=>{
                        const filterRestaurants=listOfRestaurants.filter((resData)=>resData.info.avgRating>=4.4)
                        setListOfRestaurants(filterRestaurants)
                        console.log(filterRestaurants);
                }}>
                Top Restaurants
                </button>
            </div>
            <div className="restaurantContainer">
                {
                    filteredRestaurants.map((restaurant) => (<RestaurantCard key={restaurant.id} resData={restaurant}/>))
                }
            </div>
        </div>
    )
}


export default Body;