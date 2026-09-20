import './App.css'
import Home from './pages/Home'
import { Routes,Route } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Features from './ui/Features'
import HowItWorks from './ui/HowItWorks'
import About from './ui/About'
import Header from './ui/Header'
import Footer from './ui/Footer'
import DashboardLayout from './components/layout/DashboardLayout'
import Inventory from './components/dashboard/Inventory'
import DetectLogs from './components/dashboard/DetectLogs'
import Orders from './components/dashboard/Orders'
import Transactions from './components/dashboard/Transactions'
import Users from './components/dashboard/Users'
import Products from "./components/dashboard/Products";
import Sidebar from './components/layout/Sidebar'
import LiveCheckout from './pages/LiveCheckout'
import CheckoutConfirmation from './pages/CheckoutConfirmation..jsx'
function App() {

  return (
<Routes>
  <Route path="/" element={
    <> <Header/>
      <Home />
      <HowItWorks/> 
      <Features/>
      <About/> 
     <Footer/></>
    } />
  <Route path="/login" element={<> <Header/> <Login/></>} />
  <Route path="/signup" element={<> <Header/> <Signup/></>} />
  <Route path="/howitworks" element={ <><Header/> <HowItWorks/>  <Footer/></>} />
  <Route path="/features" element={<>  <Header/> <Features/>  <Footer/></>} />
  <Route path="/about" element={ <><Header/> <About/>  <Footer/></>} />
  <Route path='/dashboard' element={<>
  <DashboardLayout>
  </DashboardLayout>
  </>}> </Route>
  <Route path='inventory' element={
    <>
     <div className="min-h-screen bg-slate-50 flex">
      <Sidebar />
      
        <main className="flex-1 p-6">
        <Inventory/>
        </main>
    </div>
    </>}/>
  <Route path='/detect-logs' element={
    <>
    <div className="min-h-screen bg-slate-50 flex">
      <Sidebar />
      
        <main className="flex-1 p-6">
         <DetectLogs/>
        </main>
    </div>
    </>
  }/>
  <Route path='/orders' element={
    <>
     <div className="min-h-screen bg-slate-50 flex">
      <Sidebar />
      
        <main className="flex-1 p-6">
          <Orders/>
        </main>
    </div>
    </>
    }/>
  <Route path='/products' element={
    <>
    <div className="min-h-screen bg-slate-50 flex">
      <Sidebar />

        <main className="flex-1 p-6">
          <Products/>
        </main>
    </div>
    </>
    
    }/>
  <Route path='/users' element={
    <>
     <div className="min-h-screen bg-slate-50 flex">
      <Sidebar />
      
        <main className="flex-1 p-6">
         <Users/>
        </main>
    </div>
    </>
  }/>
  <Route path='/transactions' element={
    <>
    <div className="min-h-screen bg-slate-50 flex">
      <Sidebar />
      
        <main className="flex-1 p-6">
          <Transactions/>
        </main>
    </div>
    </>
    }/>
    <Route path='/live-checkout' element={
    <>
    <div className="min-h-screen bg-slate-50 flex">
      <Sidebar />
        <main className="flex-1 p-6">
         <LiveCheckout/>
        </main>
    </div>
    </>
    }/>

     <Route path='/final-checkout' element={
    <>
    <div className="min-h-screen bg-slate-50 flex">
      <Sidebar />
        <main className="flex-1 p-6">
         <CheckoutConfirmation/>
        </main>
    </div>
    </>
    }/>
</Routes>
  )
}

export default App


