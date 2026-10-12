import Portal from './shared/Portal'

export default () => (
  <Portal
    name="Online Shop"
    url="https://dummyjson.com/products?limit=30"
    pick={d => d.products}
    map={p => ({ id: p.id, title: p.title, sub: '$' + p.price, img: p.thumbnail, desc: p.description, tag: p.category, info: [['Brand', p.brand], ['Rating', p.rating]] })}
    list={{ path: 'products', label: 'Products' }}
    fav="Cart"
    pages={[['about', 'About', 'A minimal online shopping portal.']]}
  />
)
