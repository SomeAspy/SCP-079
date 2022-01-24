// Copyright (c) 2022 Aiden Baker
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import{cli}from "../index.js";
console.log(cli)
export function randomFrom(array:string|any[]):any{
    return array[Math.floor(Math.random()*array.length)];
};
export function memberFromID(id:string):any{
    return cli.users.cache.get(id);
};