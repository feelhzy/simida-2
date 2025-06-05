import Layout from '../components/Layout'

export default function ContactPage() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">联系我们</h1>
      <p>如需咨询或合作，请发送邮件至
        <a href="mailto:info@smida.com" className="text-blue-600 ml-1">info@smida.com</a>
      </p>
    </Layout>
  )
}
