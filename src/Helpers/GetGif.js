

  export const getGif = async ( category ) => {
    const url =
      `https://api.giphy.com/v1/gifs/search?limit=10&q=${encodeURI(category)}&api_key=OaK76Xy9CR4h40Y2Jk7844BpVYds1lSf`;

    const res = await fetch(url);
    const { data } = await res.json();

    return data.map((g) => {
      return {
        id: g.id,
        title: g.title,
        imagen: g.images.downsized_medium.url,
      };
    });

    
  };