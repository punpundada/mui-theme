import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button,
} from "@mui/material";
import { useColourModeContext } from "@/context/colourModeContex";
import { colours } from "@/hooks/useCustomTheme";

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
            <Grid container alignContent={"center"} spacing={3}>
              {Object.entries(colours).map((item) => (
                <Grid item>
                  <ChangeColourButton colour={item[1]} name={item[0]} key={item[0]} />
                </Grid>
              ))}
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Grid>
    </Grid>
  );
};

export default Settings;

const ChangeColourButton = ({ colour, name }: { name: string; colour: string }) => {
  const { changeColour } = useColourModeContext();
  return (
    <Button
      style={{
        backgroundColor: colour,
        color: "white",
        textAlign: "center",
        height: "2rem",
      }}
      onClick={() => changeColour(name)}
    >
      {name}
    </Button>
  );
};
