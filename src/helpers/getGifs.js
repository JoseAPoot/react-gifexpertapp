export const getGifs = async( categoria ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(categoria) }&limit=20&api_key=GLe0eE1xxeTAYmLcqyGBvbI5yadxXswW`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => {
        return {
            id   : img.id,
            title: img.title,
            url  : img.images?.original.url
        }
    })

    return gifs;
}