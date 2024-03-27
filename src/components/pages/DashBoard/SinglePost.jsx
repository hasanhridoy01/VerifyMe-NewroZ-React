import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const SinglePost = () => {
  const [singlePost, setSinglePost] = React.useState({});
  const { postId } = useParams();
  console.log(postId);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => res.json())
      .then((post) => setSinglePost(post));
  });
  return (
    <div>
      <Container>
        <Grid Container alignItem="center" justifyContent="center" mt={5}>
          <Grid width="40%" sx={{margin: 'auto', marginTop: '100px'}} item lg={4} md={6} sm={12} xs={12}>
            <Card alignItem="center" justifyContent="center" sx={{margin: 'auto'}}>
              <CardContent>
                <Typography variant="h3" gutterBottom>{singlePost.id}</Typography>
                <Typography variant="h5" gutterBottom>{singlePost.title}</Typography>
                <Typography variant="h6" gutterBottom>{singlePost.body}</Typography>
                <Link to='/dashboard'><Button size="large" variant="contained" sx={{marginTop: '7px', backgroundColor: '#00a1a1'}}>Back To DashBoard</Button></Link>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default SinglePost;
