import Layout from '../../components/Layout'

export default function CommunityPage() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">社区交流版块</h1>
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">问答专区</h2>
        <p>在这里提问或回答在韩生活的各种问题，互相帮助。</p>
      </section>
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">生活指南</h2>
        <p>分享生活技巧和常见问题解决方案，让在韩生活更轻松。</p>
      </section>
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">志愿者招募</h2>
        <p>关注社区活动，报名成为志愿者贡献自己的力量。</p>
      </section>
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">二手交易</h2>
        <p>发布和浏览闲置物品，促进资源循环利用。</p>
      </section>
    </Layout>
  )
}
