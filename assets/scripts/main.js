import {addEvent, validateform} from "./modules/form.js";
import { postInfos, editEvent, deleteEvent, addDates, attendEvent, editAttendance } from "./modules/dataBaseFunction.js";
import { createEvent } from "./modules/createevent.js";
import { displayEvent } from "./modules/displayEvent.js";


addEvent()
validateform()


// const eventData = [
//     {
//         name: 'Nom de l\'événement',
//         dates: ['2024-01-25', '2024-01-26'],
//         author: 'Auteur de l\'événement',
//         description: 'Description de l\'événement'
//     },
// ]
// const eventContainer = document.querySelector('.list-event');
// if (eventContainer) {
//     eventData.forEach(element => {
//         createEvent(element, eventContainer)
//     });
// }

displayEvent()