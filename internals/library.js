
export function randomFrom(array) {
    return array[Math.floor(Math.random() * array.length)];
}

export function randomHex() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
