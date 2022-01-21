// Copyright (c) 2022 Aiden Baker
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
export function randomFrom(array:string|any[]):number{
    return array[Math.floor(Math.random()*array.length)];
};