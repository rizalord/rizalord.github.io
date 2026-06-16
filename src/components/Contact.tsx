"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { AlertCircle, CheckCircle2, LoaderCircle, Send } from "lucide-react";
import { contactNote, profile, socials } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Magnetic } from "@/components/ui/Magnetic";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { cn } from "@/lib/utils";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export function Contact({ accessKey }: { accessKey: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    setStatus("sending");
    setFeedback("");

    try {
      if (!accessKey) {
        throw new Error("Contact form is not configured yet.");
      }

      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          from_name: formData.get("name"),
          name: formData.get("name"),
          email: formData.get("email"),
          subject: `[Portfolio] ${formData.get("subject")}`,
          message: formData.get("message"),
          botcheck: formData.get("botcheck") || "",
        }),
      });
      const responseText = await response.text();
      let result: { success?: boolean; message?: string } | null = null;

      try {
        result = responseText ? JSON.parse(responseText) : null;
      } catch {
        throw new Error("Message service returned an unexpected response.");
      }

      if (!response.ok || !result?.success) {
        throw new Error(result?.message || "Message failed to send.");
      }

      setStatus("sent");
      setFeedback("Thanks, your message has been sent.");
      form.reset();
      setTimeout(() => {
        setStatus("idle");
        setFeedback("");
      }, 5000);
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "Message failed to send. Please try again."
      );
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden py-28 sm:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[40vh] w-[60vw] max-w-3xl -translate-x-1/2 rounded-full bg-[var(--color-accent)]/10 blur-[120px]"
      />

      <div className="section-shell container-px">
        <SectionHeading
          align="center"
          eyebrow="Contact"
          title="Got a project? Let's talk."
          description="I'm always open to discussing new ideas, freelance work, or full-time opportunities."
          className="mx-auto items-center"
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col justify-between gap-8 rounded-3xl border-hairline bg-[var(--color-surface)] p-8 shadow-soft">
              <div>
                <h3 className="text-lg font-semibold tracking-tight">
                  Contact info
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
                  I reply fastest over email. Tell me about your idea — no
                  matter how small.
                </p>
              </div>

              <a
                href={`mailto:${profile.email}`}
                className="group inline-flex items-center gap-2 text-lg font-medium text-[var(--color-accent)]"
              >
                <span className="border-b border-dashed border-[var(--color-accent)]/40 pb-0.5 transition-colors group-hover:border-[var(--color-accent)]">
                  {profile.email}
                </span>
              </a>

              <div>
                <p className="mb-3 text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">
                  Find me on
                </p>
                <div className="flex flex-wrap gap-2">
                  {socials.map((s) => (
                    <Magnetic key={s.label} strength={10}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={s.label}
                        className="grid h-11 w-11 place-items-center rounded-xl border-hairline bg-[var(--color-bg)] text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                      >
                        <SocialIcon name={s.icon} className="h-[18px] w-[18px]" />
                      </a>
                    </Magnetic>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-3" delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border-hairline bg-[var(--color-surface)] p-8 shadow-soft"
            >
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  label="Name"
                  name="name"
                  placeholder="Your name"
                  disabled={status === "sending"}
                />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="you@email.com"
                  disabled={status === "sending"}
                />
              </div>
              <div className="mt-5">
                <Field
                  label="Subject"
                  name="subject"
                  placeholder="What's this about?"
                  disabled={status === "sending"}
                />
              </div>
              <div className="mt-5">
                <label className="mb-2 block text-sm font-medium">Message</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  disabled={status === "sending"}
                  className="w-full resize-none rounded-xl border-hairline bg-[var(--color-bg)] px-4 py-3 text-sm outline-none transition-colors placeholder:text-[var(--color-muted)] focus:border-[var(--color-accent)] disabled:cursor-not-allowed disabled:opacity-60"
                />
              </div>

              {feedback && (
                <p
                  role="status"
                  aria-live="polite"
                  className={cn(
                    "mt-4 flex items-center gap-2 text-sm",
                    status === "error"
                      ? "text-red-500"
                      : "text-emerald-500"
                  )}
                >
                  {status === "error" ? (
                    <AlertCircle size={16} />
                  ) : (
                    <CheckCircle2 size={16} />
                  )}
                  {feedback}
                </p>
              )}

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <p className="max-w-xs text-xs text-[var(--color-muted)]">
                  {contactNote}
                </p>
                <Magnetic>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className={cn(
                      "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-[var(--color-accent-fg)] shadow-soft transition-transform hover:scale-[1.03] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100",
                      status === "sent"
                        ? "bg-emerald-500"
                        : "bg-[var(--color-accent)]"
                    )}
                  >
                    {status === "sending" ? (
                      <>
                        <LoaderCircle size={16} className="animate-spin" /> Sending
                      </>
                    ) : status === "sent" ? (
                      <>
                        <CheckCircle2 size={16} /> Sent!
                      </>
                    ) : (
                      <>
                        Send Message <Send size={15} />
                      </>
                    )}
                  </button>
                </Magnetic>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  disabled,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium">{label}</label>
      <input
        type={type}
        name={name}
        required
        placeholder={placeholder}
        disabled={disabled}
        className="w-full rounded-xl border-hairline bg-[var(--color-bg)] px-4 py-3 text-sm outline-none transition-colors placeholder:text-[var(--color-muted)] focus:border-[var(--color-accent)] disabled:cursor-not-allowed disabled:opacity-60"
      />
    </div>
  );
}
