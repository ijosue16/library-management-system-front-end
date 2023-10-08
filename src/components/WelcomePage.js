import { Box, Button, Typography, useTheme } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const WelcomePage = () => {
    const token = useSelector(state => state.auth.token);
    const navigate=useNavigate();
    if(token){
        navigate('/dashboard');
    }
    const theme = useTheme();

    return (

<>
        <div className="m-0 welcome">
            <div className="d-block d-md-flex  flex-element">
                <div className=" d-flex flex-column flex-1 justify-content-center align-items-center gap-2 p-3 element1">
                    <div className="word-container ">
                    <h2 className="m-0 text-center">Welcome to the library management system</h2>
                    <p className="m-0 text-center explaination">A system helping in easy data storage and book tracking</p>
                    </div>
                </div>
                <div className="d-flex flex-column flex-1 justify-content-start align-items-center gap-2 p-3 pt-1  element2">
                    <h3 className=" m-0 text-center">Sign in as:</h3>
                    <p className=" m-0 pb-5 text-center">Sign based on your status</p>
                    <div className=" d-flex flex-column justify-content-center align-items-center gap-5 align-self-bottom link-container">
                    <Link className="p-2 link-words " to="/login" >Admin/Librarian </Link>
                    <Link className="p-2 link-words " to="/teacherslogin" >Teacher</Link>
                    <Link className="p-2 link-words " to="/studentslogin" >Student</Link>
                    <p className="m-0 text-center">Checkout REB/NESA Resources </p>
                    <div className="d-flex justify-content-center align-items-center gap-5 align-self-bottom link-container">
                    <a className="p-2 link-words " href="https://elearning.reb.rw/course/index.php?categoryid=13" target="_blank" rel="noopener noreferrer">O-level Books</a>
                    <a className="p-2 link-words " href="https://elearning.reb.rw/course/index.php?categoryid=32" target="_blank" rel="noopener noreferrer">A-level Books</a>
                    <a className="p-2 link-words " href="https://www.nesa.gov.rw/1/resources?tx_filelist_filelist%5Baction%5D=list&tx_filelist_filelist%5Bcontroller%5D=File&tx_filelist_filelist%5Bpath%5D=%2Fuser_upload%2FNESA%2FRessources%2FPast_Papers%2F&cHash=3f2af0fbf49ea29ad0efc62cedc1c400" target="_blank" rel="noopener noreferrer">National exams</a>
                    </div>
                    

                    </div>
                </div>
            </div>
        </div>
</>

    )

}
export default WelcomePage;