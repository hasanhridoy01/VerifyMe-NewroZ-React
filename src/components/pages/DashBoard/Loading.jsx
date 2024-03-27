import React, { useEffect, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const Loading = ({ children }) => {
  const [open, setOpen] = useState(true); 


  useEffect(() => {
   
    const timer = setTimeout(() => {
      setOpen(false);
    }, 2000); 

   
    return () => clearTimeout(timer);
  }, []); 

  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      {/* Render children only when loading is complete */}
      {!open && children}
    </div>
  );
};

export default Loading;
