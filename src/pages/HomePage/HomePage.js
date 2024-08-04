import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import HomePageNavbar from "./HomePageNavbar";
import SocialMediaComponent from "./SocialMediaIcons";
import CorporateFareOutlinedIcon from "@mui/icons-material/CorporateFareOutlined";
import AddRoadOutlinedIcon from "@mui/icons-material/AddRoadOutlined";
import Groups2OutlinedIcon from "@mui/icons-material/Groups2Outlined";
import Avatar from "@mui/material/Avatar";
import { Link } from "@mui/material";

const HomePage = () => {
  const user = JSON.parse(localStorage.getItem("userInfo"));
  let link;

  if (user?.userInf?.role === "passenger") {
    if (user?.userInf?.user?.isAdmin) {
      link = "/admindashboard";
    } else if (!user?.userInf?.user?.organization) {
      link = "/corpac";
    } else {
      link = "/userinfo";
    }
  } else {
    link = "/corpac";
  }

  const features = [
    {
      componenet: (
        <CorporateFareOutlinedIcon
          sx={{
            fontSize: { xs: "30px", sm: "50px", md: "150px" },
            mr: "1rem",
          }}
        />
      ),
      link: link,
      name: "Corporate Accounts",
    },
    // {
    //   componenet: (
    //     <AddRoadOutlinedIcon
    //       sx={{
    //         fontSize: { xs: "20px", sm: "40px", md: "50px" },
    //         mr: "1rem",
    //       }}
    //     />
    //   ),
    //   link: "/",
    //   name: "Road Side Assistance",
    // },
    // {
    //   componenet: (
    //     <Groups2OutlinedIcon
    //       sx={{
    //         fontSize: { xs: "20px", sm: "40px", md: "50px" },
    //         mr: "1rem",
    //       }}
    //     />
    //   ),
    //   link: "/",
    //   name: "Group Rides",
    // },
  ];
  return (
    <Box sx={{ height: "100vh" }}>
      <Box>
        <HomePageNavbar />
      </Box>
      <Box
        sx={{
          mt: "10px",
          mx: "30px",
          borderRadius: "50px",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "white",
          height: "80vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            mt: "2px",
            fontFamily: "revert",
            fontWeight: "400",
            fontSize: { xs: "30px", md: "70px", sm: "50px" },
            textAlign: "center",
            lineHeight: 1.2,
          }}
        >
          "Your Commute, Our Priority ,
          <br />
          <Typography
            sx={{
              mt: "2px",
              fontFamily: "revert",
              fontWeight: "300",
              fontSize: { xs: "30px", md: "70px", sm: "50px" },
              textAlign: "center",
              lineHeight: 1.2,
              color: "#8330C2",
            }}
          >
            The hassle-free way to book cabs
          </Typography>
          for your employees!"
        </Typography>
      </Box>
      <Box
        id="section1"
        sx={{
          mt: "20px",
        }}
      >
        <Box
          sx={{
            mt: "100px",
            fontSize: { xs: "30px", sm: "50px", md: "70px" },
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            color: "black",
            fontFamily: "inherit",
            fontWeight: "700",
            fontSize: { xs: "40px", md: "70px" },
          }}
        >
          Features
        </Box>
        <Box
          sx={{
            mt: "100px",
            mx: "auto",
            borderRadius: { xs: "30px", md: "70px" },
            display: "flex",
            height: { xs: "70vh", md: "50vh" },
            backgroundColor: "#F1F6F9",
            fontSize: { xs: "30px", sm: "50px", md: "70px" },
            width: { xs: "100%", md: "100%", sm: "100%" }, // Set width to 100% on small screens and 50% on medium screens
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            // margin: { xs: "20px", md: "30px" },
          }}
        >
          {" "}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: { xs: "center", md: "flex-start" },
              justifyContent: "center",
              gap: "20px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "row", md: "column" },
                  justifyContent: "center",
                  alignItems: "center",
                  flex: "1",
                  height: "100%",
                }}
              >
                {features.map((feature) => (
                  <Link href={feature.link} sx={{ textDecoration: "none" }}>
                    <Box
                      sx={{
                        // border: "2px solid #FFF",
                        padding: "20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#FFF",
                        // marginTop: "20px",
                        boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
                        width: { xs: "fit-content", md: "fit-content" },
                        height: { xs: "100%", md: "100%" },
                        borderRadius: { xs: "70px", md: "70px" },
                      }}
                    >
                      {feature.componenet}
                      <Typography
                        sx={{
                          color: "black",
                          fontFamily: "inherit",
                          fontWeight: "500",
                          lineHeight: "1.5",
                          fontSize: { xs: "20px", sm: "40px", md: "50px" },
                        }}
                      >
                        {feature.name}
                      </Typography>
                    </Box>
                  </Link>
                ))}
              </Box>
              <Box
                sx={{
                  flex: "1",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
              <Box sx={{
                p: "20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#FFF",
                        mt: { xs: "50px", md: "0", sm: "50px" },
                        mx:{xs:"0",md:"50px"},
                        boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
                        width: { xs: "fit-content", md: "fit-content" },
                        height: { xs: "100%", md: "100%" },
                        borderRadius: { xs: "70px", md: "70px" },
              }}>
<Typography
                  sx={{
                    fontFamily: "inherit",
                    fontWeight: "300",
                    fontSize: { xs: "20px", md: "24px", sm: "24px" },
                    lineHeight: 1.2,
                    color: "black",
                    // mt: { xs: "50px", md: "0", sm: "0" },
                  }}
                >
                  Our website provides a convenient way for admins to book
                  rides for their organization's employees to commute to and
                  from the office. 
                  <br/>
                  It allows drivers and employees to join desired organization.
                </Typography>
              </Box>
                
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box id="section2" sx={{}}>
        <Box
          sx={{
            mt: "200px",
            fontSize: { xs: "30px", sm: "50px", md: "70px" },
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            color: "black",
            fontFamily: "inherit",
            fontWeight: "700",
            fontSize: { xs: "40px", md: "70px" },
          }}
        >
          <Typography
            sx={{
              ml: "auto",
              mr: "auto",
              mb: "80px",
              fontFamily: "inherit",
              fontWeight: "700",
              fontSize: { xs: "40px", md: "70px" },
            }}
          >
            Supervisor
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              borderRadius: "50%",
              overflow: "hidden",
              width: { xs: "150px", md: "350px" },
              maxWidth: { xs: "100%", md: "100%" },
              height: { xs: "150px", md: "350px" },
              mx: { xs: "20px", md: "40px" },
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Avatar
              sx={{ width: "100%", height: "100%" }}
              alt="Person 1"
              src={require("./ImagesOfGrpMembers/Supervisor.jpeg")}
            />
          </Box>
          <Box sx={{ textAlign: "center", mt: "10px" }}>
            <Typography
              sx={{
                fontFamily: "inherit",
                fontWeight: "400",
                fontSize: { xs: "20px", md: "30px" },
              }}
            >
              Niharika Anand
              <Typography
                sx={{
                  fontFamily: "inherit",
                  fontWeight: "400",
                  fontSize: { xs: "20px", md: "30px" },
                  color: "#8330C2",
                }}
              >
                Supervisor
              </Typography>
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            mt: "0px",
            ml: { xs: "10px", md: "20px" },
            mr: { xs: "10px", md: "20px" },
            borderRadius: "40px",
            display: "flex",
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              justifyContent: "center",
              mt: "50px",
            }}
          >
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          mt: { xs: "50px", md: "250px" },
          borderRadius: { xs: "30px", md: "30px" },
          display: "flex",
          backgroundColor: "black",
          height: { xs: "fit-content", md: "fit-content" },
          alignItems: "center",
          flexDirection: "column",
          // mb: { xs: "10px", md: "0px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            mt: "20px",
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontFamily: "inherit",
              fontWeight: "700",
              fontSize: { xs: "30px", md: "70px", sm: "50px" },
              ml: "20px",
            }}
          >
            Contact Us
          </Typography>
        </Box>
        <SocialMediaComponent />
      </Box>
    </Box>
  );
};

export default HomePage;
