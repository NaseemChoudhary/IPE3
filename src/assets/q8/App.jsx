import Portal, { strip } from './shared/Portal'

export default () => (
  <Portal
    name="Movie Explorer"
    url="https://api.tvmaze.com/shows?page=0"
    pick={d => d.slice(0, 40)}
    map={m => ({ id: m.id, title: m.name, sub: (m.premiered || '').slice(0, 4), img: m.image?.medium, tag: m.genres[0], desc: strip(m.summary), info: [['Genre', m.genres.join(', ')], ['Rating', m.rating.average], ['Released', (m.premiered || '').slice(0, 4)]] })}
    list={{ path: 'movies', label: 'Movies' }}
    fav="Favorites"
  />
)
