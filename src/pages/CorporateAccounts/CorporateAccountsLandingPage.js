import React from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import { Button, Typography, Link } from "@mui/material";
import Navbar from "../../components/Navbar/Navbar";

const CorporateAccountsLandingPage = () => {
  const user = JSON.parse(localStorage.getItem("userInfo"));
  const navigate = useNavigate();
  const handleClickCreateOrg = () => {
    if (user) {
      navigate("/createorg");
    } else {
      navigate("/login");
    }
  };
  const handleClickJoinOrg = () => {
    if (user) {
      navigate("/corpacauth");
    } else {
      navigate("/login");
    }
  };
  return (
    <Box>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            pt: { xs: "30px", md: "initial" },
            display: "flex",
            flexDirection: "column",
            ml: { xs: 0, md: "50px" },
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: "inherit",
              fontWeight: "500",
              fontSize: { xs: "25px", sm: "30px", md: "50px" },
              mb: "30px",
            }}
          >
            Corporate Accounts
          </Typography>
          <Box sx={{ display: "flex", mb: "30px" }}>
            <Button
              sx={{
                mr: "20px",
                fontFamily: "inherit",
                fontWeight: "600",
                backgroundColor: "#8330C2",
                color: "white",
                borderRadius: "70px",
                width: "fit-content",
                fontSize: { xs: "12px", sm: "15px", md: "15px" },
                p: "20px",
                ":hover": {
                  backgroundColor: "#A86ED4",
                  color: "white",
                },
              }}
              onClick={handleClickJoinOrg}
            >
              Join Organization
            </Button>

            <Button
              sx={{
                fontFamily: "inherit",
                border: 1,
                fontWeight: "600",
                borderColor: "#8330C2",
                color: "#8330C2",
                borderRadius: "70px",
                width: "fit-content",
                fontSize: { xs: "12px", sm: "15px", md: "15px" },
                p: "20px",
                ":hover": {},
              }}
              onClick={handleClickCreateOrg}
            >
              Create Organization
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            width: { xs: "0", md: "70%" },
            backgroundImage: {
              xs: "none",
              md: 'url("https://img.freepik.com/free-vector/people-using-location-app-ordering-taxy_74855-10996.jpg?w=900&t=st=1682429588~exp=1682430188~hmac=058072c23d3e493e0eaf1577768a42adfa25ddf67c454f3e63c121cd0785c511")',
            },
            opacity: "1",
            backgroundSize: "cover",
            // transform: {
            //   xs: "none",
            //   md: "rotate(-5deg)",
            // },
            // transformOrigin: {
            //   xs: "initial",
            //   md: "top right",
            // },
            height: { xs: "0", md: "100vh" },
          }}
        ></Box>
      </Box>
    </Box>
  );
};

export default CorporateAccountsLandingPage;
