import { useEffect, useState } from "react"

export function Listas() {
    console.log("hola")
    const [data, setData] = useState([]);

    useEffect(() => {
         
        fetch('http://localhost/apiLaravel%20jimena/public/api/mibase')
        .then(res=>res.json())
        .then(datas=>setData(datas)
        )

    }, [])

    const openEditar=()=>{

    }

    const openCreate=()=>{

    }



    return(
        <div>
            <button onClick={openEditar}>Crear</button>
            {
                
                data.map(record=>{
                return (
                <div key={record.id}>
                <p>{record.id}</p>    
                <p>{record.nombre}</p>
                <p>{record.descripcion}</p>
                <img src={record.imagen}></img>
                <button onClick={openCreate}>editar</button>
                </div>
                )
                })

           }   
        </div>
    )
  
}
