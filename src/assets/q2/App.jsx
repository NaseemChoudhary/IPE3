import Portal from './shared/Portal'

export default () => (
  <Portal
    name="Course Portal"
    url="https://dummyjson.com/posts?limit=30"
    pick={d => d.posts}
    map={p => ({ id: p.id, title: p.title, sub: p.tags.join(', '), desc: p.body, tag: p.tags[0], info: [['Views', p.views], ['Likes', p.reactions.likes]] })}
    list={{ path: 'courses', label: 'Courses' }}
    pages={[['contact', 'Contact', 'Email: courses@example.com']]}
  />
)
