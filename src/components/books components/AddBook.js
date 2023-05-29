import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
  Button,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const AddBook = () => {
  const [book, setBook] = useState({
    bookName: "",
    author: "",
    edition: "",
    numberOfBooks: "",
    academicLevel: "",
    categoryName: "",
    language: "",
  });

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(book);
    // setBook({bookName:"",author:"",edition:"",numberOfBooks:"",academicLevel:"",category:"",language:""});
  };
  const levels = ["S1", "S2", "S3", "S4", "S5", "S6", "AllEvels"];
  const languages = ["English", "French", "Kinyarwanda", "Swahili", "Other"];

  const categories=["Mathematics","Physics","Chemistry","Biology","Computer Science","Geography","Economics","Entrepreneurship","History",
  "Kinyarwanda","Kiswahili","English", "Literature","French","Novel","Others"];
  return (
    <Box component="form" sx={{ p: 4.5 }}>
      <Grid2 container spacing={2}>
        <Grid2
          xs={12}
          container
          display="flex"
          justifyContent="start"
          alignItems="center"
        >
          <Grid2 xs={12} md={2}>
            <Typography variant="p">Book Name</Typography>
          </Grid2>
          <Grid2 xs={12} md={10}>
            <TextField
              label="Book"
              sx={{ width: "80%" }}
              name="bookName"
              id="bookName"
              type="text"
              variant="outlined"
              value={book.bookName}
              onChange={handleChange}
            />
          </Grid2>

          <Grid2 xs={12} md={2}>
            <Typography variant="p">Author</Typography>
          </Grid2>
          <Grid2 xs={12} md={10}>
            <TextField
              label="Author"
              sx={{ width: "80%" }}
              name="author"
              id="author"
              type="text"
              variant="outlined"
              value={book.author}
              onChange={handleChange}
            />
          </Grid2>

          <Grid2 xs={12} md={2}>
            <Typography variant="p">Edition</Typography>
          </Grid2>
          <Grid2 xs={12} md={10}>
            <TextField
              label="Edition"
              sx={{ width: "80%" }}
              name="edition"
              id="edition"
              type="text"
              variant="outlined"
              value={book.edition}
              onChange={handleChange}
            />
          </Grid2>

          <Grid2 xs={12} md={2}>
            <Typography variant="p">Number of books</Typography>
          </Grid2>
          <Grid2 xs={12} md={10}>
            <TextField
              label="Number of books"
              sx={{ width: "80%" }}
              name="numberOfBooks"
              id="numberOfBooks"
              type="number"
              variant="outlined"
              value={book.numberOfBooks}
              onChange={handleChange}
            />
          </Grid2>

          <Grid2 xs={12} md={2}>
            <Typography variant="p">Academic Level</Typography>
          </Grid2>
          <Grid2 xs={12} md={10}>
            <FormControl variant="outlined" sx={{ width: "80%" }}>
              <InputLabel id="academicLevel">Academic Level </InputLabel>
              <Select
                required
                name="academicLevel"
                labelId="cacademicLevel"
                id="academicLevel"
                label="Academic Level"
                value={book.academicLevel}
                onChange={handleChange}
              >
                <MenuItem value="S1">S1</MenuItem>
                <MenuItem value="S2">S2</MenuItem>
                <MenuItem value="S3">S3</MenuItem>
                <MenuItem value="S4">S4</MenuItem>
                <MenuItem value="S5">S5</MenuItem>
                <MenuItem value="S6">S6</MenuItem>
                <MenuItem value="Others">Others</MenuItem>
              </Select>
            </FormControl>
          </Grid2>

          <Grid2 xs={12} md={2}>
            <Typography variant="p">Category</Typography>
          </Grid2>
          <Grid2 xs={12} md={10}>
            <FormControl variant="outlined" sx={{ width: "80%" }}>
              <InputLabel id="categoryName">Book Category</InputLabel>
              <Select
                required
                name="categoryName"
                labelId="categoryName"
                id="categoryName"
                label="Book Category"
                value={book.categoryName}
                onChange={handleChange}
                // onChange={handleChange}
              >
               {categories.map((categoriez) => (
                <MenuItem key={categoriez} value={categoriez}>
                  {categoriez}
                </MenuItem>
              ))}
              </Select>
            </FormControl>
          </Grid2>
          <Grid2 xs={12} md={2}>
            <Typography variant="p">Language</Typography>
          </Grid2>
          <Grid2 xs={12} md={10}>
            <FormControl variant="outlined" sx={{ width: "80%" }}>
              <InputLabel id="Language">Language</InputLabel>
              <Select
                required
                name="language"
                labelId="language"
                id="language"
                label="Language"
                value={book.language}
                onChange={handleChange}
                // onChange={handleChange}
              >
              {languages.map((lang) => (
                <MenuItem key={lang} value={lang}>
                  {lang}
                </MenuItem>
              ))}
              </Select>
            </FormControl>
          </Grid2>

          <Grid2 container gap={2} display="flex">
            <Button variant="contained" type="submit" onClick={handleSubmit}>
              Add book
            </Button>
            <Button variant="contained" type="button">
              cancel
            </Button>
          </Grid2>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default AddBook;