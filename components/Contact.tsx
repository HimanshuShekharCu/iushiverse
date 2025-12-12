import * as React from "react";
import { ContactForm } from "./ContactForm";
import { data } from "../mock/mock";

export const Contact: React.SFC = () => {
  return (
    <section className="py-8 col-span-10 col-start-2 col-end-12 text-center text-gray-600 font-light">
      <h1 className="text-4xl font-light text-gray-700 mb-8">Get in Touch</h1>
      <p className="text-base mb-6">
        Have a question or want to work together? Feel free to reach out!
      </p>
      <div className="max-w-2xl mx-auto">
        <ContactForm />
      </div>
      <div className="mt-8 text-sm">
        <p>Or reach out directly:</p>
        <a
          href={`mailto:${data.email}`}
          className="text-gray-700 hover:text-gray-900 underline"
        >
          {data.email}
        </a>
      </div>
    </section>
  );
};
