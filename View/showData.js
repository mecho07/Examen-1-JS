import getData from "../Api/getData.js";

const showdata = async () => {
    const data = await getData();
    const div = document.getElementById("container");
    
    data.forEach(e => {
        let pe = document.createElement("p");
        pe.innerHTML = e.house;
        div.appendChild(pe);

    });

}

export default showdata;