import { Pokemon, Type } from "@/types"
import Image from "next/image"
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

type Props = {
    pokemon: Pokemon
}

const PokemonCard = (props: Props) => {
    const { pokemon } = props
    const router = useRouter()

    const typeStype = ``

    return (
        <motion.div
            whileHover={{
                scale: 1.05,
                transition: { duration: .4 },
            }}
            onClick={() => router.push(`/${pokemon.id + pokemon.name}`)}

            className="flex justify-center flex-col gap-2 p-2 rounded cursor-pointer
         bg-white w-fit hover:shadow-2xl">
            <div className="bg-white flex justify-center flex-col w-fit">
                <Image alt={pokemon.name}
                    src={pokemon.image}
                    className={'w-[150px] h-[150px]'}
                    width="0"
                    height="0"
                    sizes="100vw"
                />
            </div>
            <div className="bg-slate-100 p-2 rounded shadow-inner">
                <h1 className="text-gray-700 mb-2">#{pokemon.number} </h1>
                <h1 className="text-xl font-semibold text-gray-800">{pokemon.name}</h1>
                <div className="flex gap-2">
                    {pokemon.types.map((type, index) =>
                        <span key={index}
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
                                ${Type.Ice === type && 'bg-blue-200'}  
                                ${Type.Psychic === type && 'bg-pink-700'}  
                                ${Type.Ghost === type && 'bg-gray-300'}  
                                ${Type.Steel === type && 'bg-gray-700'} `}
                        >
                            {type}
                        </span>
                    )}
                </div>
            </div>
        </motion.div>)
}

export default PokemonCard