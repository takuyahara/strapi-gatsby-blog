import React from "react"
import { StaticQuery, graphql } from "gatsby"

const Article = () => (
  <StaticQuery
    query={graphql`
      query {
        allStrapiArticle {
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
          data.allStrapiArticle.edges.map(edge => (
            <li>{edge.node.name} - {edge.node.description}</li>
          ))
        }
      </ul>
    )}
  />
)
export default Article
