import Portal from './shared/Portal'

export default () => (
  <Portal
    name="Travel Explorer"
    url="https://restcountries.com/v3.1/all?fields=name,cca3,flags,capital,region,population"
    pick={d => d.slice(0, 60)}
    map={c => ({ id: c.cca3, title: c.name.common, sub: (c.capital || [])[0], img: c.flags.png, tag: c.region, desc: c.name.official, info: [['Capital', (c.capital || ['-'])[0]], ['Region', c.region], ['Population', c.population]] })}
    list={{ path: 'destinations', label: 'Destinations' }}
    pages={[['packages', 'Packages', 'Weekend, Week and Month packages coming soon.']]}
  />
)
