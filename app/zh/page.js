export const metadata = {
  title: '河北臻扬电气科技有限公司 | 电力金具及电力安全产品制造商',
  description: '河北臻扬电气科技有限公司面向电力工程现场提供线路金具、安全标识、防护用品及配套电力器材，重点产品包括耐张线夹、并沟线夹、绝缘穿刺接地线夹、标识牌和普通安全帽。',
  keywords: '河北臻扬电气科技有限公司, 臻扬电气, 电力金具, 耐张线夹, 并沟线夹, 绝缘穿刺接地线夹, 电力安全标识牌, 安全帽, 越南电力工程'
};

export default function ChineseSeoPage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div>
            <p className="eyebrow">中文官网入口</p>
            <h1>河北臻扬电气科技有限公司</h1>
            <p className="lead">
              电力金具及电力安全产品制造商，面向越南配网建设、线路维护、EPC 项目和电力物资渠道客户，
              提供耐张线夹、并沟/分支连接线夹、绝缘穿刺接地线夹、标识牌和普通安全帽等产品。
            </p>
            <p className="hero-note">
              如需产品参数、样册、报价或项目配套方案，请通过官网联系方式与我们确认。
            </p>
            <div className="actions">
              <a className="btn primary" href="/?lang=zh">进入中文官网</a>
              <a className="btn secondary" href="/products?lang=zh">查看产品中心</a>
              <a className="btn secondary" href="/contact?lang=zh">联系我们</a>
            </div>
          </div>
          <div className="hero-grid">
            <article className="hero-card">
              <img src="/images/products/strain-nxjg-4.jpg" alt="耐张线夹" />
              <strong>耐张线夹</strong>
            </article>
            <article className="hero-card">
              <img src="/images/products/parallel-jc-41c.jpg" alt="并沟/分支连接线夹" />
              <strong>并沟/分支连接线夹</strong>
            </article>
            <article className="hero-card">
              <img src="/images/products/ipc-grounding.jpg" alt="绝缘穿刺接地线夹" />
              <strong>绝缘穿刺接地线夹</strong>
            </article>
            <article className="hero-card">
              <img src="/images/products/helmet-abs-v.jpg" alt="普通安全帽" />
              <strong>普通安全帽</strong>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">主营产品</p>
            <h2>面向电力工程现场的产品组合</h2>
            <p className="lead">
              公司产品用于配网施工、线路维护、电力安全标识和现场防护。官网展示的是越南市场第一阶段主推产品，
              具体型号、图纸、包装和技术细节以项目确认和正式报价为准。
            </p>
          </div>
          <div className="feature-list">
            <div><strong>耐张线夹</strong><span>用于导线耐张固定和线路连接场景。</span></div>
            <div><strong>并沟/分支连接线夹</strong><span>用于导线并接、分支连接等施工需求。</span></div>
            <div><strong>绝缘穿刺接地线夹</strong><span>用于绝缘导线相关接地和连接场景。</span></div>
            <div><strong>标识牌与普通安全帽</strong><span>用于电力现场安全提示、人员防护及配套供应。</span></div>
          </div>
        </div>
      </section>
    </>
  );
}
