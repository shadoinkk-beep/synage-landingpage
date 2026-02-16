"use client";

import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import ArrowSlideButton from "@/components/common/ArrowSlideButton";

export default function ContactUs() {
  const [activeForm, setActiveForm] = useState<"contact" | "consultation">(
    "contact"
  );

  const [contactPhone, setContactPhone] = useState("");
  const [consultationPhone, setConsultationPhone] = useState("");

  return (
    <section id="contact" className="section section-dark">
      <div className="section-content grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">

        {/* ================= LEFT SIDE ================= */}
        <div className="flex flex-col h-full justify-between">
          <h2 className="font-heading text-4xl md:text-5xl text-white">
            Let&apos;s discuss your<br />requirements.
          </h2>

          <div className="space-y-6 mt-12">

            {/* BOOK CONSULTATION */}
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

              {activeForm === "consultation" && (
                <p className="mt-4 text-sm text-black/80 leading-relaxed">
                  Book a private consultation with Synage to discuss your
                  investment goals, budget band, asset preference, and timeline.
                </p>
              )}
            </div>

            {/* CONTACT US */}
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

              {activeForm === "contact" && (
                <p className="mt-4 text-sm text-black/80 leading-relaxed">
                  Reach out to Synage for buying, selling, leasing, or managing
                  luxury real estate in Gurgaon and South Delhi.
                </p>
              )}
            </div>

          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="bg-[#F9F6EF] rounded-2xl p-8">

          {/* ================= CONTACT FORM ================= */}
          {activeForm === "contact" && (
            <form className="space-y-6">
              <FormField label="Name"  placeholder="Enter your full name" />

              <PhoneField
                phone={contactPhone}
                setPhone={setContactPhone}
              />

              <FormField
                label="Company Name"
                placeholder="Enter your company name"
              />

              <FormField
                label="Email"
                type="email"
                placeholder="Enter your email address"
              />

              <TextareaField
                label="Purpose"
                placeholder="Enter anything you want to tell us."
              />

              <ArrowSlideButton text="Submit Now" link="#" />
            </form>
          )}

          {/* ================= CONSULTATION FORM ================= */}
          {activeForm === "consultation" && (
            <form className="space-y-6">
              <FormField label="Name" placeholder="Enter your full name" />

              <PhoneField
                phone={consultationPhone}
                setPhone={setConsultationPhone}
              />

              <FormField
                label="Company Name"
                placeholder="Enter your company name"
              />

              <FormField
                label="Email"
                type="email"
                placeholder="Enter your email address"
              />

              <TextareaField
                label="Consultation Details"
                placeholder="Describe your consultation requirement."
              />

              <ArrowSlideButton text="Book Consultation" link="#" />
            </form>
          )}

        </div>
      </div>
    </section>
  );
}

/* ================= REUSABLE FIELDS ================= */

function FormField({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label className="block text-[15px] font-semibold mb-2 text-black">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border text-black border-black/20 bg-[#F9F6EF] px-4 py-3 text-sm outline-none transition focus:bg-[#EAF2FF]"
      />
    </div>
  );
}

function TextareaField({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <div>
      <label className="block text-[15px] font-semibold mb-2 text-black">
        {label}
      </label>
      <textarea
        rows={3}
        placeholder={placeholder}
        className="w-full rounded-xl border text-black border-black/20 bg-[#F9F6EF] px-4 py-3 text-sm resize-none outline-none transition focus:bg-[#EAF2FF]"
      />
    </div>
  );
}

function PhoneField({
  phone,
  setPhone,
}: {
  phone: string;
  setPhone: (v: string) => void;
}) {
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
          color:"black",
        }}
      />
    </div>
  );
}
