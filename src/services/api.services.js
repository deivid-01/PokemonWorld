//Api config
const BASE_URL='https://pokeapi.co/api/v2/'

//Methods
export const searchItem  = async (MODULE,item_name) =>{
       
        var URL=`${BASE_URL+MODULE}/${item_name}`;

        return await fetchItem(URL);
}

export const getItems  = async (MODULE ,limit = 10, offset = 0) =>{
        
        var URL=`${BASE_URL+MODULE}?limit=${limit}&offset=${offset}`;
    
        return await fetchItem(URL)
}

export const getItemByURL  = async ( URL ) => await fetchItem(URL);


const fetchItem = async(URL)=>{
    try
    {
        //Item request
        const res = await fetch( URL );
        //Settle data
        const data = await res.json();

       return data;
    }
    catch (err)
    {
        console.log(err)
    }
}
