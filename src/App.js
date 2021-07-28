import React from 'react';
import { Footer } from '../src/Components/Footer';
import { Header } from '../src/Components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Components/Home';
import { Login } from './Components/Login';
import { UserStorage } from './Contexts/userContext';
import { User } from './Components/User/User';
import { ProtectedRoute } from './Components/Helper/ProtectedRoute';

function App() {
  
  return (  
   <div>
     <BrowserRouter>
     <UserStorage>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login/*' element={<Login />} />
        <Route path='conta/*' element={<User />} />
      </Routes>
      <Footer />
     </UserStorage>
     </BrowserRouter>
   </div>
  );
}

export default App;