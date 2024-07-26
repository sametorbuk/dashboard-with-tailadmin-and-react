import React from "react";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCamera } from "@fortawesome/free-solid-svg-icons"



export default function ProfilePage() {


    return (<>

        <label htmlFor="file-input">
            <button
                className="absolute left-[71rem] top-[21rem] text-white text-2xl bg-[#008376] rounded-xl p-[0.3rem]"
                style={{ cursor: 'pointer' }}
            >
                <FontAwesomeIcon icon={faCamera} /> Edit
            </button>
        </label>

        <input
            type="file"
            id="file-input"
            style={{
                display: "none"
            }} />

        <div className="flex flex-col bg-stone w-[78.5vw] h-screen p-9 items-center">
            <img className="w-[78.5vw]  h-64" src="./public/background--profile.jpg" alt="" />
            <img className="absolute w-[12rem] top-[18rem]  rounded-full" src="./public/profile-photo.jpg" alt="" />

            <p className="font-bold text-3xl mt-24">Samet Orbuk</p>
            <p>Jr. dev.</p>

            <div className="flex gap-4">

                <div className="flex items-center">
                    <p className="text-2xl font-bold">62</p>
                    <p>Posts</p>
                </div>
                <div className="flex items-center">
                    <p className="text-2xl font-bold">325</p>
                    <p>Followers</p>
                </div>
                <div className="flex items-center">
                    <p className="text-2xl font-bold">271</p>
                    <p>Following</p>
                </div>



            </div>


            <p className="font-bold">About me</p>

        </div>










    </>)
}