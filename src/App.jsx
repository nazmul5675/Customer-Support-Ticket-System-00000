import './App.css'
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import IssuesManagement from "./Components/IssuesManagementv/IssuesManagement";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ticketsFetch = fetch('data.json')
  .then(res => res.json())


function App() {


  const notify = (text) => toast(text);


  const ticketsPromise = ticketsFetch;

  return (
    <div className="bg-slate-100">
      <Navbar></Navbar>

      <IssuesManagement ticketsPromise={ticketsPromise} notify={notify}></IssuesManagement>


      <Footer></Footer>
      <ToastContainer />

    </div>
  )
}

export default App
