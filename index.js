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


async function consumirApiTodo() {
   // try {
   //     const datos = await fetch("https://fakestoreapi.com/products/");
   //     method:"GET";
   //     if (!datos.ok) {
   //         throw new Error(`Error en la Web API: ${datos.status}`);
   //     }
   //     const datosJson = await datos.json();
   //     console.log(datosJson); 
   // 
   // } catch (error) {
   //     console.error("Hubo un problema al consumir:", error);
   // } 
   
        const datos = await fetch("https://fakestoreapi.com/products/");
        method:"GET";
        const datosJson = await datos.json();
        console.log(datosJson); 
    
   




}

async function consumirApi() {
    try {
        const datos = await fetch("https://fakestoreapi.com/products/7");
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




async function crearProducto() {
    const response= await fetch("https://fakestoreapi.com/products",{
        method: "POST",
        headers:{"Content-Type": "aplication/json" },
        body: JSON.stringify(product),
        })
        return data
    const jresponse=await response.json();
    const {id, title,price}=jresponse
    console.log(jresponsedata); 
}


async function borrarProducto() {
    const response=await fetch("https://fakestoreapi.com/products/7",{
        method: "DELETE",
       });
    const data=await response.json();
    console.log(data);  
}

//*******************************************************************
//
//                 Inicio hilo principal
//
//*******************************************************************






if  (method==="GET") {
    console.log("pide get  ********")
    consumirApiTodo();
} else if(method==="GET") {
    console.log("pide get  ********")
    consumirApi();
} else if (method==="POST") {
    console.log("pide POST   *********")
    const product={title:"Remera negra", price:29.99};
    crearProducto();
} else if (method==="DELETE") {
    console.log("pide DELETE  ********")
    borrarProducto();
};
