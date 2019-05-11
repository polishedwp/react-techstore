import React, { Component } from "react"
import Hero from "../components/Hero"
import defaultBcg from "../images/defaultBcg.jpeg"
import { Link } from "react-router-dom"

export default class DefaultPage extends Component {
  render() {
    return (
      <>
        <Hero img={defaultBcg} title="404">
          <h2 className="text-uppercase">page not found</h2>
          <Link to="/" className="main-link" style={{ margin: "2rem" }}>
            return Home
          </Link>
        </Hero>
      </>
    )
  }
}
