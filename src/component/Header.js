import React from "react"
import { Button, Container, Nav, Navbar } from "react-bootstrap"

const Header = () => (
  <header
    style={{
      maxWidth: "1920px",
      width: "100%",
      display: "flex",
      height: "80px",
      position: "fixed",
      top: 0,
      zIndex: 1000,
      backgroundImage: "transparent",
    }}
  >
    <Navbar className={"d-flex w-100"} style={{ padding: "0 40px" }}>
      <Container>
        <Navbar.Brand className="text-white">dodo point</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
      <Container style={{ display: "flex", justifyContent: "center" }}>
        <Navbar.Collapse id="basic-navbar-nav" style={{ flexGrow: 0 }}>
          <Nav className="me-auto">
            <Nav.Link className="text-white" href="#home">
              활용방법
            </Nav.Link>
            <Nav.Link className="text-white" href="#home">
              업종별 가이드
            </Nav.Link>
            <Nav.Link className="text-white" href="#home">
              성공 블로그
            </Nav.Link>
            <Nav.Link className="text-white" href="#home">
              프랜차이즈
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Container style={{ justifyContent: "flex-end" }}>
        <Button variant="primary">무료상담</Button>
      </Container>
    </Navbar>
  </header>
)

export default Header
