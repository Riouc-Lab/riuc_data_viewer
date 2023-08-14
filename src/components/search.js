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
    <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg
            className="w-5 h-5 text-gray-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
        >
            <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-4.35-4.35"
            />
            <circle cx={11} cy={11} r={8} />
        </svg>
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