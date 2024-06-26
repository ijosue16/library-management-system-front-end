import {Box, CssBaseline, ThemeProvider} from "@mui/material";
import {createTheme} from "@mui/material/styles";
import {themeSettings} from "./components/theme";
import {useSelector} from "react-redux";
import {useMemo} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import RoleBasedRoute from "./RoleRoute";
import Layout from "./layout/Layout";
import Notification from "./components/Notification";
import Settings from "./components/Settings";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import LoginPage from "./components/userAuthentication/LoginPage";
import StudentsRentalsPage from "./Pages/StudentsRentalsPage";
import ClassListPage from "./Pages/ClassListPage";
import EditStudentPage from "./Pages/EditStudentPage";
import ClassNamesPage from "./Pages/ClassNamesPage";
import EditRentalPage from "./Pages/EditRentalPage";
import TeacherListPage from "./Pages/TeachersListPage";
import EditTeacherPage from "./Pages/EditTeacherPage";
import TeachersRentalsPage from "./Pages/TeachersRentalPage";
import AddBook from "./components/books components/AddBook";
import BooksPage from "./components/books components/BooksPage";
import AddStudentBookRentalPage from "./components/books components/AddStudentBookRentalPage";
import BooksList from "./components/books components/BooksList";
import LostBooks from "./components/books components/LostBooks";
import EditBookPage from "./components/books components/EditBookPage";
import EditTeacherRentalPage from "./Pages/EditTeacherRental";
import AddTeacherBookRentalPage from "./components/books components/AddTeacherBookRentalPage";
import RequireAuth from "./components/userAuthentication/RequireAuth";
import ManageLibrarians from "./components/userAuthentication/ManageLibrarians";
import AllRentals from "./components/AllRentals";
import ManagePermissions from "./components/dashboard/ManagePermissions";
import UnavailablePage from "./components/UnavailablePage";
import DashboardTwo from "./components/DashboardTwo";
import StudentsInteraction from "./students interaction/StudentsInteraction";
import StLoginPage from "./students interaction/StLoginPage";
import StudentsNotification from "./students interaction/StudentsNotification";
import './index.css';
import TcLoginPage from "./components/teachers interaction/TcLoginPage";
import TeachersInteraction from "./components/teachers interaction/TeachersInteraction";
import TeachersNotification from "./components/teachers interaction/TeachersNotification";
import WelcomePage from "./components/WelcomePage";

function App() {
    const mode = useSelector((state) => state.global.mode);
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box sx={{height: "100%"}}>
                <BrowserRouter>
                    <ThemeProvider theme={theme}>
                        <CssBaseline/>
                        <ToastContainer
                            pauseOnHover
                            autoClose={3000}
                        />
                        <Routes>
                            <Route path="/" element={<WelcomePage/>}/>
                            <Route path="/teacherslogin" element={<TcLoginPage/>}/>
                            <Route path="/studentslogin" element={<StLoginPage/>}/>
                            <Route path="/login" element={<LoginPage/>}/>
                            <Route path="/unauthorized" element={<UnavailablePage/>}/>
                            <Route element={<RequireAuth/>}>
                                <Route path="/students/newnotifications/:studentId"
                                       element={<StudentsNotification/>}/>
                                <Route path="/students/notifications/:studentId" element={<StudentsInteraction/>}/>
                                <Route path="/teachers/notifications/:teacherId" element={<TeachersInteraction/>}/>
                                <Route path="/teachers/newnotifications/:teacherId"
                                       element={<TeachersNotification/>}/>
                            </Route>
                            <Route element={<Layout/>}>
                                <Route element={<RequireAuth/>}>
                                    <Route path="/dashboard" element={<DashboardTwo/>}/>
                                    <Route path="/classes" element={<ClassNamesPage/>}/>
                                    <Route path="/students/:classId" element={<ClassListPage/>}/>
                                    <Route path="/rentals/:studentId" element={<StudentsRentalsPage/>}/>
                                    <Route path="/edit/student/:studentId" element={<EditStudentPage/>}/>
                                    <Route path="/edit/rental/:rentalId" element={<EditRentalPage/>}/>
                                    <Route path="/teachers/:teacherId" element={<EditTeacherPage/>}/>
                                    <Route path="/teachers/teachers-rentals/:teacherId"
                                           element={<TeachersRentalsPage/>}/>
                                    <Route path="/edit/teachers-rental/:rentalId" element={<EditTeacherRentalPage/>}/>
                                    <Route path="/teachers" element={<TeacherListPage/>}/>
                                    <Route path='/book' element={<AddBook/>}/>
                                    <Route path='/edit-book/:bookId' element={<EditBookPage/>}/>
                                    <Route path='/bookspage' element={<BooksPage/>}/>
                                    <Route path='/add/student-rental/:studentId' element={<AddStudentBookRentalPage/>}/>
                                    <Route path='/add/teacher-rental/:teacherId' element={<AddTeacherBookRentalPage/>}/>
                                    <Route path="/books" element={<BooksList/>}/>
                                    <Route path="/lost-books" element={<LostBooks/>}/>
                                    <Route path="/issued-books" element={<AllRentals/>}/>
                                    <Route path="/notification" element={<Notification/>}/>
                                    <Route path="/settings"
                                           element={<RoleBasedRoute element={<Settings/>} roles={["admin"]}/>}/>
                                    <Route path="/admin"
                                           element={<RoleBasedRoute element={<ManageLibrarians/>} roles={["admin"]}/>}/>
                                    <Route path="/permissions/:name/:librarianId" element={<ManagePermissions/>}/>
                                </Route>
                            </Route>
                            <Route path="*" element={<UnavailablePage/>}/>
                        </Routes>
                    </ThemeProvider>
                </BrowserRouter>
            </Box>
        </LocalizationProvider>
    );
}

export default App;
