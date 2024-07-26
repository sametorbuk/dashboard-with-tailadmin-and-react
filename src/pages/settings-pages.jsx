
import { useForm } from "react-hook-form"


export default function SettingsPage() {
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


    return (<>


        <form onSubmit={handleSubmit}>
            <div className="flex flex-col w-[40vw]">

                <h1 className="text-2xl font-bold">SETTİNGS</h1>



                <div className="flex justify-around">



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
                        <input type="text" id="number" {...register("number", {
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



                <label className="input-label" htmlFor="bio">
                    BIO
                </label>
                <textarea

                    rows="5"
                    id="description"
                    {...register('bio', {
                        required: 'Bio açıklaması yazmalısınız',
                        minLength: {
                            value: 10,
                            message: 'Bio açıklaması en az 10 karakter olmalı',
                        },
                    })}
                ></textarea>
                {errors.bio && (
                    <p className="text-red-700" >{errors.bio.message}</p>
                )}


                <button className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:bg-opacity-90" type="submit" disabled={!isValid}> Gönder</button>

            </div>
        </form>




    </>)
}