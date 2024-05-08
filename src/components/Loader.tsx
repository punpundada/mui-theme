import { Backdrop, CircularProgress } from "@mui/material";

const Loader = ({ def }: { def?: boolean }) => {
  return (
    <Backdrop
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={def ?? true}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default Loader;
