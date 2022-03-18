// Copyright (c) 2022 Aiden Baker
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { fetch } from 'undici';

export async function getNeko(type: string) {
    return await fetch(`https://nekos.life/api/v2/img/${type}`)
        .then((res) => res.json())
        .then((json: { url: string }): string => {
            return json.url;
        });
}
