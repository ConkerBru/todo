import React from 'react'

export default function AddButton({ onClickHandler }) {
  return (
    <button
      onClick={onClickHandler}
      className="w-2/4 flex flex-row justify-end items-center font-semibold text-2xl mr-4 sm:mr-0"
    >
      <svg
        className="fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="black"
        width="18px"
        height="18px"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
      </svg>
      <span>Add TO-DO</span>
    </button>
  )
}
