export default function InfoCard({ label, value, span = false }) {
  return (
    <div className={`info-card ${span ? 'sm:col-span-2' : ''}`}>
      <p className="eyebrow mb-2">{label}</p>
      <p className="text-base font-medium text-white">{value}</p>
    </div>
  )
}
