import Layout from '../../components/Layout'
import Link from 'next/link'
import { events } from '../../data/events'

export default function EventsPage() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">协会活动</h1>
      <ul className="space-y-2">
        {events.map((event) => (
          <li key={event.id} className="border p-4 rounded">
            <h2 className="text-xl font-semibold">{event.title}</h2>
            <p className="text-gray-600">{event.date} | {event.location}</p>
            <p className="mt-2">{event.description}</p>
            <Link href={`/events/${event.id}`}>
              <a className="text-blue-500 hover:underline mt-2 inline-block">查看详情</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}
