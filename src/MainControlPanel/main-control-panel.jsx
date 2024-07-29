

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTableCellsLarge, faCalendarDays, faUser, faListCheck, faChartSimple, faChevronDown, faGear, faBook } from "@fortawesome/free-solid-svg-icons";
import { useOpenClose } from '../Hooks/Open-Close-Hooks';

import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faWpforms } from "@fortawesome/free-brands-svg-icons"
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function MainControlPanel() {
    const [isOpen, clickHandler] = useOpenClose()
    const [isOpen2, clickHandler2] = useOpenClose()
    const [isOpenForms, clickHandler3] = useOpenClose()
    const [isOpenAddProduct, clickHandlerAddProduct, setIsOpenAddProduct] = useOpenClose()

    const history = useHistory()

    return (<>

        <div style={{ height: "inital" }} className="flex flex-col items-center bg-rose-800 text-stone-50 flex-3">

            <div onClick={() => { history.push("/main-page") }} className="flex my-8 items-center cursor-pointer">
                <FontAwesomeIcon className="text-3xl" icon={faChartSimple} />

                <h3 className="text-3xl font-bold">WiT Control</h3>


            </div>

            <p className="mr-44 font-bold mb-4">Menu</p>



            <div className="flex flex-col  w-64 gap-8 items-center ">


                <div onClick={clickHandler} className='flex items-center w-full justify-around hover:bg-[#5a000061] h-[3rem]'>
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




                <div onClick={clickHandlerAddProduct} className='flex items-center w-full justify-around hover:bg-[#5a000061] h-[3rem]'>
                    <FontAwesomeIcon className="text-xl relative left-[0.9rem]"
                        icon={faBook} />
                    <button onClick={clickHandlerAddProduct} className="text-xl  ">
                        Product Management</button>
                    {isOpenAddProduct && <FontAwesomeIcon className='mx-7' icon={faChevronDown} />}
                    {!isOpenAddProduct && <FontAwesomeIcon className='mx-7' icon={faChevronLeft} />}
                </div>

                {isOpenAddProduct && <div className='flex flex-col gap-[1rem]'>


                    <button className='hover:bg-[#5a000061] w-[16rem]'>Book List</button>
                    <button className='hover:bg-[#5a000061] w-[16rem]'>Add Book</button>



                </div>}
























                <div className='flex items-center w-[16.2rem] hover:bg-[#5a000061] h-[3rem]'>
                    <FontAwesomeIcon className='text-xl ml-[1.3rem] ' icon={faCalendarDays} />
                    <button onClick={() => { history.push("/calendar-page") }}
                        className="text-xl ml-[2rem] "> Calendar</button>
                </div>


                <div className='flex items-center w-[16.2rem] hover:bg-[#5a000061] h-[3rem] '>
                    <FontAwesomeIcon className='text-xl ml-[1.3rem]' icon={faUser} />
                    <button onClick={() => { history.push("/profile") }}
                        className="text-xl ml-[2rem]">  Profile</button>
                </div>




                <div onClick={clickHandler2} className='flex items-center w-full justify-around hover:bg-[#5a000061] h-[3rem]'>
                    <FontAwesomeIcon className="text-xl right-1 relative" icon={faListCheck} />
                    <button className="text-xl"> Task</button>
                    {isOpen2 && <FontAwesomeIcon className='mx-7' icon={faChevronDown} />}
                    {!isOpen2 && <FontAwesomeIcon className='mx-7' icon={faChevronLeft} />}
                </div>

                {isOpen2 && <div className='flex flex-col'>

                    <button>List</button>
                    <button>Kanban</button>
                </div>}











                <div className='flex items-center w-full justify-around hover:bg-[#5a000061] h-[3rem]'>
                    <FontAwesomeIcon className="text-xl" icon={faWpforms} />
                    <button onClick={clickHandler3} className="text-xl"> Forms</button>

                    {isOpenForms && <FontAwesomeIcon className='mx-7' icon={faChevronDown} />}
                    {!isOpenForms && <FontAwesomeIcon className='mx-7' icon={faChevronLeft} />}
                </div>

                {isOpenForms && <div className='flex flex-col '>

                    <button>Form Elements</button>
                    <button>Form Layout</button>
                </div>}






                <div onClick={() => { history.push("/settings") }} className='flex items-center w-full hover:bg-[#5a000061] h-[3rem] '>
                    <FontAwesomeIcon className="text-xl ml-[1.2rem]" icon={faGear} />
                    <button className="text-xl ml-[2.4rem]"> Settings</button>


                </div>



            </div>
        </div>




    </>)
}