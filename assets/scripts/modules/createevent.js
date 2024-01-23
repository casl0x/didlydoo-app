function createEvent () { // à lier avec l'api
    const inputTitle = document.getElementById('etitle').value;
    const inputDescription = document.getElementById('edescription').value;
    const inputDate = document.getElementById('edate').value;

    sendDataToBack (inputTitle, inputDescription, inputDate)
    
}

async function sendDataToBack (inputTitle, inputDescription, inputDate) {

    const eventData = {inputTitle, inputDescription, inputDate};

    try {
        const response = await fetch(`http://localhost:3000/api/events/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(eventData),
        });

        if (!response.ok){
            const errorData = await response.json();
            console.error(errorData);
        } else {

            const event = document.createElement('div');
            event.className = "plan";

            event.innerHTML += 
            `
                <button class="delete-btn">X</button>
                <p>${inputTitle}</p>
                <p>${inputDescription}</p>
                <p>${inputDate}</p>
            `;

            const eventList = document.querySelector('.list-event');
            eventList.appendChild(event);
        }

    } catch (err) {
        console.error(err)
    }
}

export default createEvent;