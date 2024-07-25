

import React from "react"





export default function BrandPiece(props) {
    const { item } = props
    const { icon, brandname, visitors, revenues, sales, conversion } = item



    return (<>


        <div className="flex  my-6 h-9 justify-around items-center">


            <div className="flex items-center">
                <img src={icon} alt="" />
                <p>{brandname}</p>
            </div>



            <p>{visitors}</p>







            <p className="text-emerald-400 ">{revenues}</p>
            <p>{sales}</p>
            <p>{conversion}</p>


        </div>








    </>)
}