import React from 'react'
import { useSelector } from 'react-redux'

import List from './../components/List'
import OptionsPanel from './../components/OptionsPanel'

export default function Completed() {
  const state = useSelector((state) =>
    state.notes.filter((s) => s.type === 'COMPLETED')
  )

  return (
    <>
      <hr className="my-2" />
      <div className="w-full h-10 flex flex-row justify-start items-center">
        <OptionsPanel />
      </div>

      <List
        items={state}
        onEmptyMessage="The lazier a man is, the more he plans to do tomorrow."
      />
    </>
  )
}
