"use client"

import React from 'react'
import * as Yup from 'yup'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import Link from 'next/link'
import ClipEmailButton from '../Buttons/ClipEmailButton'

interface ContactProps {
    accessKey: string,
    telegram: string,
    email: string,
}

interface ContactForm {
    name: string
    email: string
    subject: string
    phone: string
    message: string
}

export default function ContactForm({ accessKey, telegram, email }: ContactProps) {
    const [message, setMessage] = React.useState<{ type: string, text: string } | null>(null)

    const initialValues: ContactForm = {
        name: "",
        email: "",
        subject: "",
        phone: "",
        message: "",
    }

    const validationSchema = Yup.object({
        name: Yup.string().required("Name cannot be empty"),
        email: Yup.string().email("Invalid email address").required("Email cannot be empty"),
        subject: Yup.string().required("Subject cannot be empty"),
        phone: Yup.string().required("Phone cannot be empty"),
        message: Yup.string().required("Message cannot be empty"),
    })

    const onSubmit = (values: ContactForm, { setSubmitting, resetForm }: { setSubmitting: (isSubmitting: boolean) => void, resetForm: () => void }) => {
        setSubmitting(true)

        const formData = new FormData()
        formData.append("name", values.name)
        formData.append("email", values.email)
        formData.append("subject", values.subject)
        formData.append("phone", values.phone)
        formData.append("message", values.message)
        formData.append("access_key", accessKey)

        fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        })
            .then(response => {
                if (response.ok) {
                    setMessage({ type: "success", text: "Message sent successfully" })
                    setSubmitting(false)
                    resetForm()
                } else {
                    setMessage({ type: "error", text: "Failed to send message" })
                    setSubmitting(false)
                }
            })
            .catch(() => {
                setMessage({ type: "error", text: "Failed to send message" })
                setSubmitting(false)
            })
    }

    return (
        <div
            className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark lg:col-span-2 lg:p-10"
        >
            <div className="">
                <h2
                    className="text-3xl font-semibold leading-tight text-dark dark:text-light lg:text-[40px] lg:leading-tight"
                >
                    Let&apos;s 👋 <span className="text-primary">Work</span> Together
                </h2>
                <p className="mt-4 text-lg text-muted dark:text-light/70">
                    I&apos;m here to help if you&apos;re searching for a UI/UX Design to
                    bring your idea to life or a design partner to help take your
                    business to the next level.
                </p>
                {/* CTA buttons */}
                <div className="mt-6 flex flex-wrap gap-2">
                    <Link href="/contact" target="_blank"
                        className="inline-flex items-center gap-x-2 rounded-lg border border-transparent bg-primary px-4 py-3 font-medium text-white transition hover:bg-blue-600 focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50">
                        <svg width="20px" height="20px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.5 1.5L0.5 6.5L4.5 8.5L10.5 4.5L6.5 9.5L12.5 13.5L14.5 1.5Z" stroke="#ffffff" strokeLinejoin="round" />
                        </svg>
                        <span>Message Me</span>
                    </Link>

                    <ClipEmailButton email={email} />
                </div>
            </div>

            <div className="mt-10 lg:mt-14">
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    {
                        (props) => (
                            <Form className="space-y-6 rounded-lg bg-light p-6 dark:bg-dark-2 xl:p-12">
                                {
                                    message && (
                                        <div
                                            className={`p-4 rounded-lg text-white ${message.type === "success" ? "bg-green-500" : "bg-red-500"
                                                }`}
                                        >
                                            {message.text}
                                        </div>
                                    )
                                }

                                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                    <div className="">
                                        <label
                                            htmlFor="name"
                                            className="mb-2 block text-sm font-medium text-dark dark:text-light"
                                        >
                                            Name
                                        </label>
                                        <Field
                                            type="text"
                                            id="name"
                                            name="name"
                                            placeholder="Enter your name"
                                            className={`
                                                block w-full rounded-lg border border-gray-200 bg-white px-6 py-4 text-base outline-none transition focus:border-dark focus:ring focus:ring-dark/20 disabled:pointer-events-none disabled:opacity-50 dark:border-dark dark:bg-black dark:text-white dark:focus:border-muted dark:focus:ring-white/20
                                                ${props.errors.name && props.touched.name ? 'border-red-500' : ''}
                                            `}
                                        />

                                        <ErrorMessage name="name" component="p" className="text-red-500 text-sm mt-1" />
                                    </div>
                                    <div className="">
                                        <label
                                            htmlFor="email"
                                            className="mb-2 block text-sm font-medium text-dark dark:text-light"
                                        >
                                            Email
                                        </label>
                                        <Field
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="Enter your email"
                                            className={`
                                                block w-full rounded-lg border border-gray-200 bg-white px-6 py-4 text-base outline-none transition focus:border-dark focus:ring focus:ring-dark/20 disabled:pointer-events-none disabled:opacity-50 dark:border-dark dark:bg-black dark:text-white dark:focus:border-muted dark:focus:ring-white/20
                                                ${props.errors.email && props.touched.email ? 'border-red-500' : ''}
                                            `}
                                        />

                                        <ErrorMessage name="email" component="p" className="text-red-500 text-sm mt-1" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                    <div className="">
                                        <label
                                            htmlFor="subject"
                                            className="mb-2 block text-sm font-medium text-dark dark:text-light"
                                        >
                                            Subject
                                        </label>
                                        <Field
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            placeholder="Subject"
                                            className={`
                                                block w-full rounded-lg border border-gray-200 bg-white px-6 py-4 text-base outline-none transition focus:border-dark focus:ring focus:ring-dark/20 disabled:pointer-events-none disabled:opacity-50 dark:border-dark dark:bg-black dark:text-white dark:focus:border-muted dark:focus:ring-white/20
                                                ${props.errors.subject && props.touched.subject ? 'border-red-500' : ''}    
                                            `}
                                        />

                                        <ErrorMessage name="subject" component="p" className="text-red-500 text-sm mt-1" />
                                    </div>

                                    <div className="">
                                        <label
                                            htmlFor="phone"
                                            className="mb-2 block text-sm font-medium text-dark dark:text-light"
                                        >
                                            Phone
                                        </label>

                                        <Field
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            placeholder="Enter your phone number"
                                            className={`
                                                block w-full rounded-lg border border-gray-200 bg-white px-6 py-4 text-base outline-none transition focus:border-dark focus:ring focus:ring-dark/20 disabled:pointer-events-none disabled:opacity-50 dark:border-dark dark:bg-black dark:text-white dark:focus:border-muted dark:focus:ring-white/20
                                                ${props.errors.phone && props.touched.phone ? 'border-red-500' : ''}
                                            `}
                                        />

                                        <ErrorMessage name="phone" component="p" className="text-red-500 text-sm mt-1" />
                                    </div>
                                </div>

                                <div className="">
                                    <label
                                        htmlFor="message"
                                        className="mb-2 block text-sm font-medium text-dark dark:text-light"
                                    >
                                        Message
                                    </label>

                                    <Field
                                        as="textarea"
                                        id="message"
                                        name="message"
                                        placeholder="Type details about your inquiry"
                                        rows={4}
                                        className={`
                                            block w-full rounded-lg border border-gray-200 bg-white px-6 py-4 text-base outline-none transition focus:border-dark focus:ring focus:ring-dark/20 disabled:pointer-events-none disabled:opacity-50 dark:border-dark dark:bg-black dark:text-white dark:focus:border-muted dark:focus:ring-white/20
                                            ${props.errors.message && props.touched.message ? 'border-red-500' : ''}
                                        `}
                                    />

                                    <ErrorMessage name="message" component="p" className="text-red-500 text-sm mt-1" />
                                </div>

                                <button
                                    type="submit"
                                    className="inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-transparent bg-primary px-6 py-4 text-center font-medium text-white transition hover:bg-blue-600 focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50"
                                    disabled={props.isSubmitting}
                                >
                                    <span>Send Message</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 20 20"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        className="h-5 w-5"
                                    >
                                        <path d="M17.5 11.667v-5h-5" />
                                        <path d="m17.5 6.667-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </button>

                                <div className="status alert hidden"></div>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        </div>
    )
}
