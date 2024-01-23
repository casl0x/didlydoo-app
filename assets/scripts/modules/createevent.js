function createEvent () {
    const inputTitle = document.getElementById('etitle');
    const inputDescription = document.getElementById('edescription');
    const inputDate = document.getElementById('edate')
    

    const event = document.createElement('div');
    event.className = "plan";
    
    event.innerHTML += 
     `
        <p>${inputTitle.value}</p>
        <p>${inputDescription.value}</p>
        <p>${inputDate.value}</p>
    `;

    const eventList = document.querySelector('.list-event');
    eventList.appendChild(event);
}



export default createEvent;