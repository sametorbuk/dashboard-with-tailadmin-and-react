
import { Switch, useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import './App.css'
import HeaderComp from './Header-Comp/header'

import { useOpenClose } from './Hooks/Open-Close-Hooks'
import { useState } from 'react'
import MainControlPanel from './MainControlPanel/main-control-panel'
import MainContent from './pages/main-page'
import { Route } from 'react-router-dom/cjs/react-router-dom'
import MyCalendar from './calendar/my-calendar'
import ProfilePage from './pages/profile-pages'
import SettingsPage from './pages/settings-pages'
import { useLocation } from "react-router-dom"
import LoginPage from './login-page/login-page'
import RedirectPage from './redirect-page/redirect-page'






export default function App() {
  const [isOpenTheme, clickHandler] = useOpenClose()
  const location = useLocation();
  const isLoginPage = location.pathname === '/';
  const isRedirectPage = location.pathname === "/redirect-page"
  const [timeRedirectPage, setTimeRedirectPage] = useState(3)

  const history = useHistory()


  return (<>









    {(!isLoginPage && !isRedirectPage) && <MainControlPanel />}

    <div className={`${(!isLoginPage && !isRedirectPage) ? "block" : "flex"}  flex-col  flex-7 border-solid border-2s w-screen 
       ${isOpenTheme ? "bg-slate-700" : "bg-gray-100"} ${isOpenTheme ? "text-stone-400" : "text-black"} `}>

      {(!isLoginPage && !isRedirectPage) && <HeaderComp isOpenTheme={isOpenTheme} clickHandler={clickHandler} />}

      <div className={` flex-col ${(!isLoginPage && !isRedirectPage) ? "block" : "flex"}  `}>

        <Switch>
          <Route path="/" exact>
            <LoginPage
              setTimeRedirectPage={setTimeRedirectPage} />
          </Route>


          <Route path="/redirect-page">

            <RedirectPage
              timeRedirectPage={timeRedirectPage}

            />


          </Route>




          <Route path="/main-page">
            <MainContent isOpenTheme={isOpenTheme} />
          </Route>



          <Route path="/calendar-page">
            <MyCalendar />
          </Route>



          <Route path="/profile">
            <ProfilePage />
          </Route>


          <Route path="/settings">

            <SettingsPage />


          </Route>




        </Switch>






      </div>


    </div>







  </>
  )
}

