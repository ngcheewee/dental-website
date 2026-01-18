"use client";
import { useState } from "react"
import { faqCardProps } from "@/type/type"
import { RiAddLine, RiSubtractLine } from "@remixicon/react"

export default function faqItems({title, text}: faqCardProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const handleClick = () => setIsOpen(!isOpen);
  return (
    <div className="my-5">
      {/* Trigger */}
      <div className="flex items-start gap-2">
        <button className="size-8 flex items-center justify-center bg-primary-200 rounded-lg text-primary-600 shrint-0 hover:bg-primary-300 transition-colors" onClick={handleClick}>
            {isOpen ? <RiSubtractLine /> :  <RiAddLine />}
        </button>
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>

      {/* Text */}
      <div className={`max-h-0 overflow-y-hidden transoition-[max-height] ${isOpen ? "max-h-60 overflow-y-auto" : ""}`}>
        <p className="p-5">{text}</p>
      </div>    
    </div>
  )
}
