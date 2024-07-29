

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"






export default function RedirectPage(props) {

    const { timeRedirectPage } = props


    return (<>

        <div className="flex flex-col bg-rose-800 h-[36.5rem] items-center gap-[3rem] " >


            <div className="flex items-center gap-[2rem] mt-[7rem]">
                <h2 className="font-bold text-white text-4xl">Giriş Başarılı</h2>
                <FontAwesomeIcon className="text-5xl" icon={faCheck} style={{ color: "#09ec6b", }} />
            </div>


            <h4 className="font-bold text-white text-xl" >Anasayfaya Yönlendiriliyorsunuz</h4>


            <p className="font-bold text-white text-xl" >{timeRedirectPage}</p>



        </div>





    </>)
}