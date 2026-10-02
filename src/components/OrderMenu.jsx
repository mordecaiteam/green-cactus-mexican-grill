import { ExternalLink, X } from 'lucide-react'
import { siteInfo } from '../data/site'

export default function OrderMenu({ open, onClose }) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-[70] grid place-items-center bg-forest/70 px-5 backdrop-blur-sm" onMouseDown={onClose}>
      <div className="w-full max-w-md rounded-[2rem] bg-cream p-7 shadow-2xl" onMouseDown={(event) => event.stopPropagation()} role="dialog" aria-modal="true" aria-label="Choose an ordering service">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="eyebrow">Pickup or delivery</p>
            <h2 className="mt-2 font-display text-4xl text-forest">Order your favorites</h2>
          </div>
          <button className="rounded-full border border-forest/15 p-2 text-forest transition hover:bg-forest hover:text-white" onClick={onClose} aria-label="Close order menu">
            <X size={20} />
          </button>
        </div>
        <p className="mt-4 text-sm leading-6 text-ink/65">Choose your preferred delivery partner. Availability and pricing are managed by each service.</p>
        <div className="mt-7 grid gap-3">
          <a className="order-provider" href={siteInfo.doorDashUrl} target="_blank" rel="noreferrer">DoorDash <ExternalLink size={17} /></a>
          <a className="order-provider" href={siteInfo.uberEatsUrl} target="_blank" rel="noreferrer">Uber Eats <ExternalLink size={17} /></a>
        </div>
      </div>
    </div>
  )
}
