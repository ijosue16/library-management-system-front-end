import React, {useEffect, useState} from "react";
import {
    Box,
    Button,
    CircularProgress,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField,
    Typography
} from "@mui/material";
import {LoginOutlined, Visibility, VisibilityOff} from "@mui/icons-material";
import {useTeacherLoginMutation} from "../../states/apiSlice";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {useDispatch} from "react-redux";
import {setAuthToken} from "../../states/authSlice";

const TcLoginPage = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [teacher, setTeacher] = useState({registrationNumber: "", password: ""});
    let teacherId = ""
    const [TeacherLogin, {isLoading, isSuccess, isError, error}] = useTeacherLoginMutation();
    const dispatch = useDispatch();

    useEffect(() => {
        if (isSuccess) {
            toast.success("Logged in successfully");
        } else if (isError) {
            const {data: fullError} = error;
            const {message} = fullError;
            toast.error(message);
        }
    }, [isSuccess, isError, error])


    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleTeacherChange = (e) => {
        setTeacher({...teacher, [e.target.name]: e.target.value})
    };

    const handleTeacherSubmit = async (event) => {
        event.preventDefault();
        const body = {...teacher};
        const {registrationNumber, password} = teacher
        const response = await TeacherLogin({registrationNumber, password})

        if (response) {
            const {data: teacherData} = response;
            const {data: userDatata} = teacherData;
            const {user: userInfo} = userDatata;
            const {_id: tcId} = userInfo;
            teacherId=tcId;
            dispatch(setAuthToken(teacherData.token));
            navigate(`/teachers/notifications/${teacherId}`);
        }
        // console.log(teacher);
        // setTeacher({ registrationNumber: "", password: "" })

    };
    const handleTeacherDemoSubmit = async (event) => {
        event.preventDefault();
        setTeacher({registrationNumber: "20241", password: "20241"})
        const body = {...teacher};
        const {registrationNumber, password} = teacher
        const response = await TeacherLogin({registrationNumber, password})

        if (response) {
            const {data: teacherData} = response;
            const {data: userDatata} = teacherData;
            const {user: userInfo} = userDatata;
            const {_id: tcId} = userInfo;
            teacherId=tcId;
            dispatch(setAuthToken(teacherData.token));
            navigate(`/teachers/notifications/${teacherId}`);
        }
        // console.log(teacher);
        // setTeacher({ registrationNumber: "", password: "" })

    };

    return (
        <>
            <Box
                height="100%" p="10px 10px">
                <Box
                    component="form"
                    maxWidth={440}
                    minHeight={400}
                    margin="auto"
                    display="flex"
                    height="420px"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="top"
                    gap="12px"
                    p="10px 10px"
                    boxShadow={"1.5px 1.5px 10px #ccc"}
                    borderRadius="7px"
                >
                    <Typography variant="h3" sx={{textAlign: "center"}}>
                        Teacher Login
                    </Typography>
                    <TextField
                        required
                        fullWidth
                        name="registrationNumber"
                        label="Registration Number"
                        type="text"
                        id="registrationNumber"
                        variant="outlined"
                        onChange={handleTeacherChange}
                        sx={{}}
                        // error={Boolean(loginErrors.email)}
                        // helperText={loginErrors.email}
                    />

                    <FormControl
                        variant="outlined"
                        required
                        fullWidth
                        // error={Boolean(loginErrors.password)}
                        onChange={handleTeacherChange}
                        sx={{}}
                    >
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <OutlinedInput
                            id="password"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff/> : <Visibility/>}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />

                        {/* <FormHelperText id="password">{loginErrors.password}</FormHelperText> */}
                    </FormControl>
                    {isLoading ? <Button
                        variant="contained"
                        size="medium"
                        type="submit"
                        sx={{width: "100px", alignSelf: "start"}}
                        disabled
                    >
                        <CircularProgress size={20}/>
                    </Button> : <Button
                        variant="contained"
                        size="medium"
                        type="submit"
                        sx={{width: "100px", alignSelf: "start"}}
                        endIcon={<LoginOutlined/>}
                        onClick={handleTeacherSubmit}
                    >
                        Login
                    </Button>}

                    {isLoading ? <Button
                        variant="contained"
                        size="medium"
                        type="submit"
                        sx={{width: "190px", alignSelf: "start"}}
                        disabled
                    >
                        <CircularProgress size={20}/>
                    </Button> : <Button
                        variant="contained"
                        size="medium"
                        type="submit"
                        sx={{width: "190px", alignSelf: "start"}}
                        endIcon={<LoginOutlined/>}
                        onClick={handleTeacherDemoSubmit}
                    >
                        Login as demo user
                    </Button>}

                </Box>
            </Box>


        </>
    )
};

export default TcLoginPage;