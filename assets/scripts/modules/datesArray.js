export function addDateToArray (){

    document.querySelector(".datediv button").addEventListener("click", function (){
        const sel = document.querySelector('select');
        const d = document.getElementById("edate").value;
            
        if (!d.trim()) {
            alert("Select a date first.");
        } else {
            sel.innerHTML += `<option value="${d}">${d}</option>`;
        }

    })
}