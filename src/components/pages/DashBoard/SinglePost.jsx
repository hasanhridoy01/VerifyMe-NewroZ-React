import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import { Divider, Grid } from "@mui/material";

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
  const [singleComment, setSingleComment] = React.useState({});
  const { postId } = useParams();
  console.log(postId);

  const SinglePost = useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${postId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch post");
        }
        const post = await response.json();
        setSinglePost(post);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchPost();
  }, [postId]);

  const SingleComment = useEffect(() => {
    const fetchComment = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch post");
        }
        const comment = await response.json();
        setSingleComment(comment);
        console.log(singleComment);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchComment();
  }, []);

  return (
    <div>
      <Container>
        <Grid Container alignItem="center" justifyContent="center" mt={5}>
          <Grid
            width="50%"
            sx={{ margin: "auto", marginTop: "60px" }}
            item
            lg={6}
            md={6}
            sm={12}
            xs={12}
          >
            <Card
              alignItem="center"
              justifyContent="center"
              sx={{ margin: "auto" }}
            >
              <CardContent>
                <img
                  style={{ height: "400px", width: "100%" }}
                  src="../../../../public/images/pexels-tom-fisk-2213443.jpg"
                  alt=""
                />
                <Divider>
                  <Typography variant="h4" gutterBottom>
                    {singlePost.id}
                  </Typography>
                </Divider>
                <Typography variant="h6" gutterBottom>
                  {singlePost.title}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {singlePost.body}
                </Typography>
                <Divider sx={{ marginTop: "15px", marginBottom: "15px" }}>
                  <Typography>Comment</Typography>
                </Divider>
                {Array.isArray(singleComment)
                  ? singleComment.map((comment) => (
                      <div key={comment.id}>
                        <Typography variant="h6" gutterBottom sx={{marginTop: '20px'}}>
                          {comment.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          gutterBottom
                          sx={{ marginLeft: "30px", marginBottom: '20px'}}
                        >
                          {comment.body}
                        </Typography>
                        <Link sx={{marginTop: '40px', marginBottom: '10px'}}>View Post</Link>
                      </div> 
                    ))
                  : console.error("singleComment is not an array")}
                <Link to="/dashboard">
                  <Button
                    size="large"
                    variant="contained"
                    sx={{ marginTop: "15px", backgroundColor: "#00a1a1" }}
                  >
                    Back To DashBoard
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default SinglePost;
