import { display, margin, styled } from "@mui/system";
import React, { ReactNode } from "react";

interface StyledButtonProps {
    children: ReactNode
    onClick?: () => void
}

const StyledButton: React.FC<StyledButtonProps> = ({children, onClick }) => {

    const StyledButton = styled("button")(({theme}) => ({
        backgroundColor: "transparent",
        border: "1px solid white",
        borderRadius: "3px",
        padding: "5px 15px",
        width: "100%",
        color: theme.palette.primary.contrastText,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        [theme.breakpoints.up("md")]: {
            width: "80%",
          },
          [theme.breakpoints.up("sm")]: {
            width: "80%",
          },
          [theme.breakpoints.up("xs")]: {
            width: "300px",
            marginRight: "3%",
          },
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
        }
    }));
  
  
    return (
        <>
            <StyledButton onClick = {onClick} >
                {children}
            </StyledButton>
        </>
        
    );
  }
  
  export default StyledButton;