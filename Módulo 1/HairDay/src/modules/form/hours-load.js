import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours";
import { hoursClick } from "./hours-click";

const hours = document.getElementById("hours");

export function hoursLoad({ date, dailySchedules }) {
    hours.innerHTML = "";

    const unavailableHours = dailySchedules.map((schedule) => {
        return dayjs(schedule.when).format("HH:mm");
    })

    const opening = openingHours.map((hour) => {

        const [scheduleHour] = hour.split(":");
        const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs());
        const available = !isHourPast && !unavailableHours.includes(hour);
        return {
            hour,
            available
        }
    });

    opening.forEach(({ hour, available }) => {
        const li = document.createElement("li");

        li.classList.add("hour");

        if (hour === "9:00") {
            hourHeaderAdd("Manhã");
        } else if (hour === "13:00") {
            hourHeaderAdd("Tarde");
        } else if (hour === "18:00") {
            hourHeaderAdd("Noite");
        }

        li.classList.add(available ? "hour-available" : "hour-unavailable");
        li.textContent = hour;
        hours.append(li);

    });

    hoursClick();
}


const hourHeaderAdd = (title) => {
    const li = document.createElement("li");
    li.classList.add("hour-period");
    li.textContent = title;

    hours.append(li);
}