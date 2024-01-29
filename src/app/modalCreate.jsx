import {Button,Modal,ModalBody,ModalHeader,FormGroup,ModalFooter} from "reactstrap";
import {useSelector,useDispatch } from "react-redux";
import {setModalCreate} from "../reducers/modal/modalSlice";
import { setCampos } from "../reducers/campos/camposSlice.jsx";
import "./modalCreate.css";

export function ModalCreate() {
  const modal=useSelector(state=>state.modal)
  const campos=useSelector(state=>state.campos)
  const dispatch= useDispatch();
  
  
  const closeModalCreate=()=>{
  dispatch(setModalCreate(false))
  }

  const actualizarImagen=(e)=>{
    
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.addEventListener("load", (direct) => {
    dispatch(setCampos({ ...campos, imagen: direct.currentTarget.result}))
  })
    
  }
  
     return (
      <div>
        
        <Modal isOpen={modal.modalCreate}>
           <form  action="http://localhost/apiLaravel%20jimena/public/api/mibase" encType="multipart/form-data" method="POST">
           <ModalHeader></ModalHeader>
        <ModalBody>

         
          <FormGroup>
            <label>imagen:</label>
            <input
              type="file"
              className="form-control"
              name="imagen"
              onChange={e=>actualizarImagen(e)}
            />
          </FormGroup>
          <img className="formCreate" src={campos.imagen}/>

          <FormGroup>
            <label>nombre:</label>
            <input
              type="text"
              className="form-control"
              name="nombre"
              maxLength="50"
            />
          </FormGroup>
          <FormGroup>
            <label>descripcion:</label>
            <input
              type="text"
              className="form-control"
              name="descripcion"
              maxLength="500"
            />
          </FormGroup>
          
        </ModalBody>

        <ModalFooter>
          <Button type="submit" color="primary"  >
            save
          </Button>
        
          <Button onClick={e=>closeModalCreate()} color="danger">
            close
          </Button>
        </ModalFooter>
        </form>
      </Modal>
      </div>
    )
  }

  