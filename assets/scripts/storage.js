export function getStoredArray(arrayName){
    if(localStorage.getItem(arrayName)){
        const parsedItems = JSON.parse(localStorage.getItem(arrayName));
        return items = Array.isArray(parsedItems) ? parsedItems : [parsedItems];
    }
}

export function storeArray(objectsArray, arrayName){
    objectsArray = JSON.stringify(objectsArray);
    localStorage.setItem(arrayName, objectsArray);
}