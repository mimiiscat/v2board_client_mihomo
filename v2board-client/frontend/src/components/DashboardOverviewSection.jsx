import { formatCurrencyCents, getPlanNameById } from '../utils/appHelpers'

export function DashboardOverviewSection({ data, plans }) {
  if (!data) return null

  const rows = [
    ['设备限制', data.device_limit ?? '不限'],
    ['账户余额', formatCurrencyCents(data.balance)],
    ['佣金余额', formatCurrencyCents(data.commission_balance)],
    ['当前套餐', getPlanNameById(plans, data.plan_id)],
  ]

  return (
    <div className="card">
      <div style={{ fontSize: 12, color: '#aaa' }}>
        {rows.map(([label, value]) => (
          <div
            key={label}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '5px 0',
              borderBottom: '1px solid rgba(255,255,255,0.04)',
            }}
          >
            <span style={{ color: '#888' }}>{label}</span>
            <span style={{ color: '#ccc' }}>{value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
