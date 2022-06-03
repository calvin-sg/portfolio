import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
    const bgStyle = {backgroundColor: "#f5f5f5"};

    return (
        <footer style={bgStyle} className="mt-auto py-5 text-center ">
            <Container>
                {props.children}
                Built with <i className="fas fa-heart" style={{color: "red"}}/> using <i className="fab fa-react" style={{color: "blue"}}/>.

                <br/>
                Code available at{" "}
                <a
                    className="badge badge-dark"
                    rel="noopener"
                    target=" _blank"
                    href="https://github.com/calvin-sg/portfolio"
                    aria-label="portfolio"
                >
                    <i className="fab fa-github"/> My portfolio
                </a>
                <br/>
                Forked from original code <i className="fas fa-code"/> by{" "}
                <a
                    className="badge badge-dark"
                    rel="noopener"
                    target=" _blank"
                    href="https://github.com/hashirshoaeb"
                    aria-label="My GitHub"
                >
                    Hashir Shoaib
                </a>{" & "}
                <a
                    className="badge badge-dark"
                    rel="noopener"
                    target=" _blank"
                    href="https://github.com/xunxdd"
                    aria-label="My GitHub"
                >
                    Xun Ding
                </a>

            </Container>
        </footer>
    );
};

export default Footer;
