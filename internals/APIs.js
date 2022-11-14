
export async function getNeko(type) {
    return fetch(`https://nekos.life/api/v2/img/${type}`)
        .then((res) => res.json())
        .then((json) => json.url);
}
