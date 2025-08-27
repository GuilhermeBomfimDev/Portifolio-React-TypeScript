import { Grid, Grid2, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useEffect, useState, useRef } from "react";

import StyledButton from "../../../../components/StyledButton/StyledButton";

import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';

import SisControl from "../../../../assets/images/printSisControl.jpg";
import Xadrez from "../../../../assets/images/printXadrez.jpg";
import SalesWeb from "../../../../assets/gifs/gifSalesWeb.gif";
import PrintAppBuscaCep from "../../../../assets/images/printBuscaCep2.jpg";

const StyledProject = styled("div")(() => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    gap: "20px",
    marginTop: "50px",
    paddingBottom: "50px",
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
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    width: "85%",
    maxWidth: "700px",
    overflowX: "hidden",
    transition: "transform 1.5s ease-in-out, opacity 1.5s ease-in-out",
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateX(0)" : direction === "left" ? "translateX(-50px)" : "translateX(50px)",
    [theme.breakpoints.up("md")]: {
        width: "700px",
        maxWidth: "100%",
        overflowX: "hidden",
    },
    [theme.breakpoints.down("sm")]: {
        width: "300px",
        maxWidth: "100%",
        overflowX: "hidden",
    },
    "&:hover": {
          backgroundColor: theme.palette.secondary.contrastText,
          transition: "background-color 0.8s",
        },
}));

const StyledImg = styled("img")(({ theme}) => ({
    width: "100%",
    height: "340px",
    border: "1px solid white",
    zIndex: 1, 
    marginTop: "20px",
    marginBottom: "20px",
    [theme.breakpoints.down("sm")]: {
        width: "100%",
        height: "80%",
        maxWidth: "none",
    },
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

    const slides: { id: string; title?: string; date?: string; img?: string; details?: string; tech?: string; linkProject?: string; linkGitHub?: string; direction: "left" | "right" }[] = [
        { id: "slide1", 
            title: "Sistema de Vendas - SalesWeb", 
            date: "Jan 2025 / Jul 2025", 
            img: SalesWeb, 
            details: "O SalesWeb é parte de um projeto de estudo, onde fiz um sistema de gestão de vendas desenvolvido em C# utilizando o framework ASP.NET Core MVC. Este projeto se resume em um controle de vendas, onde é possível gerenciar departamentos, vendedores e registros de vendas de forma eficiente. Com esse projeto, consegui aprimorar meu conhecimento com o framework ASP.NET, a construção de APIs eficientes e organizadas. Trabalhei melhor a construção de banco de dados, garantindo uma conexão segura e um bom desempenho.", 
            tech: "C#, .Net, Entity FrameWork, SQL Server, Postman, HTML, CSS, Bootstrap",
            linkProject: "https://stranalytics.onrender.com/",  
            linkGitHub: "https://github.com/GuilhermeBomfimDev/SalesWeb", 
            direction: "left" 
        
        },
        
        { id: "slide2", 
            title: "SisControl", 
            date: "Jul 2024 / Dez 2025", 
            img: SisControl, 
            details: "SisControl é uma aplicação que desenvolvi para gerenciar o controle de estoque de um galpão de materiais. Esse sistema permite operações como cadastro de itens, verificação de estoque, login de usuários e atualizações no inventário. Fiz esse projeto com o objetivo de garantir o bom controle dos itens guardados como também a sua segurança. Junto disso, garanti que tivesse uma interface intuitiva e fácil de usar tanto para o administrador quanto para usuários que acessam o sistema.", 
            tech: "C#, JavaScript, HTML, CSS, SQL Server, Azure, Postman", 
            linkProject: "https://agaidarji.github.io/SisControl/", 
            linkGitHub: "https://github.com/GuilhermeBomfimDev/SisControl", 
            direction: "right" 
        
        },

        { id: "slide3", 
            title: "App de Buscar de CEP", 
            date: "Agosto 2025 / Agosto 2025", 
            img: PrintAppBuscaCep, 
            details: "Aplicativo de windows desenvolvido em C# e Python, integrado a IA, com o objetivo de buscar o CEP de um endereço utilizando a API do ViaCEP. O aplicativo possui uma interface simples e intuitiva, onde o usuário pode: 1) inserir o CEP desejado e obter informações detalhadas sobre o endereço correspondente, como rua, bairro, cidade e estado ou 2) inserir o endereço e ter uma lista dos CEPs relacionados ao endereço. Este projeto utiliza integração com IA local por meio do GPT4All para tratar o texto do endereço e tranformá-lo em uma URL de busca na API do ViaCEP de forma automazida.", 
            tech: "C#, Python, API ViaCEP, IA", 
            //linkProject: "https://guilhermebomfimdev.github.io/Portifolio-React-TypeScript/", 
            linkGitHub: "https://github.com/GuilhermeBomfimDev/AppBuscaCep", 
            direction: "left" 
        
        },

        { id: "slide4", 
            title: "Xadrez", 
            date: "Dez 2024 / Jan 2025", 
            img: Xadrez, 
            details: "O Xadrez Console é um jogo de xadrez desenvolvido em C# utilizando conceitos de programação orientada a objetos. Este projeto foi criado a fim de aprender novas técnicas e boas práticas de desenvolvimento, visando aprimorar o conhecimento em desenvolvimento de jogos e lógica de programação. O jogo apresenta uma interface simples baseada em console, onde os jogadores podem mover as peças utilizando coordenadas. O sistema valida os movimentos de acordo com as regras do xadre. Além disso, o jogo inclui funcionalidades de xeque e xeque-mate, proporcionando um desafio completo.", 
            tech: "C#", 
            //linkProject: "https://agaidarji.github.io/SisControl/", 
            linkGitHub: "https://github.com/GuilhermeBomfimDev/xadrez-console", 
            direction: "right" 
        },
    ];

    return (
        <section id = "project">
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
                                        <StyledButton onClick={() => window.open(slide.linkProject, '_blank')}>
                                            <CodeIcon/>
                                            <Typography>View Project</Typography>
                                        </StyledButton>
                                    </Grid>
                                    
                                    <Grid xs={12} md={5} display="flex" justifyContent="center" margin={"5px 5px 0 5px"}>
                                        <StyledButton onClick={() => window.open(slide.linkGitHub, '_blank')}>
                                            <GitHubIcon/>
                                            <Typography>View Code</Typography>
                                        </StyledButton>
                                    </Grid>
                                </Grid>
                            </StyledSlide>
                        </Grid>
                    ))}
                </Grid2>
            </StyledProject>
        </section>
    );
};

export default Projects;