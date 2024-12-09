const countries_link = "https://restcountries.com/v3.1/all"

async function fetchData(reg = "all",search="none") {
    let para1 = reg
    let para2 = search
    try{
        const response = await fetch(countries_link)
        data = await response.json()
        const container = document.getElementById("container")
        container.innerHTML =""
        if (reg==="all" && search === "none"){
            for (i of data){
                container.innerHTML += `<div class="card">
                <div class="flag">
                <img src="${i.flags.png}">
                </div>
                <div class="details">
                    <div class="name">
                        <h3>${i.name.common}</h3>
                    </div>
                    <div class="details-2">
                        <div class="fields">
                            <p class="type">Population: </p><p class="value">${i.population}</p>
                        </div>
                        <div class="fields">
                            <p class="type">Region: </p><p class="value">${i.region}</p>
                        </div>
                        <div class="fields">
                            <p class="type">Capital: </p><p class="value">${i.capital}</p>
                        </div>
                    </div>
                </div>
            </div>`
        }
    } else if (reg!="all" && search==="none"){
            for (i of data){
                if (i.region==reg)
                container.innerHTML += `<div class="card">
                <div class="flag">
                <img src="${i.flags.png}">
                </div>
                <div class="details">
                    <div class="name">
                        <h3>${i.name.common}</h3>
                    </div>
                    <div class="details-2">
                        <div class="fields">
                            <p class="type">Population: </p><p class="value">${i.population}</p>
                        </div>
                        <div class="fields">
                            <p class="type">Region: </p><p class="value">${i.region}</p>
                        </div>
                        <div class="fields">
                            <p class="type">Capital: </p><p class="value">${i.capital}</p>
                        </div>
                    </div>
                </div>
            </div>`
            }
    } else if (reg==="all" && search!=="none"){
            for (i of data){
                if (i.name.common==search)
                container.innerHTML += `<div class="card">
                <div class="flag">
                <img src="${i.flags.png}">
                </div>
                <div class="details">
                    <div class="name">
                        <h3>${i.name.common}</h3>
                    </div>
                    <div class="details-2">
                        <div class="fields">
                            <p class="type">Population: </p><p class="value">${i.population}</p>
                        </div>
                        <div class="fields">
                            <p class="type">Region: </p><p class="value">${i.region}</p>
                        </div>
                        <div class="fields">
                            <p class="type">Capital: </p><p class="value">${i.capital}</p>
                        </div>
                    </div>
                </div>
            </div>`
            }
    } else if (reg!="all" && search!="none"){
            for (i of data){
                if (i.region==reg && i.name.common == search)
                container.innerHTML += `<div class="card">
                <div class="flag">
                <img src="${i.flags.png}">
                </div>
                <div class="details">
                    <div class="name">
                        <h3>${i.name.common}</h3>
                    </div>
                    <div class="details-2">
                        <div class="fields">
                            <p class="type">Population: </p><p class="value">${i.population}</p>
                        </div>
                        <div class="fields">
                            <p class="type">Region: </p><p class="value">${i.region}</p>
                        </div>
                        <div class="fields">
                            <p class="type">Capital: </p><p class="value">${i.capital}</p>
                        </div>
                    </div>
                </div>
            </div>`
            }
        } 
    }catch (error){
        fetchData(para1,para2)
    }
}

fetchData()

const srch = document.getElementById("search")
search.addEventListener("keyup",function(event){
    if (event.key == "Enter"){
        console.log(srch.value)
        fetchData(document.getElementById("region").value,srch.value)
        srch.value = ""
    }
})


const toggle = document.querySelector("#toggle")
dark = false

toggle.addEventListener("click",function() {
    if (!dark){
        dark = true
        console.log(dark)
        document.querySelector("Body").setAttribute("style","background-color:#474E68;")
    } else{
        dark = false
        console.log(dark)
        document.querySelector("Body").setAttribute("style","background-color:whitesmoke;")
    }
})

const option = document.querySelector("Select")
option.addEventListener("click",function(){
    region = option.value
    fetchData(region)
})
