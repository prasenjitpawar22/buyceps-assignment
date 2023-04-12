import client from "@/graphql/apollo-client";
import { gql } from "@apollo/client";

export default async function getPokemonEvolution(id: string, name: string) {
  const { data, error } = await client.query({
    query: gql`
        {
        pokemon(id: "${id}", name: "${name}"){
          id
          name
          evolutions{
            id
            number
            name
            classification
            types
            resistant
            weaknesses
            fleeRate
            maxCP
            evolutions {
              id
              number
              name
              classification
              types
              resistant
              weaknesses
              fleeRate
              maxCP
            }
            maxHP
            image
          }
        }
      }
      `
  })

  return {
    data: data, error: error
  }
}