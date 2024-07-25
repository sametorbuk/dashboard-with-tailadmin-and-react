import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass, faMoon } from "@fortawesome/free-solid-svg-icons"

import { faSun } from "@fortawesome/free-solid-svg-icons"
import { faBell } from "@fortawesome/free-solid-svg-icons"
import { faCommentDots } from "@fortawesome/free-solid-svg-icons"
import NotificationDiv from "../notification/notification-div"
import { useOpenClose } from "../Hooks/Open-Close-Hooks"


export default function HeaderComp(props) {
    const { isOpenTheme, clickHandler } = props

    const [notifIsOpen, notificationClickHandler] = useOpenClose()

    return (<>

        <div className="flex mt-6 gap-3.5 items-center">



            <input className="w-3/5 bg-transparent " type="text" placeholder="Type to search...." />
            <FontAwesomeIcon className="order-[-1] text-2xl  text-gray-400 mx-2" icon={faMagnifyingGlass} />



            {!isOpenTheme && <div onClick={clickHandler} className="flex items-center cursor-pointer">
                <p>Dark</p>
                <FontAwesomeIcon icon={faMoon} style={{ color: "#FFD43B", }} />
            </div>}



            {isOpenTheme && <div onClick={clickHandler} className="flex items-center cursor-pointer">
                <p>Light</p>
                <FontAwesomeIcon icon={faSun} style={{ color: "#FFD43B", }} />
            </div>}



            <button onClick={notificationClickHandler}><FontAwesomeIcon icon={faBell} /></button>



            {notifIsOpen && <NotificationDiv />}









            <button><FontAwesomeIcon icon={faCommentDots} /></button>









            <div className="flex flex-col flex-2">
                <p className="font-bold">Samet Orbuk</p>
                <p>React Dv.</p>
            </div>
            <img className="h-8 w-8 rounded-3xl" src="./src/assets/prof-photo.jpg" alt="" />


            <button>Icon</button>










        </div>







    </>)








}