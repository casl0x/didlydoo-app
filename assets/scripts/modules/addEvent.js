// import { postInfos } from "./dataBaseFunction.js"; → réécrite dans la fonction en dessous

export function addMoreEvent () {
    const formEvent = document.querySelector('.input');

    formEvent.addEventListener('submit', function(e){
        e.preventDefault();

        const formData = new FormData(formEvent);
        const searchParams = new URLSearchParams(formData);

        fetch('http://localhost:3000/api/events/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: searchParams
    
        })  .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.log(error));
    })
}

// pas fonctionnel 