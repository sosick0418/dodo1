import React from "react"
import Header from "./component/Header"
import SecondSection from "./component/SecondSection"
import Slide from "./component/Slide"

const App = () => {
  return (
    <div className="App">
      <div
        className="d-flex"
        style={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Header />
        <Slide />
        <SecondSection />
      </div>
    </div>
  )
}

export default App
