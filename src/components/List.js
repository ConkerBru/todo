import React from 'react'

import Note from './Note'

export default function List({ items, onEmptyMessage = '' }) {
  if (items.length === 0)
    return (
      <p className="w-full h-full p-4 mt-4 italic select-none">
        {onEmptyMessage}
      </p>
    )
  else
    return (
      <ul className="w-full h-full p-4 mt-4">
        {items.map((item, index) => (
          <li className="select-none" key={index}>
            <Note text={item.text} />
          </li>
        ))}
      </ul>
    )
}
