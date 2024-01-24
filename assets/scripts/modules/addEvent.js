// import { postInfos } from "./dataBaseFunction.js"; → réécrite dans la fonction en dessous
import { createEvent } from "./createevent";

export function addMoreEvent () {
    const formEvent = document.querySelector('.input');

    formEvent.addEventListener('submit', function(e){
        e.preventDefault();
        const eventName = document.getElementById('etitle').value;
        const eventAuthor = document.getElementById('eauthor').value;
        // const datesArray = document.getElementById('edate').value;
        const eventDescription = document.getElementById('edescription').value;

        fetch('http://localhost:3000/api/events/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:  JSON.stringify({
                name: eventName,
                author: eventAuthor,
                // dates: datesArray,
                description: eventDescription
            })
    
        })  .then(res => res.json())
            .then(data => {
                console.log(data)
                createEvent(data)
            })
            .catch(error => console.log(error));
    })
}

// pas fonctionnel 