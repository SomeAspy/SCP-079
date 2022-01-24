export async function getNeko(name) {
    const resp = await fetch(`https://nekos.life/api/v2/img/${name}`);
    return (await resp.json()).url;
}
;
