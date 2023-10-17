import React, { useState } from "react"
import Image from "next/image"

const CustomCamera = () => {
  const [source, setSource] = useState("")
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
        <div className="flex border-1">
          <Image src={source} width={102} height={102} alt="snap"></Image>
        </div>
      )}
      <input
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
