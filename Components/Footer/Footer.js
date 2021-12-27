import { Container } from "../../Global/GlobalStyle";
import {
    FooterContainer,
    FooterBackground,
    FooterSubContainer,
    FooterTitle,
    FooterSubTitle,
    FooterList,
    FooterLink,
    FooterCopy,
    FooterSocials,
    FooterSocial,
} from "./styledFooter";

export const Footer = ({ data }) => {
    const network = data.social.map((network) => {
        return (
            <FooterSocial key={network.name} href={network.url} target="_blank">
                <i className={network.class}></i>
            </FooterSocial>
        )
    });

    return (
        <FooterContainer>
            <FooterBackground>
                <Container>
                    <FooterSubContainer>
                        <div>
                            <FooterTitle>{data.name}</FooterTitle>
                            <FooterSubTitle>Fullstack Developer</FooterSubTitle>
                        </div>

                        <FooterList>
                            <li>
                                <FooterLink href="#services">Services</FooterLink>
                            </li>
                            <li>
                                <FooterLink href="#portfolio">Portfolio</FooterLink>
                            </li>
                            <li>
                                <FooterLink href="#contact">Contact</FooterLink>
                            </li>
                        </FooterList>

                        <FooterSocials>
                            {network}
                        </FooterSocials>
                    </FooterSubContainer>
                </Container>
                <FooterCopy>&#169; Created by <span>{data.name}</span> - powerd by <span>NextJS</span></FooterCopy>
            </FooterBackground>
        </FooterContainer>
    );
};