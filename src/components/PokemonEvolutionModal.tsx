import { Pokemon, Type } from "@/types"
import Image from "next/image"
import { Dispatch, SetStateAction } from "react"
import { AiOutlineDoubleRight } from 'react-icons/ai'

type Props = {
    modalState: boolean
    setModalState: Dispatch<SetStateAction<boolean>>
    evolutionData: Pokemon[]
}

const PokemonEvolutionModal = ({ modalState, setModalState, evolutionData }: Props) => {

    // console.log(evolutionData, 'inmodal');


    return (
        <div className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
        // style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1623600989906-6aae5aa131d4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1582&q=80)' }}
        >
            {/* //  style={"background-image: url(https://images.unsplash.com/photo-1623600989906-6aae5aa131d4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1582&q=80);"} id="modal-id"> */}
            <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
            <div className="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-slate-200 ">
                {/* <!--content */}
                <div className="">
                    {/* <!--body */}
                    <div className="flex gap-2 text-center p-5 flex-auto justify-center">
                        {evolutionData?.map((pokemon, index) =>
                            <div className="flex gap-2 items-center">
                                <div key={index} className="h-full shadow rounded bg-white p-2 gap-2 flex flex-col justify-between">
                                    <div className="flex flex-col justify-center gap-2">
                                        <div>
                                            <span className="text-2xl font-semibold text-slate-700">
                                                {pokemon.name}
                                            </span>
                                            <span className="font-semibold text-slate-600">
                                                #{pokemon.number} </span>
                                        </div>
                                        <div className="flex gap-2 justify-center">
                                            {pokemon?.types?.map((type, index) =>
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
                                                        ${Type.Ground === type && 'bg-orange-800'}  
                                                        ${Type.Normal === type && 'bg-gray-400'}  
                                                        ${Type.Poison === type && 'bg-violet-400'}  
                                                        ${Type.Ghost === type && 'bg-gray-300'}  
                                                        ${Type.Psychic === type && 'bg-pink-700'}  
                                                        ${Type.Ice === type && 'bg-blue-200'}  
                                                        ${Type.Steel === type && 'bg-gray-700'} `}
                                                    key={index}> {type} </span>
                                            )}
                                            <span></span>
                                        </div>
                                    </div>
                                    <Image src={pokemon.image} alt={pokemon.name}
                                        className={'p-2 w-[200px] h-[200px]'}
                                        width="0"
                                        height="0"
                                        sizes="100vw"
                                    />
                                </div>
                                {index !== evolutionData.length - 1 && <AiOutlineDoubleRight size={40} />}
                            </div>
                        )}
                    </div>
                    {/* <!--footer */}
                    <div className="p-3  mt-2 text-center space-x-4 md:block">
                        <button onClick={() => setModalState(false)}
                            className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border
                         text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100">
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PokemonEvolutionModal 