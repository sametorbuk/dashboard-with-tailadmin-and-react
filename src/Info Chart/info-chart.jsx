



import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUp, faEye, faArrowDown } from "@fortawesome/free-solid-svg-icons"
import { color } from "chart.js/helpers"


export default function InfoChart(props) {
    const { isOpenTheme, item } = props

    const { icon, arrowIcon, yuzdelik, total, explanation, color } = item


    return (<>


        <div className={`flex flex-col rounded-lg p-4 text-xl  ${isOpenTheme ? "bg-slate-600" : "bg-slate-200"}  `}>
            <FontAwesomeIcon className={` my-8 w-10  ${isOpenTheme ? "text-gray-300" :
                "text-rose-800"}  `} icon={icon} />
            <p className="font-bold">{total}</p>

            <div className="flex justify-between items-center font">

                <p style={{ marginTop: "1rem" }}>{explanation}</p>
                <p className={`${color}`} style={{ marginLeft: "0.5rem", marginTop: "1rem" }} >{yuzdelik}</p>
                <FontAwesomeIcon className={`${color}`} icon={arrowIcon} style={{ marginTop: "1rem" }} />


            </div>




        </div>







    </>)
}