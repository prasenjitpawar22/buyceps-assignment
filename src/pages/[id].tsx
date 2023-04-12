import Loader from "@/components/Loader";
import PokemonEvolutionModal from "@/components/PokemonEvolutionModal";
import getPokemonEvolution from "@/lib/getPokemonEvolution";
import { Pokemon, Type } from "@/types";
import { delay } from "@/utility";
import { GetServerSideProps, GetStaticProps } from "next";
import Image from "next/image";
import { useState } from "react";
import getPokemons from "../lib/getPokemons"
import getSinglePokemon from "../lib/getSinglePokemon"

type Props = {
    data: Pokemon
    error: any
}

const CurrentPage = ({ data, error }: Props) => {
    const [modalState, setModalState] = useState(false)
    const [loader, setLoader] = useState(false)
    // console.log(data, 'asada');
    const [evolutionData, setEvolutionData] = useState<Pokemon[]>([])

    if (error) return <div className="min-h-screen flex items-center justify-center text-3xl"> Server Error </div>
    if (data === null) return <div className="min-h-screen flex items-center justify-center text-3xl"> Not found </div>
    if (!data) return <div className="min-h-screen flex items-center justify-center"> <Loader /> </div>;

    // get evolution data and open modal- popup
    const handleSeeEvolution = async (id: string, name: string) => {
        setLoader(true)
        // console.log(id, name);

        const { data } = await getPokemonEvolution(id, name)
        //check if evolutions are available
        if (data.pokemon.evolutions === null) {
            setLoader(false)
            alert('no eveolutions found')
            return
        }
        setEvolutionData(data.pokemon.evolutions)
        setModalState(true)
        setLoader(false)
    }

    return (
        <div className="flex flex-col gap-2 justify-center text-center w-full
        bg-slate-200 min-h-screen p-12">
            <div className=" bg-white p-2 rounded shadow">
                <h1 className="text-4xl font-semibold text-gray-700">{data.name} </h1>
                <div className="flex xs:flex-col md:flex-row items-center p-2 gap-2 justify-center bg-white">
                    <Image
                        alt={data.name}
                        src={data.image}
                        className={'w-[350px] h-[350px]'}
                        width="0"
                        height="0"
                        sizes="100vw"
                    />
                    <div className="grid content-start grid-cols-2 h-fit text-start gap-2 p-4 bg-slate-100 rounded">
                        <h1 className="text-slate-700">
                            <span className="capitalize text-slate-400 font-semibold">
                                weight:
                            </span>
                            {data.weight?.maximum}
                        </h1>
                        <h1 className="text-slate-700">
                            <span className="capitalize text-slate-400 font-semibold">
                                height: </span>

                            {data.height?.maximum}
                        </h1>
                        <h1 className="text-slate-700">
                            <span className="capitalize text-slate-400 font-semibold">
                                classification: </span>

                            {data.classification}
                        </h1>
                        <div>
                            <span>
                                <span className="capitalize text-slate-400 font-semibold">
                                    type: </span>
                            </span>
                            {data?.types?.map((type, index) =>
                                <span
                                    className={` text-white text-sm py-[2px] px-2 rounded 
                                            ${Type.Bug === type && 'bg-green-800'}  
                                            ${Type.Water === type && 'bg-blue-400'}  
                                            ${Type.Electric === type && 'bg-yellow-400'}  
                                            ${Type.Fairy === type && 'bg-pink-400'}  
                                            ${Type.Fighting === type && 'bg-orange-700'}  
                                            ${Type.Fire === type && 'bg-red-400'}  
                                            ${Type.Flying === type && 'bg-fuchsia-300'}  
                                            ${Type.Grass === type && 'bg-green-400'}  
                                            ${Type.Ghost === type && 'bg-gray-300'}  
                                            ${Type.Ground === type && 'bg-orange-800'}  
                                            ${Type.Normal === type && 'bg-gray-400'}  
                                            ${Type.Ice === type && 'bg-blue-200'}  
                                            ${Type.Poison === type && 'bg-violet-400'}  
                                            ${Type.Psychic === type && 'bg-pink-700'}  
                                            ${Type.Steel === type && 'bg-gray-700'} `}
                                    key={index}> {type} </span>
                            )}
                        </div>
                        <div>
                            <span className="text-slate-700">
                                <span className="capitalize text-slate-400 font-semibold">
                                    weakness: </span>
                            </span>
                            {data?.weaknesses?.map((weakness, index) =>
                                <span

                                    className={`mr-1 text-white text-sm py-[2px] px-2 rounded 
                                        ${Type.Bug === weakness && 'bg-green-800'}  
                                        ${Type.Water === weakness && 'bg-blue-400'}  
                                        ${Type.Electric === weakness && 'bg-yellow-400'}  
                                        ${Type.Fairy === weakness && 'bg-pink-400'}  
                                        ${Type.Fighting === weakness && 'bg-orange-700'}  
                                        ${Type.Fire === weakness && 'bg-red-400'}  
                                        ${Type.Flying === weakness && 'bg-fuchsia-300'}  
                                        ${Type.Grass === weakness && 'bg-green-400'}  
                                        ${Type.Ghost === weakness && 'bg-gray-300'}  
                                        ${Type.Ground === weakness && 'bg-orange-800'}  
                                        ${Type.Normal === weakness && 'bg-gray-400'}  
                                        ${Type.Poison === weakness && 'bg-violet-400'}  
                                        ${Type.Ice === weakness && 'bg-blue-200'}  
                                        ${Type.Psychic === weakness && 'bg-pink-700'}  
                                        ${Type.Steel === weakness && 'bg-gray-700'} `}
                                    key={index}>{weakness} </span>
                            )}
                        </div>
                        <div>
                            <span >
                                <span className="capitalize text-slate-400 font-semibold">
                                    resistant: </span>
                            </span>
                            {data?.resistant?.map((resistant, index) =>
                                <span
                                    className={`mr-1 text-white text-sm py-[2px] px-2 rounded 
                                        ${Type.Bug === resistant && 'bg-green-800'}  
                                        ${Type.Water === resistant && 'bg-blue-400'}  
                                        ${Type.Electric === resistant && 'bg-yellow-400'}  
                                        ${Type.Fairy === resistant && 'bg-pink-400'}  
                                        ${Type.Fighting === resistant && 'bg-orange-700'}  
                                        ${Type.Fire === resistant && 'bg-red-400'}  
                                        ${Type.Flying === resistant && 'bg-fuchsia-300'}  
                                        ${Type.Grass === resistant && 'bg-green-400'}  
                                        ${Type.Ground === resistant && 'bg-orange-800'}  
                                        ${Type.Normal === resistant && 'bg-gray-400'}  
                                        ${Type.Poison === resistant && 'bg-violet-400'}  
                                        ${Type.Ghost === resistant && 'bg-gray-300'}  
                                        ${Type.Psychic === resistant && 'bg-pink-700'}  
                                        ${Type.Ice === resistant && 'bg-blue-200'}  
                                        ${Type.Steel === resistant && 'bg-gray-700'} `}
                                    key={index}>{resistant}</span>
                            )}
                        </div>
                        <div>
                            <button onClick={() => handleSeeEvolution(data.id, data.name)}
                                className={`capitalize text-white ${loader ? 'bg-slate-300' : 'bg-slate-500 hover:bg-slate-600'}  
                                px-2 py-[2px] rounded`}>
                                {'see evolutions'}</button>
                        </div>
                    </div>
                </div>
            </div>
            {modalState &&
                <PokemonEvolutionModal
                    modalState={modalState}
                    setModalState={setModalState}
                    evolutionData={evolutionData}
                />
            }
        </div>
    )
}

export default CurrentPage


// Generates `pokemons 1` to `20`
export async function getStaticPaths() {

    const { pokemons, } = await getPokemons(0)

    // Get the paths we want to pre-render based on pokemons id
    const paths = pokemons.map((pokemon: Pokemon) => ({
        params: { id: pokemon.id },
    }))

    return {
        paths,
        fallback: true, //get other id's also 'fallback'
    }
}

// buil time rendering FIRST 20 POKEMONS details
export const getStaticProps: GetStaticProps = async ({ params }) => {
    if (!params?.id) return { props: { error: 'error' } }

    const queryVariables = (params.id as string).split("=")
    const one = queryVariables[0]
    const two = queryVariables[1]
    const { data, error } = await getSinglePokemon(one, two)

    return {
        props: {
            id: params?.id,
            data: data.pokemon,
        }
    }
}