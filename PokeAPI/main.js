fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur')
.then(respuesta => respuesta.json())
.then(pokemon => {
    let element = document.getElementById('poke-01')
    element.innerHTML = `<p> <h4>${pokemon.name}</h4><p>
    <img src='${pokemon.sprites.front_default}'><p> Height: ${pokemon.height}<p><p> Weight: ${pokemon.weight}<p>`;
    console.log(pokemon)
})
.catch(err=>console.log(err))

fetch('https://pokeapi.co/api/v2/pokemon/zubat')
.then(respuesta => respuesta.json())
.then(pokemon2 => {
    let element = document.getElementById('poke-02')
    element.innerHTML = `<h4> ${pokemon2.name}</h4>
    <img src='${pokemon2.sprites.front_default}'><p> Height: ${pokemon2.height}<p><p> Weight: ${pokemon2.weight}<p>`;
    console.log(pokemon2)
})
.catch(err=>console.log(err))

fetch('https://pokeapi.co/api/v2/pokemon/machop')
.then(respuesta => respuesta.json())
.then(pokemon03 => {
    let element = document.getElementById('poke-03')
    element.innerHTML = `<h4>${pokemon03.name}</h4>
    <img src='${pokemon03.sprites.front_default}'><p> Height: ${pokemon03.height}<p><p> Weight: ${pokemon03.weight}<p>`;
    console.log(pokemon03)
})
.catch(err=>console.log(err))