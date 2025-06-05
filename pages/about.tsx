import NavBar from '../components/NavBar'

export default function AboutPage() {
  return (
    <div>
      <NavBar />
      <main className="p-4 space-y-4">
        <h1 className="text-2xl font-bold">关于思密达社区</h1>
        <p>思密达社区旨在为在韩华人提供便利的活动信息和生活服务，同时促进中韩文化交流。</p>
      </main>
    </div>
  )
}
