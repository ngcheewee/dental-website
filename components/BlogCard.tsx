import { blogCardProps } from "@/type/type";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ img, title, text, date }: blogCardProps) => {
  return (
    <div className="border border-primary-200 rounded-lg overflow-hidden">
        {/* img */}
        <div>
            <Image src={img} alt={title} width={389} height={217} className="w-full h-auto object-cover" />
        </div>
        {/* content */}
        <div className="p-5 space-y-2">
            <h3 className="card-title">{title}</h3>
            <p className="mb-4">{text}</p>
            <div className="flex items-center justify-between mt-auto">
                <p>{date}</p>
                <Link href="/blog" className="text-primary-500 hover:text-primary-600 transition-colors font-medium">Read More</Link>
            </div>
        </div>
    </div>
  )
}

export default BlogCard