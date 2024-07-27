


import { useHistory } from "react-router-dom/cjs/react-router-dom.min"



export default function LoginPage() {
    const history = useHistory()


    return (<>



        <button onClick={history.push("/main-page")}>Anasayfaya git</button>





    </>)
}