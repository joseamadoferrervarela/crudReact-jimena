import {useSelector, useDispatch } from "react-redux";
import {setModalUpdate} from "../reducers/modal/modalSlice";
import {Button,Modal,ModalBody,ModalHeader,FormGroup,ModalFooter} from "reactstrap";
import {setCampos} from "../reducers/campos/camposSlice";
import "./modalCreate.css";


export function ModalUpdate() {

  const modal=useSelector(state=>state.modal)
  const campos=useSelector(state=>state.campos)
  const dispatch= useDispatch();
 
  
 
 const closeModalUpdate=()=>{
    dispatch(setModalUpdate(false))
    }

 const editarcampos=(e)=>{
  switch (e.target.name) {
    case "nombre":
      dispatch(setCampos({ ...campos, nombre: e.target.value }))
      
   
      break;

    case "descripcion":
      dispatch(setCampos({ ...campos, descripcion: e.target.value }))
      
      break;

    case "imagen":
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.addEventListener("load", (direct) => {
console.log(direct)
dispatch(setCampos({ ...campos, imagen: direct.currentTarget.result}))
        
        
      });
      break;
  }
 }

 
    return (
      
        <Modal isOpen={modal.modalUpdate}>
        <ModalHeader></ModalHeader>
        <form action={`http://localhost/apiLaravel%20jimena/public/api/mibase/edit/${campos.id}`} method="POST" encType="multipart/form-data">
        <ModalBody>
          <FormGroup>
            <label>imagen:</label>
            <input
              type="file"
              className="form-control"
              name="imagen"
              
              onChange={e=>editarcampos(e)}
              
              
            />

            <img className="formCreate" src={campos.imagen} />
          </FormGroup>

          <FormGroup>
            <label>id:</label>
            <input
              type="text"
              className="form-control"
              readOnly
              value={campos.id}
            />
          </FormGroup>

          <FormGroup>
            <label>nombre:</label>
            <input
              type="text"
              className="form-control"
              name="nombre"
              maxLength="50"
              onChange={(e) => editarcampos(e)}
              value={campos.nombre}
            />
          </FormGroup>

          <FormGroup>
            <label>descripcion:</label>
            <input
              type="text"
              className="form-control"
              name="descripcion"
              maxLength="500"
              onChange={(e) => editarcampos(e)}
              value={campos.descripcion}
            />
          </FormGroup>
        </ModalBody>
        
        <ModalFooter>
          <Button type="submit" color="primary">
            insertar
          </Button>
          <Button onClick={(e) => closeModalUpdate()} color="danger">
            cancelar
          </Button>
        </ModalFooter>
        </form>
      </Modal>
      
    )
  }