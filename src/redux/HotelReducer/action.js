import axios from "axios"
import { Add_HOTEL_REQUEST, FILTER_HOTEL_ERROR, FILTER_HOTEL_REQUEST, FILTER_HOTEL_SUCESS, GET_HOTEL_ERROR, GET_HOTEL_REQUEST, GET_HOTEL_SUCESS } from "./actionType"
export const getHotel = (city) => async(dispatch) => {
    dispatch({type:GET_HOTEL_REQUEST})
    try{
        let response;
        if(city) response = await axios.get(`${process.env.REACT_APP_BASE_SERVER_URL}hotels?city=${city}`)
        else response = await axios.get(`${process.env.REACT_APP_BASE_SERVER_URL}hotels`)
        setTimeout(()=>{
            dispatch({type:GET_HOTEL_SUCESS,payload:response.data})
        },[1000])
    }catch(e){
        dispatch({type:GET_HOTEL_ERROR})
    }
}
export const getHotelDetail = (city,id) => async(dispatch) => {
    dispatch({type:GET_HOTEL_REQUEST})
    try{
        let response = await axios.get(`${process.env.REACT_APP_BASE_SERVER_URL}hotels/${id}?city=${city}`)
        setTimeout(()=>{
            dispatch({type:GET_HOTEL_SUCESS,payload:response.data})
        },[1000])
    }catch(e){
        dispatch({type:GET_HOTEL_ERROR})
    }
}
export const filterHotel = (city,q={}) => async(dispatch) => {
    dispatch({type:FILTER_HOTEL_REQUEST})
    try{
        let response;
        if(city) response = await axios.get(`${process.env.REACT_APP_BASE_SERVER_URL}hotels?city=${city}`,{params:q})
        else response = await axios.get(`${process.env.REACT_APP_BASE_SERVER_URL}hotels`,{params:q})
        setTimeout(()=>{
            dispatch({type:FILTER_HOTEL_SUCESS,payload:response.data})
        },[1000])
    }catch(e){
        dispatch({type:FILTER_HOTEL_ERROR})
    }
}
export const addHotel = (obj) =>{
    return {type:Add_HOTEL_REQUEST,payload:obj}
}


