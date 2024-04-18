import RestaurantCard from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus"
import {withDistanceRestaurantCard} from "./RestaurantCard"
import UserContext from "../utils/UserContext";

const Body = () =>{

    const [listOfRestaurants, setListOfRestaurants]=useState([])

    const [filteredRestaurants, setFilteredRestaurants] = useState([])

    const [searchText, setSearchText] = useState("")

    const RestaurantCardWithDistance = withDistanceRestaurantCard(RestaurantCard)

    useEffect(()=>{
        fetchData()
    }, [])

    console.log(listOfRestaurants);
    
    const fetchData = async()=>{
        const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    
        const json = await data.json()

        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    
    };

    //Conditional Rendering  -- Rendering on the basis of a particular condition
    // if(listOfRestaurants.length===0){
    //     return <Shimmer/>
    // }

    const onlineStatus = useOnlineStatus()

    if(onlineStatus===false){
        return(
        <h1>Looks like you're offline, please check your internet connection!</h1>
        )
    }

    const {loggedInUser, setUserName} = useContext(UserContext)

    return listOfRestaurants.length===0 ? <Shimmer/> : 
    (
        <div className="body">
            <div className="filter flex">
            <div className="search m-4 p-4">
                <input type="text" className="border border-solid border-black  " value={searchText} onChange={(e)=>{
                    setSearchText(e.target.value)
                }}/>
                
                <button className="search-btn px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={()=>{
                    console.log(searchText)
                    const searchedRestaurants= listOfRestaurants.filter((res)=>
                        res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    )

                    setFilteredRestaurants(searchedRestaurants)
                }}>Search</button>                
            </div>
            <div className="m-4 p-4 flex items-center">
                <button className="px-4 py-2 bg-gray-100 rounded-lg" onClick={
                    ()=>{
                        const filterRestaurants=listOfRestaurants.filter((resData)=>resData.info.avgRating>=4.4)
                        setListOfRestaurants(filterRestaurants)
                        // console.log(filterRestaurants);
                }}>
                Top Restaurants
                </button>
                </div>
                <div className="m-4 p-4 flex items-center">
                <label>User Name : </label>
                <input className="border border-black px-2 ml-2" value={loggedInUser} onChange={(e)=> setUserName(e.target.value)}/>
                </div>
            </div>
            <div className="restaurantContainer flex flex-wrap">
                {
                    filteredRestaurants.map((restaurant) => 
                    (
                        <Link key={restaurant.info.id}to={"/restaurants/"+restaurant.info.id}>
                        {/**{
                        restaurant.info.sla.lastMileTravelString ? <RestaurantCardWithDistance resData={restaurant}/> : <RestaurantCard resData={restaurant}/>    
                        }**/}
                        <RestaurantCard resData={restaurant}/>
                        </Link>
                        ))
                }
            </div>
        </div>
    )
}


export default Body;