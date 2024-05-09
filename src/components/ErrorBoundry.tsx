import { Button, Grid, Typography } from "@mui/material";
import { Component, ErrorInfo, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: undefined,
  };

  public static getDerivedStateFromError(err: Error): State {
    // Update state so the next render will show the fallback UI.
    console.log(JSON.stringify(err));
    return { hasError: true, error: err };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
    this.state.error = error;
  }

  resetState(){
    this.state = {hasError:false,error:undefined}
  }

  public render() {
    if (this.state.hasError) {
      return (
        <Grid sx={{display:'flex',justifyContent:'center',alignItems:'center' ,mt:50,flexDirection:'column'}}>
          <Typography component={"h1"}>{this.state.error?.message}</Typography>
            <hr />
          <GoBackButton resetState={this.resetState} />
        </Grid>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

const GoBackButton = ({resetState}:{resetState:()=>void}) => {
  const navigate = useNavigate();
  const handleClick = ()=>{
    navigate('/')
    resetState
  }
  return <Button onClick={handleClick} variant="contained" >Go back</Button>;
};
