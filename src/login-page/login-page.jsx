

import { useForm } from "react-hook-form"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"



export default function LoginPage(props) {
    const { setTimeRedirectPage } = props
    const history = useHistory();



    const { register, handleSubmit, formState: { errors, isValid } } = useForm({
        defaultValues: {
            fullname: "",
            phoneNumber: "",
            email: "",
            username: "",
            bio: "",
        },
        mode: "all"
    })


    const onSubmit = () => {
        history.push("/redirect-page")
        setTimeout(() => {
            setTimeRedirectPage(2)
        }, 1000)
        setTimeout(() => {
            setTimeRedirectPage(1)
        }, 2000)
        setTimeout(() => {
            setTimeRedirectPage(0)
            history.push("/main-page")
        }, 3000)
    }




    return (<>

        <div className="flex items-center flex-col bg-gray-400 h-[36.5rem]">
            <button onClick={() => { history.push("/main-page") }} className="text-4xl" >Lütfen Giriş Yapın</button>


            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col w-[40vw] gap-[6rem] ">





                    <div className="flex justify-around gap-[4rem]">



                        <div className="flex flex-col">
                            <label htmlFor="fullname">Fullname</label>
                            <input type="text" id="fullname" {...register("fullname", {
                                required: "Lütfen adınızı yazın", minLength: {
                                    value: 4,
                                    message: "İsim 4 karakterden az olamaz"
                                }
                            })} />
                            {errors.fullname && <p className="text-red-700" >{errors.fullname.message}</p>}
                        </div>


                        <div className="flex flex-col">
                            <label htmlFor="number">Number</label>
                            <input type="number" id="number" {...register("number", {
                                required: "Lütfen numaranızı yazın", minLength: {
                                    value: 10,
                                    message: "Telefon numarası 10 karakterden az olamaz"
                                }
                            })} />
                            {errors.number && <p className="text-red-700">{errors.number.message}</p>}
                        </div>




                    </div>


                    <div className="flex flex-col">
                        <label htmlFor="email">Email adress</label>
                        <input type="text" id="email" {...register("email", {
                            required: "Lütfen mailinizi yazın", minLength: {
                                value: 4,
                                message: "Eksik mail adresi"
                            },
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Geçersiz email adresi"
                            }
                        })} />
                        {errors.email && <p className="text-red-700" >{errors.email.message}</p>}
                    </div>



                    <div className="flex flex-col">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" {...register("username", {
                            required: "Lütfen kullanıcı adınızı yazın", minLength: {
                                value: 4,
                                message: "Eksik kullanıcı adı"
                            }
                        })} />
                        {errors.username && <p className="text-red-700" >{errors.username.message}</p>}
                    </div>






                    <button className="flex text-white bg-[#9f2626] 
                justify-center rounded bg-primary py-2 px-6 
                font-medium text-gray hover:bg-opacity-90"
                        type="submit" disabled={!isValid}> Gönder</button>

                </div>
            </form>




        </div>


    </>)
}