import React from "react"
import { StaticQuery, graphql } from "gatsby"

const Shop = () => (
  <StaticQuery
    query={graphql`
      query {
        allStrapiShop {
          edges {
            node {
              name
              address
              show
            }
          }
        }
      }
    `}
    render={data => (
      <div 
        style={{
          background: `rebeccapurple`,
          marginBottom: `1.45rem`,
        }}
      >
        {
          data.allStrapiShop.edges
          .filter(edge => edge.node.show === 1)
          .map(edge => (
            <ul>
              <li>{edge.node.name}</li>
              <li>{edge.node.address}</li>
            </ul>
          ))
        }
      </div>
    )}
  />
)
export default Shop
