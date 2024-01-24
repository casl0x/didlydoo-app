import { postInfos } from "./dataBaseFunction";

export function submitForm () {
    const formEvent = document.querySelector('.form');
    formEvent.addEventListener('submit', e => {
        e.preventDefault();

        const formData = new FormData(formEvent);
        const data = Object.fromEntries(formData)

        postInfos(eventName, datesArray, eventAuthor, eventDescription)
    })
}