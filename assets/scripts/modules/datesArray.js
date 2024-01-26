export function addDateToArray (){

    document.querySelector(".datediv button").addEventListener("click", function (){
        const sel = document.querySelector('select');
        const d = document.getElementById("edate").value;
            
        if (!d.trim()) {
            alert("Select a date first.");
        } else {
            const validateDate = !isNaN(new Date(d).getTime());
            if (validateDate) {
                const dateObj = new Date(d);
                const formattedDate = `${dateObj.getDate()}/${dateObj.getMonth() + 1}/${dateObj.getFullYear()}`;

                sel.innerHTML += `<option value="${d}">${formattedDate}</option>`;
            } else {

            }
            
        }

    })
}