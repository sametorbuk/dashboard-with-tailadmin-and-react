
import './App.css'
import HeaderComp from './Header-Comp/header'
import MainControlPanel from './MainControlPanel/main-control-panel'
import { useOpenClose } from './Hooks/Open-Close-Hooks'
import { VictoryChart, VictoryArea } from 'victory';

export default function App() {
  const [isOpenTheme, clickHandler] = useOpenClose()


  return (<>


    <MainControlPanel />

    <div className={`flex flex-col  flex-7 border-solid border-2s w-screen 
       ${isOpenTheme ? "bg-slate-700" : "bg-gray-100"} ${isOpenTheme ? "text-stone-400" : "text-black"} `}>

      <HeaderComp isOpenTheme={isOpenTheme} clickHandler={clickHandler} />






    </div>







  </>
  )
}

