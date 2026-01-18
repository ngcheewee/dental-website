import { inputProps } from "@/type/type"

export default function InputField({ type, placeholder, label }: inputProps) {
  return (
    <div className="grid gap-2">
      <label className="font-semibold text-lg">{label}</label>
      <input type={type} placeholder={placeholder} className="px-5 py-3 border border-primary-400 rounded-lg bg-primary-100/20 hover:bg-primary-100/35 placeholder-gray-600"/>
    </div>
  )
}
