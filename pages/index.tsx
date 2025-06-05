import NavBar from '../components/NavBar'

export default function Home() {
  return (
    <div>
      <NavBar />
      <main className="min-h-screen flex flex-col items-center justify-center space-y-6 bg-gray-100">
        <h1 className="text-4xl font-bold text-gray-800">欢迎来到 Smida 社区平台！</h1>
        <p className="text-lg text-gray-600">一个连接中韩文化、服务在韩华人的线上社区。</p>
      </main>
    </div>
  )
}
