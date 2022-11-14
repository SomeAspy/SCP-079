// Copyright (c) 2022 Aiden Baker
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
export function randomFrom(array) {
    return array[Math.floor(Math.random() * array.length)];
}

export function randomHex() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
