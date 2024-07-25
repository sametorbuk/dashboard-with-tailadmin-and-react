
import './App.css'
import HeaderComp from './Header-Comp/header'

import { useOpenClose } from './Hooks/Open-Close-Hooks'
import InfoChart from './Info Chart/info-chart'
import MainControlPanel from './MainControlPanel/main-control-panel'



export default function App() {
  const [isOpenTheme, clickHandler] = useOpenClose()


  return (<>


    <MainControlPanel />

    <div className={`flex flex-col  flex-7 border-solid border-2s w-screen 
       ${isOpenTheme ? "bg-slate-700" : "bg-gray-100"} ${isOpenTheme ? "text-stone-400" : "text-black"} `}>

      <HeaderComp isOpenTheme={isOpenTheme} clickHandler={clickHandler} />

      <div className='flex justify-around'>


        <InfoChart isOpenTheme={isOpenTheme} />







      </div>








    </div>







  </>
  )
}

