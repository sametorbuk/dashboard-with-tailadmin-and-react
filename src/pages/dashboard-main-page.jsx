
import { faArrowUp, faEye, faArrowDown, faCartShopping, faBagShopping, faUsers } from "@fortawesome/free-solid-svg-icons"
import InfoChart from "../Info Chart/info-chart"

import { messagesData } from "../notification/messages"
import BrandPiece from "../brand-comp/brand-comp"


export default function MainContent(props) {
    const { isOpenTheme } = props

    const infoChartData = [{
        total: "$3.456K",
        yuzdelik: "0.43%",
        icon: faEye,
        explanation: "Total views",
        color: "text-emerald-400",
        arrowIcon: faArrowUp

    }, {
        total: "$45.2",
        yuzdelik: "4.35%",
        icon: faCartShopping,
        explanation: "Total profit",
        color: "text-emerald-400",
        arrowIcon: faArrowUp
    }, {
        total: "2450",
        yuzdelik: "2.59%",
        icon: faBagShopping,
        explanation: "Total product",
        color: "text-emerald-400",
        arrowIcon: faArrowUp
    }, {
        total: "3456",
        yuzdelik: "0.95%",
        icon: faUsers,
        explanation: "Total users",
        color: "text-sky-500",
        arrowIcon: faArrowDown
    }]

    const brandData = [{
        icon: "./public/brand/brand-01.svg",
        brandname: "Google",
        visitors: "3.5K",
        revenues: "$5,768",
        conversion: "4.8%",
        sales: "590"
    }, {
        icon: "./public/brand/brand-02.svg",
        brandname: "Twitter",
        visitors: "2.2K",
        revenues: "$4,635",
        conversion: "467",
        sales: "4.3%"
    }, {
        icon: "./public/brand/brand-03.svg",
        brandname: "Github",
        visitors: "2.1K",
        revenues: "$4,290",
        conversion: "3.7%",
        sales: "420"
    }, {
        icon: "./public/brand/brand-04.svg",
        brandname: "vimeo",
        visitors: "1.5K",
        revenues: "$3,580",
        conversion: "2.5%",
        sales: "389"
    }, {
        icon: "./public/brand/brand-05.svg",
        brandname: "Facebook",
        visitors: "3.5K",
        revenues: "$6,768",
        conversion: "4.2%",
        sales: "390"
    }]





    return (<>



        <div className='flex justify-around'>

            {infoChartData.map((item, index) => {
                return <InfoChart key={index} item={item} isOpenTheme={isOpenTheme} />
            })}

        </div>




        <div className="flex flex-col p-6  border-stone-950 border h-screen">
            <div className="flex justify-between">
                <div className={`flex flex-col p-6  rounded-lg  ${isOpenTheme ? "bg-slate-600" : "bg-slate-200"}`}>
                    <h2 className="font-bold mb-6">TOP CHANNELS</h2>
                    <div className="flex justify-between gap-10">
                        <p className="ml-8"> SOURCE</p>
                        <p> VISITORS</p>
                        <p> REVENUES</p>
                        <p> SALES</p>
                        <p> CONVERSION</p>

                    </div>

                    {brandData.map((item, index) => {
                        return <BrandPiece key={index} item={item} />
                    })}



                </div>

                <div className={`flex flex-col p-6 rounded-lg  ${isOpenTheme ? "bg-slate-600" : "bg-slate-200"}`}>
                    <h2 className="font-bold">Chats</h2>
                    <div className="flex flex-col h-48 gap-2.5 ">




                        {messagesData.map((item, index) => (
                            <div key={index} className=" flex items-center ">
                                <img className="w-12 h-12" src={item.path} alt="" />
                                <div className="flex flex-col">
                                    <p className="font-bold">{item.username}</p>
                                    <p>{item.message}</p>
                                    <p>{item.time}</p>
                                </div>
                            </div>
                        ))}



                    </div>



                </div>




            </div>

        </div>

    </>)
}