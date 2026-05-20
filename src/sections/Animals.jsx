import { useState } from "react"

import Filters from "../components/Filters"
import SearchBar from "../components/SearchBar"
import PetCard from "../components/PetCard"

import { pets } from "../data/pets"

function Animals() {

  const [filtro, setFiltro] = useState("Todos")

  const petsFiltrados =
    filtro === "Todos"
      ? pets
      : pets.filter((pet) => pet.tipo === filtro)

  return (
    <section
      id="animais"
      className="pt-40 pb-24 px-6 bg-[#f5f7fb] scroll-mt-28"
    >
    <div className="container-default">

        {/* TÍTULO */}
        <div className="text-center">

          <p className="text-yellow-500 font-semibold tracking-widest">
            NOSSOS ANIMAIS
          </p>

          <h2 className="text-5xl font-bold mt-4 text-[#13294B]">
            Encontre seu novo melhor amigo
          </h2>

          <p className="text-gray-500 mt-4 text-xl">
            Cada animal tem uma história única e muito amor para dar.
          </p>

        </div>

        {/* FILTROS */}
        <div className="animals-top mt-14">

          <Filters
            filtro={filtro}
            setFiltro={setFiltro}
          />

          <SearchBar />

        </div>

        {/* CARDS */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {petsFiltrados.map((pet) => (
            <PetCard
              key={pet.id}
              pet={pet}
            />
          ))}

        </div>

      </div>
    </section>
  )
}

export default Animals