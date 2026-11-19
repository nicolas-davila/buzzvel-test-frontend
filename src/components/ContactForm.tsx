"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { contact } from "@/data/contact";

type FormValues = {
    name: string;
    email: string;
    message: string;
};

type FormErrors = Partial<FormValues>;

const emptyValues: FormValues = { name: "", email: "", message: "" };

const inputClasses =
    "w-full rounded-lg border border-line bg-background px-4 py-3 text-sm leading-6 text-foreground placeholder:text-subtle focus-visible:outline-2 focus-visible:outline-primary";

function validate(values: FormValues): FormErrors {
    const errors: FormErrors = {};

    if (values.name.trim().length < 2) {
        errors.name = "Please enter your full name.";
    }
    if (!/^\S+@\S+\.\S+$/.test(values.email)) {
        errors.email = "Please enter a valid email address.";
    }
    if (values.message.trim().length < 10) {
        errors.message = "Your question needs at least 10 characters.";
    }

    return errors;
}

export default function ContactForm() {
    const [values, setValues] = useState<FormValues>(emptyValues);
    const [errors, setErrors] = useState<FormErrors>({});
    const [sent, setSent] = useState(false);

    function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
        setSent(false);
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const newErrors = validate(values);
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            // Mock submit: there is no backend, so we only show the success message
            setSent(true);
            setValues(emptyValues);
        }
    }

    return (
        <div className="w-full rounded-2xl border border-line bg-white p-6 shadow-[0_12px_32px_rgba(23,27,44,0.04)] sm:p-10 lg:w-[540px]">
            <h3 className="font-heading text-xl leading-8 font-bold">{contact.formTitle}</h3>
            <p className="text-sm leading-6 text-muted">{contact.formDescription}</p>

            <form onSubmit={handleSubmit} noValidate className="mt-6 flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm leading-6 font-bold">
                        Full name
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your name"
                        value={values.name}
                        onChange={handleChange}
                        aria-invalid={errors.name ? true : undefined}
                        aria-describedby={errors.name ? "name-error" : undefined}
                        className={inputClasses}
                    />
                    {errors.name && (
                        <p id="name-error" className="text-sm leading-6 text-red-600">{errors.name}</p>
                    )}
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm leading-6 font-bold">
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="youremail@example.com"
                        value={values.email}
                        onChange={handleChange}
                        aria-invalid={errors.email ? true : undefined}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        className={inputClasses}
                    />
                    {errors.email && (
                        <p id="email-error" className="text-sm leading-6 text-red-600">{errors.email}</p>
                    )}
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm leading-6 font-bold">
                        Your question
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Tell us how we can help..."
                        value={values.message}
                        onChange={handleChange}
                        aria-invalid={errors.message ? true : undefined}
                        aria-describedby={errors.message ? "message-error" : undefined}
                        className={`${inputClasses} h-[120px] resize-none`}
                    />
                    {errors.message && (
                        <p id="message-error" className="text-sm leading-6 text-red-600">{errors.message}</p>
                    )}
                </div>

                <button
                    type="submit"
                    className="w-full rounded-lg bg-primary px-7 py-3.5 text-center text-sm leading-6 font-bold text-white transition-colors duration-200 hover:bg-primary/90 motion-reduce:transition-none"
                >
                    Send message
                </button>

                <p role="status" className={sent ? "text-sm leading-6 font-bold text-primary" : "sr-only"}>
                    {sent ? contact.successMessage : ""}
                </p>
            </form>
        </div>
    );
}
