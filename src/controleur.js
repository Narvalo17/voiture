class ControleurCar{
    
    loadContent = async () =>{
    
    console.log("loaded")
   
    const results =await fetch("./api/app.json",{
        cache: 'no-cache'
    })
    let el = document.querySelector("section ul");
    console.log(el)
   
        const data = await results.json()
        console.table(data)
        
        for(let index of data){
            console.log(index.marque+' '+index.model+' '+index.annéprod+' '+index.film+' ')
            el.innerHTML+=`<li>${index.marque} </li>
                        <li> ${index.model} </li>
                        <li> ${index.annéprod}</li> 
                        <li> ${index.film}</li>
                        <li><img src ="${index.image}" alt="${index.marque}"></li>
                         `
                        
            

        }

    }
}
 export const newControleurCar = new ControleurCar()