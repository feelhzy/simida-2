export interface Event {
  id: string
  title: string
  date: string
  location: string
  description: string
}

export const events: Event[] = [
  {
    id: '1',
    title: '韩中文化交流会',
    date: '2023-10-01',
    location: '首尔市中心文化馆',
    description: '通过文化表演和美食增进中韩友谊。'
  },
  {
    id: '2',
    title: '生活信息分享会',
    date: '2023-11-15',
    location: '线上直播',
    description: '为在韩华人解答生活中的常见问题。'
  },
  {
    id: '3',
    title: '志愿者培训营',
    date: '2023-12-05',
    location: '釜山青年中心',
    description: '培养社区志愿者，提升服务能力。'
  }
]
