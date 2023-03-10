//finally i put these codes
import {useContext} from "react";
import {ContactContext} from "../context/contactContext";
///

import { useLocation} from 'react-router-dom';

import SearchContact from "./Contacts/SearchContact";
// import '../index.css';
//in episode 118
import Colorfull from "../hoc/Colorfull";

import {Purple} from '../helpers/colors';

const Navbar = ( ) =>{

    // const {contactQuery , contactSearch} = useContext(ContactContext);

    const location = useLocation();
    return(
     <nav className="navbar navbar-dark navbar-expand-sm shadow-lg"
          // style={{backgroundColor:Background}}
     >
         <div className="container">
             <div className="row w-100">
                 <div className="col">
                     <div className="navbar-brand">
                         <i className="fa fa-id-badge" style={{color: Purple}} />{" "}وب اپلیکیشن مدیریت{ "  "}
                         <span style={{color: Purple}}>مخاطبین</span>
                     </div>
                 </div>
                 {
                     location.pathname === "/contacts" ? (
                         <div className="col">
                             <SearchContact    />
                         </div>
                     ) : null
                 }
             </div>
         </div>
     </nav>
    );
}
export default Colorfull(Navbar);