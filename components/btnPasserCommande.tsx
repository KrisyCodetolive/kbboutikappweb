"use client"

import { forwardRef } from "react"

const Ordercta = forwardRef<HTMLButtonElement, React.ComponentProps<"button">>(
  (props, ref) => {
    return (
      <div className="fixed bottom-6 left-0 right-0 flex justify-center z-50 p-5">
        <button
          ref={ref}
          {...props}
          className="
            bg-purple-600 
            text-white 
            w-full
            text-lg 
            font-semibold 
            px-8 
            py-4 
            rounded-full 
            shadow-lg 
            hover:bg-purple-700 
            transition 
            active:scale-95 
            active:bg-gray-500
          "
        >
          Passer commande
        </button>
      </div>
    )
  }
)

Ordercta.displayName = "Ordercta"

export default Ordercta
