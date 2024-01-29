import { useEffect } from "react"
import { useSelector,useDispatch } from "react-redux";
import { setData } from "../reducers/data/dataSlice.jsx";
import { setCampos } from "../reducers/campos/camposSlice.jsx";
import { setModalCreate, setModalUpdate } from "../reducers/modal/modalSlice.jsx";


import { Button } from "reactstrap";

export function Listas() {

  
  const data=useSelector(state=>state.data)
  const campos=useSelector(state=>state.campos)
  const dispatch= useDispatch();

    useEffect(() => {
         
        fetch('http://localhost/apiLaravel%20jimena/public/api/mibase')
        .then(res=>res.json())
        .then(datas=>dispatch(setData(datas)))

    }, [])

    const openModalEdit=(record)=>{
        dispatch(setCampos({ ...record, imagen:`http://localhost/apiLaravel%20jimena/public/${record.imagen}`}))
        dispatch(setModalUpdate(true))
    }

    const openModalCreate=()=>{
    dispatch(setModalCreate(true))
    dispatch(setCampos({campos, imagen:"3342177.png"}))

    }

    const deleteRecord=(record)=>{
  
        fetch(`http://localhost/apiLaravel%20jimena/public/api/mibase/${record.id}`,{
          method:'DELETE',
          body:{},
          headers:{'Content-Type': 'application/json'}
    
          }).then(a=>a.json()).then(n=>dispatch(setData(n)));
    }



    return(
        <div>
            
            <Button color="primary" onClick={e=>openModalCreate()}>Crear</Button>
            {
                
                data.map(record=>{
                return (
                <div key={record.id}>
                <p>{record.id}</p>    
                <p>{record.nombre}</p>
                <p>{record.descripcion}</p>
                <img src={`http://localhost/apiLaravel%20jimena/public/${record.imagen}`}></img>
                <Button color="primary" onClick={e=>openModalEdit(record)}>Edit</Button>
                <Button color="danger" onClick={e=>deleteRecord(record)}>Delete</Button>
                </div>
                )
                })

           }   
        </div>
    )
  
}
