import { Box, CssBaseline } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import {
  Actors,
  MovieInformation,
  Movies,
  NavBar,
  Profile,
} from "./components";
const App = () => {
  return (
    <Box sx={{ display: "flex", height: "100%" }}>
      <CssBaseline />
      <NavBar />
      <Box component="main" sx={{ flexGrow: 1, padding: "2em" }}>
        <Box sx={{ height: "70px" }} />
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/movie/:id" element={<MovieInformation />} />
          <Route path="/actors/:id" element={<Actors />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default App;
