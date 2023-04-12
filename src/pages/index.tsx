import PokemonCard from '@/components/PokemonCard'
import { Pokemon } from '@/types'
import { useState } from 'react'
import getPokemons from '../lib/getPokemons'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import Loader from '@/components/Loader'
import Header from '@/components/Header'

// const inter = Inter({ subsets: ['latin'] })
const PAGE = 1

export default function Home({ data }: any) {
  const { scrollY, scrollYProgress } = useScroll()

  const [loader, setLoader] = useState(false)
  const [pokemons, setPokemons] = useState(data)
  const [page, setPage] = useState(PAGE)

  // when scroll value at end of page
  useMotionValueEvent(scrollYProgress, "change", async (latest) => {
    if (pokemons.length < 151) {
      setLoader(true)
      if (latest >= .9) {
        const { pokemons } = await getPokemons(20 * page)
        setPokemons(pokemons)
        setPage(page + 1)
      }
      setLoader(false)
    }
  })

  if (data === null) return "empty"
  if (!data) return "loading"

  return (<>
    <Header />
    <div className='bg-slate-200 w-full xs:p-1 md:p-12'>
      <div className='flex flex-col gap-4 justify-center items-center'>
        <div className='flex justify-center'>
          <div className='grid xs:grid-cols-2 md:grid-cols-4 col-span-4 gap-4 shadow p-4 bg-slate-50'>
            {pokemons && pokemons.length > 0 && pokemons.map((pokemon: Pokemon, index: number) =>
              <PokemonCard pokemon={pokemon} key={index} />
            )}
          </div>
        </div>
        {loader && <Loader />}
      </div>
    </div>
  </>
  )
}

// buil time rendering FIRST 20 POKEMONS
export async function getStaticProps() {
  const { pokemons } = await getPokemons(0)
  return {
    props: {
      data: pokemons,
    }
  }
}