
import './App.css'
import HeaderComp from './Header-Comp/header'
import MainControlPanel from './MainControlPanel/main-control-panel'
import { useOpenClose } from './Hooks/Open-Close-Hooks'
import { VictoryChart,  VictoryArea } from 'victory';

export default function App() {
  const [isOpenTheme, clickHandler] = useOpenClose()


  return (<>


    <MainControlPanel />

    <div className={`flex flex-col  flex-7 border-solid border-2s w-screen 
       ${isOpenTheme ? "bg-slate-700" : "bg-gray-100"} ${isOpenTheme ? "text-stone-400" : "text-black"} `}>

      <HeaderComp isOpenTheme={isOpenTheme} clickHandler={clickHandler} />

      <VictoryChart
        width={30}
        height={20}
        padding={{ top: 5, bottom: 10, left: 10, right: 10 }}
        scale={{ x: "linear", y: "linear" }}
        theme={{
          axis: {
            style: {
              tickLabels: { fontSize: 0.6 } // Yazı boyutunu 3 piksel olarak ayarla
            }
          }
        }}
        fontSize={1}
      >
        <VictoryArea
          style={{
            data: { stroke: "#c43a31", strokeWidth: 0.3, strokeLinecap: "round" }, // Çizgi kalınlığını 1 piksel olarak ayarla
            labels: { fontSize: 0.5 } // Etiket boyutunu 3 piksel olarak ayarla
          }}
          data={[
            { x: 1, y: 2, y0: 0 },
            { x: 2, y: 3, y0: 1 },
            { x: 3, y: 5, y0: 1 },
            { x: 4, y: 4, y0: 2 },
            { x: 5, y: 6, y0: 2 }
          ]}
          animate={{
            duration: 1000
          }}
        />
      </VictoryChart>


      <p>SAMET</p>





    </div>







  </>
  )
}

