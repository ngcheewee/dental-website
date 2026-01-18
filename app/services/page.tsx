import Link from "next/link"
import { servicesItems } from "@/data/data"
import ServicesCard from "@/components/ServicesCard"
import Cta from "@/components/Cta"

export default function Services() {
  return (
    <>
      <section className="section">
        <div className="container">
          {/* Title */}
          <div className="flex justify-between items-center gap-6 flex-wrap">
            <div className="space-y-6">
              <h2 className="title">Our Services</h2>
              <p className="max-w-md">
                Lorem ipsum dolor sit amet consectetur. Eget ligula pharetra vulputate ac dictumst. Lacus vitae diam.
              </p>
            </div>
            <Link href="/contact" className="primary-btn">BOOK AN APPOINTMENT</Link>
          </div>
          {/* Wrapper */}
          <div className="grid mt-16 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {servicesItems.map((item) => (
              <ServicesCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */ }
      <section className="section">
        <Cta />
      </section>
    </>
  )
}
