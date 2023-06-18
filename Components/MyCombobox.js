'use client';

import { useState } from 'react'
import { Combobox } from '@headlessui/react'

const people = [
    { id: 1, name: 'Wade Cooper' },
    { id: 2, name: 'Arlene Mccoy' },
    { id: 3, name: 'Devon Webb' },
    { id: 4, name: 'Tom Cook' },
    { id: 5, name: 'Tanya Fox' },
    { id: 6, name: 'Hellen Schmidt' },
  ]

export default function MyCombobox({list}) {
    const [selected, setSelected] = useState(people[0])
    const [query, setQuery] = useState('')

    return <div>
        <Combobox value={selected} onChange={setSelected}>
            <Combobox.Input
              className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
              displayValue={(person) => person.name}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              Ю
            </Combobox.Button>
        </Combobox>
    </div>;
  }