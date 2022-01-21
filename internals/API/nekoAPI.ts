// Copyright (c) 2022 Aiden Baker
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import{endpoints}from './nekoEndpoints.js';
export async function getNeko(name:string,nsfwToggle:boolean):Promise<any>{
    const resp=await fetch(`https://nekos.life/api/v2/img/${nsfwToggle?endpoints.nsfw[name]:endpoints.sfw[name]}`);
    return(await resp.json()).url;
};
