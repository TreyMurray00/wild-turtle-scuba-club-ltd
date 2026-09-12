import { useState, type FormEvent } from 'react'

type FormState = { name: string; email: string; phone: string; dates: string; certification: string; message: string }

const initialState: FormState = { name: '', email: '', phone: '', dates: '', certification: '', message: '' }

export function EnquiryForm({ email }: { email?: string }) {
  const [form, setForm] = useState<FormState>(initialState)
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const update = (field: keyof FormState, value: string) => setForm((current) => ({ ...current, [field]: value }))

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError('')
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please add your name, email address and enquiry before sending.')
      return
    }
    if (!email) {
      setError('The dive team email is not configured yet. Please use one of the contact options above.')
      return
    }
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.phone && `Phone: ${form.phone}`,
      form.dates && `Preferred dates: ${form.dates}`,
      form.certification && `Experience / certification: ${form.certification}`,
      '',
      form.message,
    ].filter(Boolean).join('\n')
    setSubmitted(true)
    window.location.href = `mailto:${email}?subject=${encodeURIComponent('Tobago dive enquiry')}&body=${encodeURIComponent(body)}`
  }

  const fieldClass = 'w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/55 outline-none focus:border-white focus:ring-2 focus:ring-white/30'

  return (
    <form onSubmit={handleSubmit} className="mt-12 mx-auto max-w-4xl rounded-3xl border border-white/15 bg-white/[0.08] p-5 md:p-8 text-left backdrop-blur-sm" noValidate>
      <div className="mb-6"><h3 className="font-serif text-2xl md:text-3xl">Send an enquiry</h3><p className="mt-2 text-sm text-white/70">Your email app will open with the details filled in; this website does not store form submissions.</p></div>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm font-medium">Name<span className="sr-only"> (required)</span><input required value={form.name} onChange={(event) => update('name', event.target.value)} className={`${fieldClass} mt-2`} placeholder="Your name" /></label>
        <label className="text-sm font-medium">Email<span className="sr-only"> (required)</span><input required type="email" value={form.email} onChange={(event) => update('email', event.target.value)} className={`${fieldClass} mt-2`} placeholder="you@example.com" /></label>
        <label className="text-sm font-medium">Phone (optional)<input type="tel" value={form.phone} onChange={(event) => update('phone', event.target.value)} className={`${fieldClass} mt-2`} placeholder="Your phone number" /></label>
        <label className="text-sm font-medium">Preferred dates<input value={form.dates} onChange={(event) => update('dates', event.target.value)} className={`${fieldClass} mt-2`} placeholder="For example, 12–18 June" /></label>
        <label className="text-sm font-medium md:col-span-2">Experience or certification
          <select value={form.certification} onChange={(event) => update('certification', event.target.value)} className={`${fieldClass} mt-2`}>
            <option value="" className="text-foreground">Choose an option</option><option className="text-foreground">I am new to diving</option><option className="text-foreground">Open Water certified</option><option className="text-foreground">Advanced or professional diver</option><option className="text-foreground">I am interested in PADI certification</option>
          </select>
        </label>
        <label className="text-sm font-medium md:col-span-2">How can we help?<span className="sr-only"> (required)</span><textarea required value={form.message} onChange={(event) => update('message', event.target.value)} className={`${fieldClass} mt-2 min-h-28 resize-y`} placeholder="Tell us what you would like to plan..." /></label>
      </div>
      {error && <p role="alert" className="mt-4 text-sm text-amber-100">{error}</p>}
      {submitted && !error && <p role="status" className="mt-4 text-sm text-white/80">Your email app should open with the enquiry ready to send.</p>}
      <button type="submit" className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-semibold text-accent-foreground transition hover:bg-white/90">Prepare my enquiry</button>
    </form>
  )
}
