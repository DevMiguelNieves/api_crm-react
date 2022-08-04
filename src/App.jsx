import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Layout from './layout/Layout'

import Inicio from './paginas/Inicio'
import NuevoCliente from './paginas/NuevoCliente'
import EditarCliente from './paginas/EditarCliente'
import VerCliente from './paginas/VerCliente'

function App() {

  return (
   <BrowserRouter>
    <Routes>
      <Route path='/clientes' element={<Layout></Layout>}>
        <Route index element={<Inicio></Inicio>}/>
        <Route path='nuevo' element={<NuevoCliente></NuevoCliente>}/>
        <Route path='editar/:id' element={<EditarCliente></EditarCliente>}/>
        <Route path=':id' element={<VerCliente></VerCliente>}/>
      </Route>

    </Routes>
   </BrowserRouter>
  )
}

export default App