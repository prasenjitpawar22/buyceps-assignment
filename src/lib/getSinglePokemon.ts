import client from "@/graphql/apollo-client";
import { gql } from "@apollo/client";

export default async function getSinglePokemon(id: string, name: string) {
  const { data, error } = await client.query({
    query: gql`
        {
          pokemon(id: "${id}",name: "${name}"){
            id
            number
            name
            weight{
              minimum
              maximum
            }
            height{
              minimum
              maximum
            }
            classification
            types
            resistant
            weaknesses
            fleeRate
            maxCP
            maxHP
            image
          }
        }
      `
  })

  return {
    data: data, error: error
  }
}