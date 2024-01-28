import { useEffect, useState } from "react"
import {useSelector,useDispatch } from "react-redux";
import { setData } from "../reducers/data/dataSlice.jsx";


export function Listas() {

    const data=useSelector(state=>state.data);
    const dispatch = useDispatch()
    // console.log("hola")

    // const [data, setData] = useState([]);

    useEffect(() => {
         
        fetch('http://localhost/apiLaravel%20jimena/public/api/mibase')
        .then(res=>res.json())
        .then(datas=>
            // setData(datas)
            {
                console.log(datas)
                dispatch(setData(datas))
            }
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
