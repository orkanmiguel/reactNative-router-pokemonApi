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

export async function getPokeDetails(namep) {
  const POKE_DETAILS = `https://pokeapi.co/api/v2/pokemon/${namep}/`;

  const rawData = await fetch(POKE_DETAILS);
  const json = await rawData.json();

  /* console.log(json.id);
  console.log(json.name);
  console.log(json.base_experience);
  console.log(json.height);
  console.log(json.weight); */
  const { id, name, base_experience, height, weight } = json;

  /*   console.log(json); */

  // get the card image

  const imgOrig = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  const imgShiny = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${id}.png`;

  // get the reviews

  return {
    imgOrig,
    imgShiny,
    id,
    name,
    base_experience,
    height,
    weight,
  };
}
