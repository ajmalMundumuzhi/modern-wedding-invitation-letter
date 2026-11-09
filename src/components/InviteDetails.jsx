import React, { useState } from 'react';
import { Bouquet } from './Florals';
import { CALL_NUMBER, INVITE, waLink } from '../config';

const inputCls =
  'mt-1.5 w-full rounded-md border border-ink/25 bg-white px-3 py-3 font-sans text-sm text-ink outline-none transition-colors focus:border-plum';

const Field = ({ label, required, children }) => (
  <label className="block text-left">
    <span className="font-serif text-base italic text-ink/80">
      {label}
      {required && '*'}
    </span>
    {children}
  </label>
);

const InviteDetails = ({ onBack }) => {
  const [form, setForm] = useState({ name: '', phone: '', attending: 'yes', guests: '1', message: '' });
  const [sentUrl, setSentUrl] = useState(null);
  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const yes = form.attending === 'yes';
    const text = [
      `RSVP – ${INVITE.groom} & ${INVITE.bride}`,
      `Name: ${form.name.trim()}`,
      `Mobile: ${form.phone.trim()}`,
      `Attending: ${yes ? 'Joyfully accepts' : 'Regretfully declines'}`,
      yes ? `Guests: ${form.guests}` : null,
      form.message.trim() ? `Message: ${form.message.trim()}` : null,
    ]
      .filter(Boolean)
      .join('\n');
    const url = waLink(text);
    window.open(url, '_blank', 'noopener');
    setSentUrl(url);
  };

  return (
    <main className="min-h-[100svh] bg-white px-5 pb-16 pt-6">
      <div className="mx-auto max-w-md">
        <button
          type="button"
          onClick={onBack}
          className="font-serif text-xs font-semibold uppercase tracking-[0.25em] text-ink underline underline-offset-4"
        >
          Click to go back
        </button>

        {/* Header card */}
        <div
          className="relative mx-auto mt-6 flex w-full bg-[#efeeec] shadow-sm"
          style={{ aspectRatio: '2.3 / 1', containerType: 'inline-size' }}
        >
          <div className="flex flex-1 flex-col items-start justify-center pl-[9%] text-ink">
            <span className="font-serif font-semibold uppercase leading-none" style={{ fontSize: '9cqw', letterSpacing: '0.1em' }}>
              Share
            </span>
            <span className="font-script leading-none text-plum" style={{ fontSize: '13cqw' }}>Your</span>
            <span className="font-serif font-semibold uppercase leading-none" style={{ fontSize: '9cqw', letterSpacing: '0.1em' }}>
              Details
            </span>
          </div>
          <div className="relative w-[32%] bg-sage">
            <Bouquet className="absolute -left-[45%] top-[8%] w-[125%]" />
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-sm text-center font-sans text-[13px] font-light leading-relaxed text-ink/85">
          Thank you for taking the time to reply! To make things easier for a group, please nominate a primary guest to
          submit <strong className="font-semibold underline underline-offset-2">one form on behalf of your party.</strong>
          <br />
          <br />
          If you need to reach us, call{' '}
          <a href={`tel:${CALL_NUMBER}`} className="underline underline-offset-2">{CALL_NUMBER.replace('+91', '+91 ')}</a>.
        </p>

        {/* Where and when */}
        <section className="mt-10 space-y-4">
          {INVITE.events.map((ev) => (
            <article key={ev.title} className="border border-plum/20 px-5 py-6 text-center">
              <p className="font-serif text-xs font-semibold uppercase tracking-[0.3em] text-ink/70">{ev.title}</p>
              <p className="mt-2 font-script text-4xl leading-none text-plum">{ev.time}</p>
              <p className="mt-2 font-serif text-sm uppercase tracking-[0.15em] text-ink/70">{ev.date}</p>
              <p className="mt-3 font-sans text-[13px] font-light leading-relaxed">{ev.venue}</p>
              <a
                href={ev.map}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block font-serif text-xs font-semibold uppercase tracking-[0.25em] text-plum underline underline-offset-4"
              >
                View map
              </a>
            </article>
          ))}
        </section>

        {/* Families */}
        <section className="mt-10 space-y-6 text-center">
          {INVITE.families.map((f) => (
            <div key={f.name}>
              <p className="font-script text-4xl leading-none text-ink">{f.name}</p>
              <p className="mt-1 font-serif text-xs uppercase tracking-[0.3em] text-plum">{f.relation}</p>
              <p className="mt-1 font-sans text-[13px] font-medium">{f.parents}</p>
              <p className="font-serif text-sm italic text-ink/60">{f.home}</p>
            </div>
          ))}
        </section>

        {/* RSVP form */}
        <section className="mt-12">
          {sentUrl ? (
            <div className="border border-plum/25 px-6 py-10 text-center">
              <p className="font-script text-5xl text-plum">Thank you!</p>
              <p className="mt-3 font-sans text-[13px] font-light leading-relaxed">
                WhatsApp should have opened with your reply ready to send. Please press send there to confirm.
              </p>
              <a
                href={sentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block font-serif text-xs font-semibold uppercase tracking-[0.25em] text-plum underline underline-offset-4"
              >
                Open WhatsApp again
              </a>
              <button
                type="button"
                onClick={() => setSentUrl(null)}
                className="mt-4 block w-full font-serif text-xs uppercase tracking-[0.25em] text-ink/60 underline underline-offset-4"
              >
                Edit my reply
              </button>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-5">
              <Field label="Primary Guest Name" required>
                <input className={inputCls} value={form.name} onChange={set('name')} required autoComplete="name" />
              </Field>
              <Field label="Mobile Number" required>
                <input className={inputCls} value={form.phone} onChange={set('phone')} required type="tel" autoComplete="tel" inputMode="tel" />
              </Field>

              <fieldset className="grid grid-cols-2 gap-3">
                <legend className="sr-only">Will you attend?</legend>
                {[
                  ['yes', 'Joyfully accept'],
                  ['no', 'Regretfully decline'],
                ].map(([value, label]) => (
                  <label key={value} className="cursor-pointer">
                    <input
                      type="radio"
                      name="attending"
                      value={value}
                      checked={form.attending === value}
                      onChange={set('attending')}
                      className="peer sr-only"
                    />
                    <span className="block rounded-full border border-ink/25 px-3 py-3 text-center font-serif text-sm peer-checked:border-plum peer-checked:bg-plum peer-checked:text-white peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-plum/50">
                      {label}
                    </span>
                  </label>
                ))}
              </fieldset>

              {form.attending === 'yes' && (
                <Field label="Number of Guests">
                  <select className={inputCls} value={form.guests} onChange={set('guests')}>
                    {Array.from({ length: 8 }, (_, i) => i + 1).map((n) => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                  </select>
                </Field>
              )}

              <Field label="A message for the couple">
                <textarea className={`${inputCls} min-h-24 resize-none`} value={form.message} onChange={set('message')} />
              </Field>

              <button
                type="submit"
                className="w-full rounded-full bg-plum py-4 font-serif text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-lg transition-transform active:scale-[0.98]"
              >
                Send RSVP
              </button>
            </form>
          )}
        </section>

        <p className="mx-auto mt-14 max-w-xs text-center font-serif text-base italic leading-relaxed text-ink/75">
          “{INVITE.verse.text}”
          <span className="mt-2 block text-xs font-semibold not-italic uppercase tracking-[0.35em] text-plum">
            {INVITE.verse.ref}
          </span>
        </p>
      </div>
    </main>
  );
};

export default InviteDetails;