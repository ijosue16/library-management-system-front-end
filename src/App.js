import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./components/theme";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Dashboard from "./components/Dashboard";
import Layout from "./layout/Layout";
// import FileUploadStudents from "./components/FileUploadStudents";
// import GenerateClassReport from "./components/GenerateClassReport";
import GenerateStudentReport from "./components/GenerateStudentReport";

// import AddForm from './components/AddForm';
import LoginPage from "./components/userAuthentication/LoginPage";
import PasswordRecoverPage from "./components/userAuthentication/PasswordRecoverPage";
import SignUpPage from "./components/userAuthentication/SignupPage";
import StudentsRentalsPage from "./Pages/StudentsRentalsPage";
import ClassListPage from "./Pages/ClassListPage";
// import Tests from "./components/Tests";
import EditStudentPage from "./Pages/EditStudentPage";
import ClassNamesPage from "./Pages/ClassNamesPage";
// import ClassList from "./components/students tables components/ClassListComponent";
// import StudentsRentalsComponent from "./components/students tables components/StudentsRentalsComponent";
import EditRentalPage from "./Pages/EditRentalPage";
import FileUploadStudents from "./components/FileUploadStudents";
import CustomButtuonUpload from "./components/CustomButtuonUpload";
import TeacherListPage from "./Pages/TeachersListPage";
import EditTeacherPage from "./Pages/EditTeacherPage";
import TeachersRentalsPage from "./Pages/TeachersRentalPage";
import AddBook from "./components/books components/AddBook";
import BooksPage from "./components/books components/BooksPage";
import AddBookRentalPage from "./components/books components/AddBookRentalPage";
function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="App">
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Routes>
              <Route element={<Layout />}>
                <Route
                  path="/"
                  element={<Navigate to="/dashboard" replace />}
                />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route
                  path="/passwordrecover"
                  element={<PasswordRecoverPage />}
                />
                {/* <Route path="/classes" element={<ClassListPage />} /> */}
                <Route path="/classes" element={<ClassNamesPage />} />
                <Route path="/students/:classId" element={<ClassListPage />} />
                <Route path="/transactions" element={<LoginPage />} />
                <Route path="/rentals/:studentId" element={<StudentsRentalsPage/>} />
                <Route path="/overview" element={<SignUpPage />} />
                <Route path="/edit/student/:studentId" element={<EditStudentPage />} />
                <Route path="/edit/rental/:rentalId" element={<EditRentalPage />} />
                {/* TEST OF RTK QUERY DATAS IN THE TEST FILE */}
                <Route path="/history" element={<CustomButtuonUpload />} />
                <Route path="/teachers/:teacherId" element={<EditTeacherPage />} />
                <Route path="/teachers/teachers-rentals/:teacherId" element={<TeachersRentalsPage />} />
                <Route path="/daily" element={<TeacherListPage/>} />
                <Route path='/breakdown' element={<GenerateStudentReport/>}/>
                <Route path='/book' element={<AddBook/>}/>
                <Route path='/bookspage' element={<BooksPage/>}/>
                <Route path='/addbookrental' element={<AddBookRentalPage/>}/>
              </Route>
            </Routes>
          </ThemeProvider>
        </BrowserRouter>
      </div>
    </LocalizationProvider>
  );
}

export default App;
