import { Listas } from "./app/listas";
import { ModalCreate } from "./app/modalCreate";
import { ModalUpdate } from "./app/modalUpdate";

export function App() {
  return (
    <div>
      <Listas/>
      <ModalCreate/>
      <ModalUpdate/>
    </div>
  )
}

