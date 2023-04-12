import client from "@/graphql/apollo-client";
import { gql } from "@apollo/client";


export default async function getPokemons(limit: number) {
  const { data, error } = await client.query({
    query: gql`
        {
          pokemons(first: ${limit + 20}){
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

  const pokemons = data.pokemons

  return {
    pokemons: pokemons, total: pokemons.length
  }
}