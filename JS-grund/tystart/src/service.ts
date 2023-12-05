export const get = async (url) => {
    const r = await fetch(url)
    const d = await r.json()
    //console.log(d);
    return d
}