import Layout from '../components/Layout'

export default function FAQPage() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">常见问题</h1>
      <ul className="space-y-4 list-disc pl-5">
        <li>如何报名活动？在活动详情页填写表单即可。</li>
        <li>支持哪些支付方式？目前支持微信、支付宝和韩国本地转账。</li>
        <li>如何参与社区讨论？进入社区板块即可发帖和回复。</li>
      </ul>
    </Layout>
  )
}
