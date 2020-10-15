function addEventListeners(array, event, funksjon) {
    for (const item of array) {
        item.addEventListeners(`${event}`, funksjon);
    }
}