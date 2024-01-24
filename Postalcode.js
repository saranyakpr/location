import React, { useState,useEffect } from "react";


function Postalcode(){
    
    const[code, setCode] = useState("");
    const[addressDetails, setAddressDetails] = useState([]);

        useEffect(()=>{
           

        // navigator.geolocation.getCurrentPosition(pos=>{
        //     const {latitude,longitude} = pos.coords;
        //     console.log(latitude,longitude)
        //    // const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
       
        // })

    },[])

    // let apiKey = "AIzaSyD2774LMpYpIAd_g9WXqVMZI0WBgwT2Fsg";
    //postalCode

   function buttonClick() {
        const url =`https://maps.googleapis.com/maps/api/geocode/json?address=${code}&key=AIzaSyD2774LMpYpIAd_g9WXqVMZI0WBgwT2Fsg`;
    
        //setAdd(data.address)
         fetch(url).then(res=>res.json()).then((data)=>{
             console.log(data)
             if(data.status==="OK")
             {
                 setAddressDetails(data.results)
             }
         
         })

    }
    return(
        <div>
            <label>pincode:</label>
            <input type='text' placeholder="000000" onChange={(e)=>setCode(e.target.value)}/>
            <button onClick={buttonClick}>Search</button>
            {addressDetails.length >0 && addressDetails[0].address_components.map((adata)=>{
                let {long_name,short_name,types,}=adata;
                return<>
                <div>
                   {types[0]}  - {long_name} - {short_name}
                </div>
                </>
            })}
            {addressDetails.length >0&& addressDetails[0].formatted_address && <div>{addressDetails[0].formatted_address}</div>}

            {addressDetails.length >0&& addressDetails[0].postcode_localities && <div>{JSON.stringify(addressDetails[0].postcode_localities)}</div>}
            
        </div>
    )
}

export default Postalcode; 












// import React, { useEffect, useState } from "react";

// function Postalcode(){
//     const [add,setAdd] = useState('')
    
//     useEffect(()=>{
//         navigator.geolocation.getCurrentPosition(pos=>{
//             const {latitude,longitude} = pos.coords;
//             console.log(latitude,longitude)
//             const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
//             fetch(url).then(res=>res.json()).then(data=>setAdd(data.address))
//         })
//     },[])
//     console.log(add)
//     return(
//         <div>
//             <label>pincode:</label>
//             <input type='text' placeholder="000000"/>
//         </div>
//     )
// }

// export default Postalcode;