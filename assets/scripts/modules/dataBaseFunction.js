export function postInfos(eventName, datesArray, eventAuthor, eventDescription){
    fetch('http://localhost:3000/api/events/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: eventName,
            dates: datesArray,
            author: eventAuthor,
            description: eventDescription
        })

    })  .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
}


export function editEvent (eventId, eventName, eventAuthor, eventDescription){
    fetch('http://localhost:3000/api/events/' + eventId, {
        method : 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: eventName,
            author: eventAuthor,
            description: eventDescription
        })
    })  .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
}


export function deleteEvent (eventId){
    fetch('http://localhost:3000/api/events/' + eventId, {
        method: 'DELETE',
        headers: {
            'Content-Type' : 'application/json'
        },
        
    })  .then(res => res.json())
        .then(data => {console.log(data)})
        .catch(error => console.log(error));
}


export function addDates (eventId, datesArray){
    fetch('http://localhost:3000/api/events/' + eventId + '/add_dates', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            dates: datesArray
        })
        
    })  .then(res => res.json())
        .then(data => {console.log(data)})
        .catch(error => console.log(error));
}


export function attendEvent (eventId, attendeeName, datesAvailableArray){
    fetch('http://localhost:3000/api/events/' + eventId + '/attend', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            name: attendeeName,
            dates: datesAvailableArray,
        })
        
    })  .then(res => res.json())
        .then(data => {console.log(data)})
        .catch(error => console.log(error));
}


export function editAttendance (eventId, attendeeName, datesAvailableArray){
    fetch('http://localhost:3000/api/events/' + eventId + '/attend', {
        method: 'PATCH',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            name: attendeeName,
            dates: datesAvailableArray
        })
        
    })  .then(res => res.json())
        .then(data => {console.log(data)})
        .catch(error => console.log(error));
}