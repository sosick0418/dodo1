import React from "react"
import { Card } from "react-bootstrap"

const SecondSection = () => {
  return (
    <section style={{ maxWidth: "1220px", width: "100%", marginTop: "100px" }}>
      <h1 style={{ fontSize: "34px", fontWeight: 700 }}>
        도도 포인트는 우리 가까이에 있습니다.
      </h1>
      <div
        className="d-flex"
        style={{ justifyContent: "space-between", marginTop: "63px" }}
      >
        <Card style={{ border: "0", padding: 0 }}>
          <Card.Header
            style={{
              fontSize: "18px",
              fontWeight: 700,
              backgroundColor: "transparent",
              border: "0",
            }}
          >
            태블릿 고객 관리 서비스
          </Card.Header>
          <Card.Body
            style={{ border: "0", color: "#2c5ae9", fontSize: "50px" }}
          >
            1위
          </Card.Body>
          <Card.Footer
            style={{
              border: "0",
              backgroundColor: "transparent",
              color: "#878d91",
              fontSize: "18px",
            }}
          >
            8년 연속
          </Card.Footer>
        </Card>

        <Card style={{ border: "0" }}>
          <Card.Header
            style={{
              fontSize: "18px",
              fontWeight: 700,
              backgroundColor: "transparent",
              border: "0",
            }}
          >
            총 이용 고객
          </Card.Header>
          <Card.Body
            style={{ border: "0", color: "#2c5ae9", fontSize: "50px" }}
          >
            2,580만
          </Card.Body>
        </Card>

        <Card style={{ border: "0" }}>
          <Card.Header
            style={{
              fontSize: "18px",
              fontWeight: 700,
              backgroundColor: "transparent",
              border: "0",
            }}
          >
            전국 제휴 매장
          </Card.Header>
          <Card.Body
            style={{ border: "0", color: "#2c5ae9", fontSize: "50px" }}
          >
            25,493개
          </Card.Body>
          <Card.Footer
            style={{
              border: "0",
              backgroundColor: "transparent",
              color: "#878d91",
              fontSize: "18px",
            }}
          >
            누적 기준
          </Card.Footer>
        </Card>
      </div>
    </section>
  )
}

export default SecondSection
