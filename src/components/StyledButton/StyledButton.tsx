import { styled } from "@mui/system";
import React, { ReactNode } from "react";

interface StyledButtonProps {
    children: ReactNode
}

const StyledButton: React.FC<StyledButtonProps> = ({children}) => {

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
        '&:hover': {
            backgroundColor: theme.palette.secondary.dark,
        }
    }));
  
  
    return (
        <>
            <StyledButton>
                {children}
            </StyledButton>
        </>
        
    );
  }
  
  export default StyledButton;