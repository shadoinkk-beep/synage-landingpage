"use client";

import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import ArrowSlideButton from "@/components/common/ArrowSlideButton";
import emailjs from "@emailjs/browser";

export default function ContactUs() {
  const [activeForm, setActiveForm] = useState<"contact" | "consultation">(
    "contact"
  );

  const [contactPhone, setContactPhone] = useState("");
  const [consultationPhone, setConsultationPhone] = useState("");
  const [consultationDate, setConsultationDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(false);

  /* ================= EMAIL SEND ================= */

const sendEmail = async (data: any) => {

  if (loading) return; // prevent double send

  try {

    setLoading(true);

    await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      data,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    );

    setToast(true);

    setTimeout(() => setToast(false), 4000);

  } catch (err) {

    console.error(err);
    alert("Failed to send message");

  } finally {

    setLoading(false);

  }

};

  /* ================= CONTACT SUBMIT ================= */
const handleContactSubmit = (e: any) => {

  e.preventDefault();

  if (loading) return;

  if (!contactPhone) {
    alert("Phone number required");
    return;
  }

  const formData = new FormData(e.target);

const data = {
  form_type: "Contact Form",
  name: formData.get("name"),
  phone: contactPhone,
  email: formData.get("email"),
  company: formData.get("company"),
  message: formData.get("message"),
};

  sendEmail(data);

  e.target.reset();
  setContactPhone("");

};

  /* ================= CONSULTATION SUBMIT ================= */

const handleConsultSubmit = (e: any) => {

  e.preventDefault();

  if (loading) return;

  if (!consultationPhone) {
    alert("Phone number required");
    return;
  }

  if (!consultationDate || !timeSlot) {
    alert("Please select consultation date and time slot");
    return;
  }

  const formData = new FormData(e.target);

const data = {
  form_type: "Consultation Booking",
  name: formData.get("name"),
  phone: consultationPhone,
  email: formData.get("email"),
  company: formData.get("company"),
  message: formData.get("message"),
  date: consultationDate,
  time_slot: timeSlot
};

  sendEmail(data);

  e.target.reset();

  setConsultationPhone("");
  setConsultationDate("");
  setTimeSlot("");

};

  return (
    <>
      {/* TOAST */}

      {toast && (
        <div className="fixed bottom-6 right-6 bg-black text-white px-6 py-4 rounded-xl shadow-xl z-50">
          ✅ Thank you! Our team will connect with you shortly.
        </div>
      )}

      <section id="contact" className="section section-dark">
        <div className="section-content grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">

          {/* LEFT */}

          <div className="flex flex-col h-full justify-between">
            <h2 className="font-heading text-4xl md:text-5xl text-white">
              Let&apos;s discuss your<br />requirements.
            </h2>

            <div className="space-y-6 mt-12">

              <div className="bg-[#F9F6EF] rounded-2xl p-6">
                <button
                  onClick={() => setActiveForm("consultation")}
                  className="w-full flex items-center justify-between"
                >
                  <h4 className="font-body font-semibold text-black">
                    Book A Free Consultation
                  </h4>
                  <span className="text-2xl font-bold text-black">
                    {activeForm === "consultation" ? "−" : "+"}
                  </span>
                </button>
              </div>

              <div className="bg-[#F9F6EF] rounded-2xl p-6">
                <button
                  onClick={() => setActiveForm("contact")}
                  className="w-full flex items-center justify-between"
                >
                  <h4 className="font-body font-semibold text-black">
                    Contact Us
                  </h4>
                  <span className="text-2xl font-bold text-black">
                    {activeForm === "contact" ? "−" : "+"}
                  </span>
                </button>
              </div>

            </div>
          </div>

          {/* RIGHT */}

          <div className="bg-[#F9F6EF] rounded-2xl p-8">

            {/* CONTACT FORM */}

            {activeForm === "contact" && (
              <form className="space-y-6" onSubmit={handleContactSubmit}>

                <FormField required name="name" label="Name" placeholder="Enter your full name" />

                <PhoneField phone={contactPhone} setPhone={setContactPhone} required />

                <FormField required name="email" label="Email" type="email" placeholder="Enter your email address" />

                <FormField name="company" label="Company Name" placeholder="Enter your company name" />

                <TextareaField name="message" label="Purpose" placeholder="Enter anything you want to tell us." />

                <ArrowSlideButton
                  text={loading ? "Sending..." : "Submit Now"}
                  type="submit"
                  className={loading ? "opacity-60 pointer-events-none" : ""}
                />

              </form>
            )}

            {/* CONSULTATION FORM */}

            {activeForm === "consultation" && (
              <form className="space-y-6" onSubmit={handleConsultSubmit}>

                <FormField required name="name" label="Name" placeholder="Enter your full name" />

                <PhoneField phone={consultationPhone} setPhone={setConsultationPhone} required />

                <FormField required name="email" label="Email" type="email" placeholder="Enter your email address" />

                <FormField name="company" label="Company Name" placeholder="Enter your company name" />

                <div>
                  <label className="block text-[15px] font-semibold mb-2 text-black">
                    Select Date
                  </label>

                  <input
                    type="date"
                    min={new Date().toISOString().split("T")[0]}
                    value={consultationDate}
                    onChange={(e) => setConsultationDate(e.target.value)}
                    className="w-full rounded-xl border border-black/20 bg-[#F9F6EF] px-4 py-3 text-sm text-black outline-none focus:bg-[#EAF2FF]"
                  />
                </div>

                <div>
                  <label className="block text-[15px] font-semibold mb-2 text-black">
                    Select Time Slot
                  </label>

                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full rounded-xl border border-black/20 bg-[#F9F6EF] px-4 py-3 text-sm text-black outline-none focus:bg-[#EAF2FF]"
                  >
                    <option value="">Choose a time slot</option>
                    <option>9:00 – 9:45</option>
                    <option>9:45 – 10:30</option>
                    <option>10:30 – 11:15</option>
                    <option>11:15 – 12:00</option>
                    <option>12:00 – 12:45</option>
                    <option>12:45 – 1:30</option>
                    <option>1:30 – 2:15</option>
                    <option>2:15 – 3:00</option>
                    <option>3:00 – 3:45</option>
                    <option>3:45 – 4:30</option>
                    <option>4:30 – 5:15</option>
                    <option>5:15 – 6:00</option>
                  </select>
                </div>

                <TextareaField
                  name="message"
                  label="Consultation Details"
                  placeholder="Describe your consultation requirement."
                />

                <ArrowSlideButton
                  text={loading ? "Booking..." : "Book Consultation"}
                  type="submit"
                  className={loading ? "opacity-60 pointer-events-none" : ""}
                />

              </form>
            )}

          </div>
        </div>
      </section>
    </>
  );
}

/* ================= REUSABLE FIELDS ================= */

function FormField({
  label,
  placeholder,
  type = "text",
  name,
  required = false,
}: any) {
  return (
    <div>
      <label className="block text-[15px] font-semibold mb-2 text-black">
        {label}
      </label>
      <input
        required={required}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border text-black border-black/20 bg-[#F9F6EF] px-4 py-3 text-sm outline-none focus:bg-[#EAF2FF]"
      />
    </div>
  );
}

function TextareaField({ label, placeholder, name }: any) {
  return (
    <div>
      <label className="block text-[15px] font-semibold mb-2 text-black">
        {label}
      </label>
      <textarea
        name={name}
        rows={3}
        placeholder={placeholder}
        className="w-full rounded-xl border text-black border-black/20 bg-[#F9F6EF] px-4 py-3 text-sm resize-none outline-none focus:bg-[#EAF2FF]"
      />
    </div>
  );
}

function PhoneField({ phone, setPhone }: any) {
  return (
    <div>
      <label className="block text-[15px] font-semibold mb-2 text-black">
        Phone No.
      </label>
      <PhoneInput
        country="in"
        value={phone}
        onChange={setPhone}
        enableSearch
        inputProps={{ required: true }}
        containerStyle={{
          borderRadius: "12px",
          border: "1px solid rgba(0,0,0,0.2)",
          background: "#F9F6EF",
          padding: "6px 10px",
        }}
        inputStyle={{
          border: "none",
          background: "transparent",
          width: "100%",
          fontSize: "14px",
          color: "black",
        }}
      />
    </div>
  );
}