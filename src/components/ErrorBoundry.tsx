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

  public render() {
    if (this.state.hasError) {
      return (
        <Grid>
          <Typography component={"h1"}>{this.state.error?.message}</Typography>
          <GoBackButton />
        </Grid>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

const GoBackButton = () => {
  const navigate = useNavigate();

  return <Button onClick={() => navigate(-1)}>Go back</Button>;
};
