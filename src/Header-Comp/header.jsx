import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass, faMoon } from "@fortawesome/free-solid-svg-icons"

import { faSun } from "@fortawesome/free-solid-svg-icons"
import { faBell } from "@fortawesome/free-solid-svg-icons"
import { faCommentDots } from "@fortawesome/free-solid-svg-icons"
import NotificationDiv from "../notification/notification-div"
import { useOpenClose } from "../Hooks/Open-Close-Hooks"
import { useEffect } from "react"
import { HeaderMesssagesArea } from "../notification/messages"





export default function HeaderComp(props) {
    const { isOpenTheme, clickHandler } = props

    const [notifIsOpen, notificationClickHandler, setNotifIsOpen] = useOpenClose()
    const [messageIsOpen, messageClickHandler, setMessageIsopen] = useOpenClose()

    const handleClickOutside = (event) => {
        if (
            event.target.closest('.notifDiv') === null && event.target.closest(".messagesDiv") === null

        ) {
            setMessageIsopen(false)
            setNotifIsOpen(false)

        }
    };

    useEffect(() => {
        if (notifIsOpen || messageIsOpen) {
            document.addEventListener('mousedown', handleClickOutside);

        } else {
            document.removeEventListener('mousedown', handleClickOutside);

        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);


        };
    }, [notifIsOpen, messageIsOpen]);



    return (<>

        <div className="flex mt-6 gap-3.5 items-center  mb-5" >



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



            <button onClick={messageClickHandler}><FontAwesomeIcon icon={faCommentDots} /></button>


            {messageIsOpen && <HeaderMesssagesArea />}






            <div className="flex flex-col flex-2">
                <p className="font-bold">Samet Orbuk</p>
                <p>React Dv.</p>
            </div>
            <img className="h-8 w-8 rounded-3xl" src="./src/assets/prof-photo.jpg" alt="" />


            <button>Icon</button>










        </div>







    </>)








}