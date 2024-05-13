import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";

const Settings = () => {
  return (
    <Grid container sx={{ justifyContent: "center", alignContent: "center" }} spacing={2}>
      <Grid item sx={{ textAlign: "center" }} xs={12}>
        <Typography component={"h1"}>Settings</Typography>
      </Grid>
      <Grid item xs={12}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{ height: "4rem" }}
          >
            Account
          </AccordionSummary>
          <AccordionDetails>
              <Grid container sx={{alignContent:'center'}}>
                  <Grid item >
                    <Box sx={(theme)=>({height:'25px',width:'50px',borderRadius:"150px 150px 0 0",bgcolor:theme.palette.mode === 'light' ? 'red':'greenyellow'})}>

                    </Box>
                    <Box sx={{height:'25px',width:'50px',borderRadius:"0px 0px 150px 150px",bgcolor:'green',}}>

                    </Box>
                  </Grid>
              </Grid>
          </AccordionDetails>
        </Accordion>
        </Grid>
    </Grid>
  );
};

export default Settings;
