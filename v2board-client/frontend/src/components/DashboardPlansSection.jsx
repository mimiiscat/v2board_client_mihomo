import {
  formatPlanTraffic,
  getPlanDescription,
  getPlanPeriods,
  getPlanPrice,
  sanitizeHtml,
} from '../utils/appHelpers'

export function DashboardPlansSection({ plans, onRefreshPlans, onOpenPurchase }) {
  return (
    <div className="card">
      <button className="btn-small" style={{ marginBottom: 12 }} onClick={onRefreshPlans}>🔄 刷新</button>
      {plans.length > 0 ? plans.map((plan, index) => (
        <div key={index} className="item-card">
          <div className="item-name">{plan.name}</div>
          {getPlanDescription(plan) && (
            <div className="item-content" dangerouslySetInnerHTML={{ __html: sanitizeHtml(getPlanDescription(plan)) }} />
          )}
          <div className="item-actions">
            <div>
              <div className="item-price">
                {(() => {
                  const price = getPlanPrice(plan)
                  return price.value !== null
                    ? <>¥{price.value.toFixed(2)} <span style={{ fontSize: 11, color: '#888' }}>/{price.label}</span></>
                    : <span style={{ color: '#888', fontSize: 12 }}>暂无价格</span>
                })()}
              </div>
              <div className="item-desc">{formatPlanTraffic(plan.transfer_enable)}</div>
            </div>
            <button className="btn-small item-buy" onClick={() => onOpenPurchase(plan)} disabled={getPlanPeriods(plan).length === 0}>购买</button>
          </div>
        </div>
      )) : <div className="empty">暂无套餐</div>}
    </div>
  )
}
