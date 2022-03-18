// Copyright (c) 2022 Aiden Baker
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import { fetch } from 'undici';
export async function getNeko(type) {
    return fetch(`https://nekos.life/api/v2/img/${type}`)
        .then((res) => res.json())
        .then((json) => json.url);
}
