//import dependencies
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'

//import pages
import Admin from './Pages/admin/admin';
import AdminSetting from './Pages/admin/admin_setting';
import LoginAdmin from './Pages/admin/loginadmin';

function App() {

  let [username, setUsername] = useState('')
  let navigate = useNavigate()

  let loginAdmin = async(inputEmail,inputPassword)=>{
    try {
        let response = await axios.post('http://localhost:8000/admin/login', {email:inputEmail,password:inputPassword})
        console.log(response)
        setUsername(response.data.data.name)
        localStorage.setItem('token', response.data.data.id)
        toast.success('Login Success!')

        setTimeout(()=>{
          toast('redirecting...')
      }, 2000)

        setTimeout(()=>{
            navigate('/admin')
        }, 3000)
    } catch (error) {
        console.log(error.response.data.message)
    }
}


  return (
    <>
      <Routes>
        <Route path='/admin' element={<Admin data={{username}} />} >
          <Route path='setting' element={<AdminSetting/>}/>
        </Route>
        <Route path='/admin-login' element={<LoginAdmin funcLogin={{loginAdmin}} />}/>
      </Routes>
      <Toaster/>
    </>
  );
}

export default App;
