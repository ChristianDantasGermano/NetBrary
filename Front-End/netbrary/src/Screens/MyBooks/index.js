import React from "react";
import NavBar from "../../Components/Navbar/navbar";
import Box from "@material-ui/core/Box";
import SingleContent from "../../Components/SingleContent/SingleContent";

import "./styles.css";
import { makeStyles, Typography } from "@material-ui/core";
import MybooksData from "../../Models/MyBooks";
const useStyles = makeStyles({
  title: {
    textAlign: "center",
  },
});
const MyBooks = () => {
  const classes = useStyles();
  return (
    <Box>
      <NavBar />
      <Typography
              className={classes.title}
              variant="h2"
            >
              Meus livros
            </Typography>
      <div className="trending">
        {MybooksData &&
          MybooksData.map((c) => (
            <SingleContent
              key={c.img}
              id={c.title}
              poster={c.img}
              title={c.title}
              media_type="movie"
            />
          ))}
      </div>
    </Box>
  );
};
export default MyBooks;
