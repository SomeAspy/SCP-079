// Copyright (c) 2022 Aiden Baker
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
export async function getNeko(name:string):Promise<any>{
    const resp=await fetch(`https://nekos.life/api/v2/img/${name}`);
    return(await resp.json()).url;
};