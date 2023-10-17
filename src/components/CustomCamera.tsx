import React, { useState } from "react"
import Image from "next/image"
import CancelIcon from "@mui/icons-material/Cancel"

const CustomCamera = () => {
  const [source, setSource] = useState<string | null>(null)
  const handleCapture = (target: any) => {
    if (target.files) {
      if (target.files.length !== 0) {
        const file = target.files[0]
        const newUrl = URL.createObjectURL(file)
        setSource(newUrl)
      }
    }
  }

  return (
    <div className="h-auto flex flex-col space-y-10">
      {source && (
        <div className="relative flex border-1 z-20">
          <button
            className="absolute -right-4 -top-6 rounded-full h-fit cursor-pointer"
            onClick={() => setSource(null)}
          >
            <CancelIcon />
          </button>
          <Image src={source} width={200} height={200} className="z-10" alt="snap"></Image>
        </div>
      )}
      <label
        htmlFor="icon-button-file"
        className="rounded-xl bg-slate-500 px-4 py-2 text-center"
      >
        {source === null ? "写真を撮る" : "写真を撮り直す"}
      </label>
      <input
        className="hidden"
        accept="image/*;capture=camera"
        id="icon-button-file"
        type="file"
        capture="environment"
        onChange={(e) => handleCapture(e.target)}
      />
    </div>
  )
}

export default CustomCamera
