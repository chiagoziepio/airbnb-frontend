import React, { useState, useContext, useEffect } from 'react'
import { Context } from './context';
import axios from "axios"
import { MapContainer, TileLayer, Marker, Popup, useMap} from "react-leaflet";
import * as ELG from "esri-leaflet-geocoder"
import 'leaflet/dist/leaflet.css'

const InnerMap = ({cordinates, setCordinates})=>{
    const {state} = useContext(Context)
    const theApartment = state.one_apartment;
    const mapp = useMap()
    if(theApartment.length){
        const apartmentLocation =  theApartment.map(apartment => apartment.location);
        useEffect(()=>{
          ELG.geocode().text(apartmentLocation).run((err, results, response)=>{
              if(results?.results?.length > 0){
                  const {latlng} =results?.results[0]
                  setCordinates({
                      latitude: latlng.lat,
                        longitude: latlng.lng
                    
                  })
                  /* mapp.flyTo([lat, lng], 6)  */
              }
          })
        },[apartmentLocation])
          
      }
    return(
        <>
        <TileLayer
                    url = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
                    attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker
                    position={[
                        cordinates.latitude, cordinates.longitude
                    ]}
                />
        </>
    )
}

const GeoCode = () => {
    
    
    const [error, setError] = useState(null);
    const [cordinates, setCordinates] = useState({
        latitude:48.8566,
        longitude:2.3552
    });
    
    /* const getCordinates = async(city)=>{

        try {
            const res = await axios.get(`https://cors-anywhere.herokuapp.com/https://nominatim.openstreetmap.org/search`,{
                params:{
                    city: city,
                    format:'json',
                    limit: 1
                }
            })
            const data = await res.data
            if(data.length > 0){
                const  {lat, lon} = data[0];
                setCordinates({
                    latitude: parseFloat(lat),
                    longitude:parseFloat (lon)
                });
                setError(null)
            }else{
                setError(`${city} not found on the map`);
                setCordinates(null)
            }
        } catch (error) {
            console.log(error);
            setError("error fetching city");
            setCordinates(null)
            
        }
    } */
    
    
  return (
    
        
            <MapContainer
             center ={
                [
                    cordinates.latitude, cordinates.longitude
                ]
             }
             zoom = {13}
             /* style={{
                height: "100%",
                width: "100%",
                backgroundColor: "red"
             }} */
            >
                <InnerMap cordinates = {cordinates} setCordinates={setCordinates}/>
            </MapContainer>
        

    
  )
}

export default GeoCode