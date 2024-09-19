export async function getLatesPokemon() {
  const LATEST_POKEMON = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0";

  const rawData = await fetch(LATEST_POKEMON);
  const json = await rawData.json();
  //TODO: por aca se puede obtener mas data segun la url, detalles, tipo pokemon, habilidades.
  /*  console.log("json", json.results); */
  /*   const {
    results: { items },
  } = json; */
  const result = json.results;

  /* console.log("item:", result.types); */

  return result.map((item) => {
    /*  console.log("item", item.types); */
    const { name, url } = item;

    const id = url.split("/").at(-2);

    // crea la imagen
    const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

    return {
      id,
      name,
      url,
      image: img,
    };
  });
}

export async function getPokeDetails(name) {
  const POKE_DETAILS = `https://pokeapi.co/api/v2/pokemon/${name}/`;

  /*   const rawData = await fetch(POKE_DETAILS);
  const json = await rawData.json();

  const { type } = json;
  const {  } = components[0];
  const { score } = criticScoreSummary;

  // get the card image
  const cardImage = images.find((image) => image.typeName === "cardImage");
  const { bucketType, bucketPath } = cardImage;
  const img = `https://www.metacritic.com/a/img/${bucketType}${bucketPath}`;

  const rawReviews = components[3].data.items;

  // get the reviews
  const reviews = rawReviews.map((review) => {
    const { quote, score, date, publicationName, author } = review;
    return { quote, score, date, publicationName, author };
  });

  return {
    img,
    title,
    slug,
    description,
    score,
    reviews,
  }; */
}
