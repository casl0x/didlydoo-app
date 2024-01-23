export function deleteEvent(eventId, objectsArray, arrayName, getStoredArray, storeArray){
    let i = 0;
    while (objectsArray[i].uniqueId != eventId){
        i++;
    }
    objectsArray.splice(i, 1);
    storeArray(objectsArray, arrayName);
    getStoredArray(arrayName);
}