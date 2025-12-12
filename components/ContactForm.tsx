import React, { useState } from "react";
import { data } from "../mock/mock";

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export const ContactForm: React.FC = () => {
  const [form, setForm] = useState<FormState>(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear status when user starts typing
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: "" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    // FormSubmit - Simple free email service
    // Works on Vercel - all client-side, no server needed
    const recipientEmail = data.email || "iushiverse11@gmail.com";
    const formSubmitUrl = `https://formsubmit.co/ajax/${encodeURIComponent(
      recipientEmail
    )}`;

    const formData = {
      name: form.name,
      email: form.email,
      phone: form.phone || "Not provided",
      message: form.message,
      _subject: `New Contact Form Submission from ${form.name}`,
      _template: "box",
    };

    try {
      const response = await fetch(formSubmitUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Thanks for reaching out! I'll get back to you soon.",
        });
        setForm(initialState);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again or email me directly.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-4 flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-950/70 p-5 shadow-lg shadow-black/40"
    >
      <div className="flex flex-col gap-3 md:flex-row">
        <label className="flex flex-1 flex-col gap-1 text-xs text-slate-300">
          Name*
          <input
            required
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            className="rounded-xl border border-slate-700 bg-slate-950/80 px-3 py-2 text-sm text-slate-50 outline-none transition focus:border-amber-400 focus:ring-1 focus:ring-amber-400/60"
          />
        </label>
        <label className="flex flex-1 flex-col gap-1 text-xs text-slate-300">
          E-Mail*
          <input
            required
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="rounded-xl border border-slate-700 bg-slate-950/80 px-3 py-2 text-sm text-slate-50 outline-none transition focus:border-amber-400 focus:ring-1 focus:ring-amber-400/60"
          />
        </label>
      </div>

      <div className="flex flex-col gap-3 md:flex-row">
        <label className="flex flex-1 flex-col gap-1 text-xs text-slate-300">
          Phone
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+91-XXXXXXXXXX"
            className="rounded-xl border border-slate-700 bg-slate-950/80 px-3 py-2 text-sm text-slate-50 outline-none transition focus:border-amber-400 focus:ring-1 focus:ring-amber-400/60"
          />
        </label>
      </div>

      <label className="flex flex-col gap-1 text-xs text-slate-300">
        Message*
        <textarea
          required
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          placeholder="Write your message here..."
          className="rounded-xl border border-slate-700 bg-slate-950/80 px-3 py-2 text-sm text-slate-50 outline-none transition focus:border-amber-400 focus:ring-1 focus:ring-amber-400/60 resize-none"
        />
      </label>

      {/* Status Message */}
      {submitStatus.type && (
        <div
          className={`rounded-xl px-4 py-3 text-sm ${
            submitStatus.type === "success"
              ? "bg-green-500/20 text-green-400 border border-green-500/30"
              : "bg-red-500/20 text-red-400 border border-red-500/30"
          }`}
        >
          {submitStatus.message}
        </div>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="mt-1 inline-flex items-center justify-center self-start rounded-full bg-gradient-to-r from-amber-300 to-orange-400 px-6 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-950 shadow-lg shadow-orange-500/40 transition hover:brightness-105 active:translate-y-[1px] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};
