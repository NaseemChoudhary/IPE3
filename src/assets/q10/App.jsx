import Portal from './shared/Portal'

export default () => (
  <Portal
    name="Digital Library"
    url="https://openlibrary.org/search.json?q=programming&limit=30&fields=key,title,author_name,first_publish_year,cover_i,subject"
    pick={d => d.docs}
    map={b => ({ id: b.key.replace('/works/', ''), title: b.title, sub: (b.author_name || ['Unknown'])[0], img: b.cover_i && `https://covers.openlibrary.org/b/id/${b.cover_i}-M.jpg`, tag: (b.subject || [])[0], desc: (b.subject || []).slice(0, 8).join(', '), info: [['Author', (b.author_name || []).join(', ')], ['Year', b.first_publish_year], ['Category', (b.subject || ['-'])[0]]] })}
    list={{ path: 'books', label: 'Books' }}
    pages={[['authors', 'Authors', 'Search by author name on the Books page.'], ['about', 'About', 'A minimal digital library.']]}
  />
)
