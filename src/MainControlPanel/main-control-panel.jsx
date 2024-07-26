

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTableCellsLarge, faCalendarDays, faUser, faListCheck, faChartSimple, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useOpenClose } from '../Hooks/Open-Close-Hooks';

import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faWpforms } from "@fortawesome/free-brands-svg-icons"
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function MainControlPanel() {
    const [isOpen, clickHandler] = useOpenClose()

    const [isOpen2, clickHandler2] = useOpenClose()

    const [isOpenForms, clickHandler3] = useOpenClose()
    const history = useHistory()

    return (<>

        <div className="flex flex-col items-center bg-rose-800 text-stone-50 flex-3  ">

            <div onClick={() => { history.push("/") }} className="flex my-8 items-center cursor-pointer">
                <FontAwesomeIcon className="text-3xl" icon={faChartSimple} />

                <h3 className="text-3xl font-bold">WiT Control</h3>


            </div>

            <p className="mr-44 font-bold">Menu</p>



            <div className="flex flex-col  w-64 border-solid border-pink-700 border-2 gap-8 items-center ">


                <div onClick={clickHandler} className='flex items-center w-full justify-around'>
                    <FontAwesomeIcon className="text-xl"
                        icon={faTableCellsLarge} />
                    <button onClick={clickHandler} className="text-xl">
                        Dashboard</button>
                    {isOpen && <FontAwesomeIcon className='mx-7' icon={faChevronDown} />}
                    {!isOpen && <FontAwesomeIcon className='mx-7' icon={faChevronLeft} />}
                </div>

                {isOpen && <div className='flex flex-col'>

                    <button>eCommerce</button>
                    <button>Analytics</button>
                    <button>Marketing</button>
                    <button>CRM</button>
                    <button>Stocks</button>


                </div>}





                <button onClick={() => { history.push("/calendar-page") }} className="text-xl"><FontAwesomeIcon icon={faCalendarDays} /> Calendar</button>

                <button onClick={() => { history.push("/profile") }} className="text-xl"> <FontAwesomeIcon icon={faUser} /> Profile</button>





                <div onClick={clickHandler2} className='flex items-center w-full justify-around'>
                    <FontAwesomeIcon className="text-xl" icon={faListCheck} />
                    <button className="text-xl"> Task</button>
                    {isOpen2 && <FontAwesomeIcon className='mx-7' icon={faChevronDown} />}
                    {!isOpen2 && <FontAwesomeIcon className='mx-7' icon={faChevronLeft} />}
                </div>

                {isOpen2 && <div className='flex flex-col'>

                    <button>List</button>
                    <button>Kanban</button>
                </div>}











                <div className='flex items-center w-full justify-around'>
                    <FontAwesomeIcon className="text-xl" icon={faWpforms} />
                    <button onClick={clickHandler3} className="text-xl"> Forms</button>

                    {isOpenForms && <FontAwesomeIcon className='mx-7' icon={faChevronDown} />}
                    {!isOpenForms && <FontAwesomeIcon className='mx-7' icon={faChevronLeft} />}
                </div>

                {isOpenForms && <div className='flex flex-col'>

                    <button>Form Elements</button>
                    <button>Form Layout</button>
                </div>}





            </div>
        </div>




    </>)
}