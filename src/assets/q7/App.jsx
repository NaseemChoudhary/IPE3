import Portal from './shared/Portal'

export default () => (
  <Portal
    name="News Reader"
    url="https://dummyjson.com/posts?limit=30"
    pick={d => d.posts}
    map={p => ({ id: p.id, title: p.title, sub: p.tags.join(', '), desc: p.body, tag: p.tags[0], info: [['Views', p.views], ['Category', p.tags[0]]] })}
    list={{ path: 'news', label: 'News' }}
    pages={[['categories', 'Categories', 'Use the category dropdown on the News page.'], ['about', 'About', 'A minimal news reader.']]}
  />
)
