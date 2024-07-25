
import { Switch } from 'react-router-dom/cjs/react-router-dom.min'
import './App.css'
import HeaderComp from './Header-Comp/header'

import { useOpenClose } from './Hooks/Open-Close-Hooks'

import MainControlPanel from './MainControlPanel/main-control-panel'
import MainContent from './pages/dashboard-main-page'
import { Route } from 'react-router-dom/cjs/react-router-dom'
import MyCalendar from './calendar/my-calendar'






export default function App() {
  const [isOpenTheme, clickHandler] = useOpenClose()


  return (<>


    <MainControlPanel />



    <div className={`flex flex-col  flex-7 border-solid border-2s w-screen 
       ${isOpenTheme ? "bg-slate-700" : "bg-gray-100"} ${isOpenTheme ? "text-stone-400" : "text-black"} `}>

      <HeaderComp isOpenTheme={isOpenTheme} clickHandler={clickHandler} />







      <div className='flex flex-col'>






        <Switch>

          <Route path="/" exact>
            <MainContent isOpenTheme={isOpenTheme} />
          </Route>

          <Route path="/calendar-page">

            <MyCalendar />


          </Route>


        </Switch>






      </div>


    </div>







  </>
  )
}

