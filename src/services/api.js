//Api config
const BASE_URL='https://pokeapi.co/api/v2/'

export const searchPokemon  = async (pokemon_name) =>{
    try{
        //Pokemon Request
        var URL=`${BASE_URL}pokemon/${pokemon_name}`;
        const res = await fetch( URL );
        
        //Settle data
        const data = await res.json();

        return data;

    }
    catch(err){
        console.log(err)
    }
}

export const getPokemons  = async ( limit = 10, offset = 0) =>{
    try{
        //Pokemon Request
        var URL=`${BASE_URL}pokemon?limit=${limit}&offset=${offset}`;
        const res = await fetch( URL );
        
         //Settle data
         const data = await res.json();

        return data;

    }
    catch(err){
        console.log(err)
    }
}


export const getPokemonData  = async ( URL ) =>{
    try{

        //Pokemon Request
        const res = await fetch( URL );
        
        //Settle data
        const data = await res.json();

        return data;

    }
    catch(err){
        console.log(err)
    }
}