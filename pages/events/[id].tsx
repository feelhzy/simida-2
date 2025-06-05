import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import { events } from '../../data/events'

export default function EventDetail() {
  const router = useRouter()
  const { id } = router.query
  const event = events.find((e) => e.id === id)

  if (!event) {
    return (
      <Layout>
        <p>未找到对应的活动。</p>
      </Layout>
    )
  }

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-2">{event.title}</h1>
      <p className="text-gray-600">{event.date} | {event.location}</p>
      <p className="mt-4">{event.description}</p>
      <form className="mt-6 space-y-4 max-w-sm">
        <label className="block">
          <span className="text-gray-700">姓名</span>
          <input type="text" className="mt-1 block w-full border rounded p-2" />
        </label>
        <label className="block">
          <span className="text-gray-700">联系方式</span>
          <input type="text" className="mt-1 block w-full border rounded p-2" />
        </label>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">报名</button>
      </form>
    </Layout>
  )
}
