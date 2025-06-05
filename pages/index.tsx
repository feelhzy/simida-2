import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-6">
        <h1 className="text-4xl font-bold text-gray-800">欢迎来到 Smida 社区平台！</h1>
        <p className="text-lg text-gray-600 text-center">一个连接中韩文化、服务在韩华人的线上社区</p>
      </div>
    </Layout>
  )
}
