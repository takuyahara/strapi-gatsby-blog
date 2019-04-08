import React from "react"
import { StaticQuery, graphql } from "gatsby"

const Restaurant = () => (
  <StaticQuery
    query={graphql`
      query {
        allStrapiRestaurant {
          edges {
            node {
              description
            }
          }
        }
      }
    `}
    render={data => (
      <ul>
        {
          data.allStrapiRestaurant.edges.map(edge => (
            <li>{edge.node.name} - {edge.node.description}</li>
          ))
        }
      </ul>
    )}
  />
)
export default Restaurant
