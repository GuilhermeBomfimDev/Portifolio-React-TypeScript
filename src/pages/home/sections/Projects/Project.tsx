import { Container, Grid, Grid2, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useEffect, useState, useRef } from "react";

import theme from "../../../../theme";
import StyledButton from "../../../../components/StyledButton/StyledButton";

import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';

import SisControl from "../../../../assets/images/printSisControl.jpg";
import Xadrez from "../../../../assets/images/printXadrez.jpg";
import SalesWeb from "../../../../assets/gifs/gifSalesWeb.gif";

const StyledProject = styled("div")(() => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    gap: "20px",
    marginTop: "50px",
    backgroundColor: "#123524",
}));

interface StyledSlideProps {
    isVisible: boolean;
    direction: "left" | "right";
}

const StyledSlide = styled("div")<StyledSlideProps>(({ theme, isVisible, direction }) => ({
    padding: "20px",
    color: "white",
    border: "2px solid white",
    display: "flex",
    flexDirection: "column",
    width: "85%",
    maxWidth: "700px",
    transition: "transform 1.5s ease-in-out, opacity 1.5s ease-in-out",
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateX(0)" : direction === "left" ? "translateX(-300px)" : "translateX(300px)",
    [theme.breakpoints.up("md")]: {
        width: "700px",
        maxWidth: "none",
    },
    [theme.breakpoints.down("sm")]: {
        width: "300px",
        maxWidth: "none",
    },
    "&:hover": {
          backgroundColor: theme.palette.secondary.contrastText,
          transition: "background-color 0.8s",
        },
}));

const StyledImg = styled("img")(() => ({
    width: "100%",
    height: "340px",
    border: "1px solid white",
    zIndex: 1, 
    marginTop: "20px",
    marginBottom: "20px",
}));

function Projects() {
    const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
    const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setIsVisible((prev) => ({
                ...prev,
                [(entry.target as HTMLElement).dataset.id as string]: true,
                }));
            }
            });
        },
        { threshold: 0.3 }
        );

        slideRefs.current.forEach((ref) => {
        if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    const slides: { id: string; title?: string; date?: string; img?: string; details?: string; tech?: string; link?: string; direction: "left" | "right" }[] = [
        { id: "slide1", title: "SisControl", date: "Jul 2024 / Today", img: SisControl, details: "SisControl é uma aplicação desenvolvida para gerenciar o controle de estoque de uma loja, permitindo operações como cadastro de itens, verificação de estoque, login de usuários e atualizações no inventário. Este projeto foi idealizado para otimizar processos e oferecer uma interface intuitiva tanto para o administrador quanto para usuários que acessam o sistema.", tech: "C#, JavaScript, HTML, CSS, SQL Server, Azure", link: "https://github.com/GuilhermeBomfimDev/SisControl", direction: "left" },

        { id: "slide2", title: "SalesWeb", date: "Jan 2025 / Jan 2025", img: SalesWeb, details: "O Xadrez Console é um jogo de xadrez desenvolvido em C# utilizando conceitos de programação orientada a objetos. Este projeto foi criado a fim de aprender novas técnicas e boas práticas de desenvolvimento, visando aprimorar o conhecimento em desenvolvimento de jogos e lógica de programação.", tech: "C#, .Net, Entity FrameWork, SQL Server", link: "https://github.com/GuilhermeBomfimDev/SalesWeb", direction: "right" },

        { id: "slide3", title: "Xadrez", date: "Dez 2024 / Jan 2025", img: Xadrez, details: "O Xadrez Console é um jogo de xadrez desenvolvido em C# utilizando conceitos de programação orientada a objetos. Este projeto foi criado a fim de aprender novas técnicas e boas práticas de desenvolvimento, visando aprimorar o conhecimento em desenvolvimento de jogos e lógica de programação.", tech: "C#", link: "https://github.com/GuilhermeBomfimDev/xadrez-console", direction: "right" },
      ];

    return (
        <StyledProject>
            <Grid2 container spacing={2}>
                <Typography color="secondary" variant={"h1"} fontWeight={200} marginBottom={"20px"} marginTop={"10px"}>Projects</Typography>
            </Grid2>

            <Grid2 container spacing={6} display={"flex"} justifyContent={"center"}>
                {slides.map((slide, index) => (
                    <Grid item xs={12} md={6} key={slide.id} display="flex" justifyContent="center">
                        <StyledSlide ref={(el) => (slideRefs.current[index] = el)} data-id={slide.id} isVisible={isVisible[slide.id]} direction={slide.direction}> 

                            <Typography fontWeight={"bold"} fontSize={"1.5rem"} textAlign={"left"}>{slide.title}</Typography>
                            <Typography fontSize={"1rem"} textAlign={"left"}>{slide.date}</Typography>

                            <Grid2 container spacing={2} display={"flex"} justifyContent={"center"}>
                                <StyledImg src={slide.img} alt="Project SisControl" />
                            </Grid2>

                            <Typography fontSize={"1rem"} textAlign={"left"}>{slide.details}</Typography>
                            <br></br>
                            <Typography fontWeight={"bold"} fontSize={"1rem"} textAlign={"left"}>Technologies: {slide.tech}</Typography>
                            <br></br>

                            <Grid container display="flex" justifyContent="center" alignItems={"center"} spacing={1} padding={"10px"}>
                                <Grid xs={12} md={5} display="flex" justifyContent="center" margin={"5px 5px 0 5px"} >
                                    <StyledButton onClick={() => window.open(slide.link, '_blank')}>
                                        <CodeIcon/>
                                        <Typography>View Project</Typography>
                                    </StyledButton>
                                </Grid>
                                <Grid xs={12} md={5} display="flex" justifyContent="center" margin={"5px 5px 0 5px"}>
                                    <StyledButton onClick={() => window.open(slide.link, '_blank')}>
                                        <GitHubIcon/>
                                        <Typography>View Code</Typography>
                                    </StyledButton>
                                </Grid>
                            </Grid>
                        </StyledSlide>
                    </Grid>
                ))};
            </Grid2>
        </StyledProject>
    );
};

export default Projects;