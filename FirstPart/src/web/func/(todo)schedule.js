import { Get } from "../transport";

function getSchedule() {
    new Get()
        .url("user","schedule")
        .sendWith((respData) => {
            schedule = respData.schedule
            greeting = respData.greeting
            // TODO: to use these data
        })
}
export {getSchedule}