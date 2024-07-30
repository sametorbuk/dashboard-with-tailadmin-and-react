


export const messagesData = [{
    path: "./public/user/user-01.png",
    username: "Rober Jhon",
    message: "Can you share your offer ?",
    time: "10min ago"

}, {
    path: "./public/user/user-02.png",
    username: "Maria Desoja",
    message: "I like your confidence 💪",
    time: "2 min ago"
}, {
    path: "./public/user/user-03.png",
    username: "Henry Doli",
    message: "I cam across your profile and...",
    time: "1 day ago"
}, {
    path: "./public/user/user-04.png",
    username: "Cody Fisher",
    message: "I am waiting for your response",
    time: "5 days ago"
}, {
    path: "./public/user/user-05.png",
    username: "Alex Johannson",
    message: "I am forward to hearing from you",
    time: "5 min ago"
}, {
    path: "./public/user/user-06.png",
    username: "John Edingh",
    message: "Hi whatsup",
    time: "10 min ago"
}]








export function HeaderMesssagesArea() {
    return (<>



        <div className="messagesDiv  flex flex-col bg-[white] w-56 absolute z-[3] left-[55rem] top-[5rem] p-3 w-72 gap-2.5 rounded-lg">
            <p>Notification</p>




            <div className="flex flex-col overflow-y-auto h-64 gap-2.5 ">




                {messagesData.map((item, index) => (
                    <div key={index} className="borderNotification flex items-center">
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









    </>)
}