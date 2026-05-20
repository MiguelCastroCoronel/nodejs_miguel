console.log("*******************************************************************")
console.log(" ")
console.log("                   Pre-Entrega ")
console.log(" ")
console.log("*******************************************************************")


//*******************************************************************
//
//                 Obtención de argumentos
//
//*******************************************************************



console.log(process.argv)

const method=process.argv[2];  //
const endpoint=process.argv[3]  //

console.log(`Method: ${method}`);
console.log(`Endpoint: ${endpoint}`);

//*******************************************************************
//
//                 Declaración funciones async
//
//*******************************************************************


async function consumirApi() {
    try {
        const datos = await fetch("https://fakestoreapi.com/products/"+endpoint.at(-1));
        method:"GET";
        if (!datos.ok) {
            throw new Error(`Error en la Web API: ${datos.status}`);
        }
        const datosJson = await datos.json();
        console.log(datosJson); 
    
    } catch (error) {
        console.error("Hubo un problema al consumir:", error);
    } 
}


async function crearProducto(art) {
    
    const response=await fetch("https://fakestoreapi.com/products",{
        method: "POST",
        headers:{"Content-Type": "aplication/json" },
        body: JSON.stringify(),
        });
        
    const data=await response.json();

    console.log(data)  // error: incrementa en id 21, pero no toma title ni price  :(
}


async function borrarProducto() {
    const response=await fetch("https://fakestoreapi.com/products/"+endpoint.at(-1),{
        method: "DELETE",
       },);
    const data=await response.json();
    console.log(data) ;  
}

//*******************************************************************
//
//                 Inicio hilo principal
//
//*******************************************************************


if (method==="GET") {
    console.log("pide get")
    consumirApi();
} else if (method==="POST") {
    console.log("pide POST")
    const art={title:"Nuevo Artículo", price:29.99};
    crearProducto(art);
} else if (method==="DELETE") {
    console.log("pide DELETE")
    borrarProducto();
};

