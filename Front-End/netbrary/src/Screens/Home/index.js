import React from "react";
import NavBar from "../../Components/Navbar/navbar";
import Box from "@material-ui/core/Box";

import itemData from "../../Models/BooksData";
import SingleContent from "../../Components/SingleContent/SingleContent";

import "./styles.css";

const Home = () => {
  return (
    <Box>
      <NavBar />
      <div className="trending">
        {itemData &&
          itemData.map((c) => (
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
export default Home;
