import { contactListItems, formDropdownItems, faqItems } from "@/data/data";
import InputField from "@/components/InputField"
import FaqCard from "@/components/FaqCard"

export default function Contact() {
  return (
    <>
      <section className="section">
        <div className="container grid lg:grid-cols-[0.7fr_1fr] items-start gap-14">
          {/* content */}
          <div>
            {/* Title */}
            <div className="space-y-3">
              <h2 className="title">Book an Appointment</h2>
              <p className="max-w-lg">
                Lorem ipsum dolor sit amet consectetur. Eget ligula pharetra vulputate ac dictumst. Lacus vitae diam.
              </p>
            </div>
            {/* list */}
            <div className="mt-8">
              <h3 className="card-title mb-5">More information</h3>
              <ul className="space-y-5">
                {contactListItems.map((item) => (
                  <li key={item.id} className="flex items-start gap-2.5">
                    {/* Icon */}
                    <span className="shrink-0 size-12 flex items-center justify-center bg-primary-100 text-primary-600 rounded-lg">
                      <item.icon size={30} />
                    </span>
                    {/* content */}
                    <div>
                      <h3 className="card-title">{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <form action="" className="border border-primary-200 px-6 py-9 rounded-lg space-y-7">
            {/* Wrapper */}
            <div className="grid gap-5 md:grid-cols-2 lg:md:grid-cols-2" >
              <InputField label="Name" placeholder="Full Name" type="text" />
              <InputField label="Email" placeholder="email@example.com" type="email" />
            </div>

            {/* Wrapper */}
            <div className="grid gap-5 md:grid-cols-2">
              <InputField label="Phone Number" placeholder="(123)-456-7890" type="text" /> 

              {/* Dropdown item */}
              <div className="grid gap-2">
                <label className="text-lg font-semibold">Services</label>
                <div className="px-5 py-3 border border-primary-400 rounded-lg bg-primary-100/20 hover:bg-primary-100/35 placeholder-gray-600">
                  <select className="w-full outline-none h-full">
                    {formDropdownItems.map((item, index) => (
                      <option key={index}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* textarea */}
            <div className="grid gap-2">
              <label className="text-lg font-semibold">Message</label>
              <textarea 
                placeholder="please describe what service you are in." 
                className="px-5 py-3 border border-primary-400 rounded-lg bg-primary-100/20 hover:bg-primary-100/35 placeholder-gray-600 resize-none h-[158px] w-full" 
              />
            </div>

            {/* btn */}
            <button className="primary-btn uppercase tracking-wider">Submit</button>
          </form>
        </div>
      </section>

      {/* Faq */}
      <section className="section">
        <div className="container">
          {/* Title */}
          <div className="text-center max-w-xl mx-auto mb-8 space-x-1.5">
            <p className="subtitle">FAQS</p>
            <h2 className="title">Frequently Asked Questions</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio quidem quasi asperiores eveniet accusantium.
            </p>
          </div>
          {/* Wrapper */}
          <div className="border bg-primary-200 max-w-3xl mx-auto rounded-lg p-9 divide-y divide-primary-200 bg-white">
            {faqItems.map((item) => (
              <FaqCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
