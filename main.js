import { postInfos, editEvent, deleteEvent, addDates, attendEvent, editAttendance, getEvent, getAllEvents, getAllAttendees, getAttendee } from "./assets/scripts/dataBaseFunctions.js";
/*
function test(){
    postInfos("Test", ['2022-03-12', '2022-03-13', '2022-03-14', '2022-03-15'], "Denis", "Ceci est un test");
}
*/

async function test(){
        let data = await getAttendee("Michou");
        console.log(data);

}

function edit(){
    editEvent("378ee41aa49b", "Toust", "Dany", "New description");
}

let button = document.querySelector(".test");
button.addEventListener('click', test);

let editButton = document.querySelector(".edit");
editButton.addEventListener('click', edit);