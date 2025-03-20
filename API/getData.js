import url from "./url.js";

async function getData(){
    try{
        const data = await fetch(url);
        if (!data.ok){
            throw new Error("OMG...:", data.status);
        }
        let datajason = await data.json();
        console.log(datajason.results);
        return datajason.results;

        console.log( await data.json())
} catch (error) {
    console.log(error.message);
}

}

getData();

export default getData;