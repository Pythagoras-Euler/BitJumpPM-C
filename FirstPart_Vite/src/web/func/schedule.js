import { Get } from "../transport";

function getSchedule() {
    return new Get()
        .url("user","schedule")
        // .sendWith((respData) => {
        //     schedule = respData.schedule
        //     greeting = respData.greeting
        //     // TODO: to use these data
        // })
        .send()
}
export {getSchedule}