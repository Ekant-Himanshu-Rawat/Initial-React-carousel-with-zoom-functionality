import React from "react";
import Grid from "@mui/material/Grid";
import ImageCarouselZoom from "./components/ImageCarouselZoom";
import { Container } from "@mui/material";
export default function App() {
  const imagesData = [
    "https://placeimg.com/640/480/any/1",
    "https://placeimg.com/640/480/any/2",
    "https://placeimg.com/640/480/any/3"
  ]
        
    return (
      <Container maxWidth='lg' sx={{mt:9}}>
        <Grid container spacing={4}>
          <Grid item xs={3}>
              <ImageCarouselZoom data={imagesData}/>
          </Grid> 
        </Grid>
      </Container>
    ); 
}