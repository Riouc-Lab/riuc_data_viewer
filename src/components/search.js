"use client";
import React, { useMemo, useRef, useState } from 'react'
import { createAutocomplete } from '@algolia/autocomplete-core'
import Link from 'next/link'
import{lista_proyectos} from '@utils/modelo_proyectos';

export default function Search() {
    const [inputValue, setInputValue] = useState('')
    const [suggestions, setSuggestions] = useState([])
    const [selectedSuggestion, setSelectedSuggestion] = useState(null)
    const autocomplete = useRef(
        createAutocomplete({
            onStateChange({ state }) {
                setSuggestions(state.suggestions)
                setSelectedSuggestion(state.selectedItem)
            },
            getSources() {
                return [
                    {
                        sourceId: 'lista_proyectos',
                        getItems() {
                            return lista_proyectos
                        },
                        getItemInputValue({ item }) {
                            return item.name
                        },
                        getItemUrl({ item }) {
                            return item.to
                        },
                    },
                ]
            },
            onSelectedItemChange({ item }) {

                if (!item) {
                    setInputValue('')
                    return
                }

                setInputValue(item.name)
            },
        })
    ).current

    const inputProps = useMemo(
        () => autocomplete.getInputProps({}),
        [autocomplete]
    )


return (
    <div className="w-full">
    <div className="">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            
        </div>
        <input
        className="block w-full py-2 pl-10 pr-3 text-sm text-black placeholder-gray-400 bg-white border border-black rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-black sm:text-sm"
                    type='search'
                    name='search'
                    placeholder='Ingrese el nombre del proyecto a buscar'
                    autoComplete='on'
        />
    </div>
    </div>
)

}