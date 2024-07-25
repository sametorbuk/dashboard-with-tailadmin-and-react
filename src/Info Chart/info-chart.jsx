



import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUp, faEye } from "@fortawesome/free-solid-svg-icons"


export default function InfoChart(props) {
    const { isOpenTheme } = props
    return (<>


        <div className="flex flex-col p-4 text-2xl ">
            <FontAwesomeIcon className="my-8 w-10 " icon={faEye} style={{ color: "#8a0000", }} />
            <p className="font-bold">$3.456 K</p>

            <div className="flex justify-between items-center font">

                <p style={{ marginTop: "1rem" }}>Total wiews </p>
                <p style={{ color: "#1adb54", marginLeft: "1.5rem", marginTop: "1rem" }} >0.43%</p>
                <FontAwesomeIcon icon={faArrowUp} style={{ color: "#1adb54", marginTop: "1rem" }} />


            </div>




        </div>







    </>)
}