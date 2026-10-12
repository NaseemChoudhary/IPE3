import { useState } from 'react'
import { BrowserRouter, Routes, Route, NavLink, Link, useParams } from 'react-router-dom'
import useFetch from './useFetch'
import './style.css'

export const strip = h => (h || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()

function Card({ item, to }) {
  return (
    <Link to={to} className="card">
      {item.img && <img src={item.img} alt="" />}
      <h4>{item.title}</h4>
      <p>{item.sub}</p>
    </Link>
  )
}

function Grid({ items, base }) {
  if (!items.length) return <p>Nothing here.</p>
  return <div className="grid">{items.map(i => <Card key={i.id} item={i} to={`${base}/${i.id}`} />)}</div>
}

export default function Portal({ name, url, pick, map, list, pages = [], fav }) {
  const [favs, setFavs] = useState([])
  const base = '/' + list.path

  const useItems = () => {
    const { data, loading, error } = useFetch(url)
    return { items: data ? pick(data).map(map) : [], loading, error }
  }

  function List() {
    const { items, loading, error } = useItems()
    const [q, setQ] = useState('')
    const [tag, setTag] = useState('')
    if (loading) return <p>Loading...</p>
    if (error) return <p className="err">Error: {error}</p>
    const tags = [...new Set(items.map(i => i.tag).filter(Boolean))]
    const shown = items.filter(i =>
      (i.title + ' ' + i.sub).toLowerCase().includes(q.toLowerCase()) && (!tag || i.tag === tag))
    return (
      <>
        <h2>{list.label}</h2>
        <input placeholder="Search..." value={q} onChange={e => setQ(e.target.value)} />
        {tags.length > 1 && (
          <select value={tag} onChange={e => setTag(e.target.value)}>
            <option value="">All</option>
            {tags.map(t => <option key={t}>{t}</option>)}
          </select>
        )}
        <Grid items={shown} base={base} />
      </>
    )
  }

  function Detail() {
    const { id } = useParams()
    const { items, loading, error } = useItems()
    if (loading) return <p>Loading...</p>
    if (error) return <p className="err">Error: {error}</p>
    const item = items.find(i => String(i.id) === id)
    if (!item) return <p>Not found. <Link to={base}>Back</Link></p>
    const saved = favs.some(f => f.id === item.id)
    return (
      <div className="detail">
        <Link to={base}>← Back</Link> · <Link to="/">Home</Link>
        <h2>{item.title}</h2>
        {item.img && <img src={item.img} alt="" />}
        <p>{item.desc}</p>
        <ul>{(item.info || []).map(([k, v]) => <li key={k}><b>{k}:</b> {String(v)}</li>)}</ul>
        {fav && (
          <button onClick={() => setFavs(saved ? favs.filter(f => f.id !== item.id) : [...favs, item])}>
            {saved ? 'Remove from ' : 'Add to '}{fav}
          </button>
        )}
      </div>
    )
  }

  const Favs = () => <><h2>{fav}</h2><Grid items={favs} base={base} /></>
  const Page = ({ text }) => <p>{text}</p>

  const links = [['/', 'Home'], [base, list.label], ...(fav ? [['/fav', fav]] : []), ...pages.map(p => ['/' + p[0], p[1]])]

  return (
    <BrowserRouter>
      <nav>{links.map(([to, label]) => <NavLink key={to} to={to} end={to === '/'}>{label}</NavLink>)}</nav>
      <main>
        <Routes>
          <Route path="/" element={<><h2>{name}</h2><Link to={base}>Browse {list.label} →</Link></>} />
          <Route path={base} element={<List />} />
          <Route path={base + '/:id'} element={<Detail />} />
          {fav && <Route path="/fav" element={<Favs />} />}
          {pages.map(([path, label, text]) => (
            <Route key={path} path={'/' + path} element={<><h2>{label}</h2><Page text={text} /></>} />
          ))}
        </Routes>
      </main>
    </BrowserRouter>
  )
}
