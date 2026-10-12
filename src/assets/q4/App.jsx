import Portal from './shared/Portal'

export default () => (
  <Portal
    name="Restaurant Menu"
    url="https://dummyjson.com/recipes?limit=30"
    pick={d => d.recipes}
    map={r => ({ id: r.id, title: r.name, sub: r.cuisine, img: r.image, tag: r.cuisine, desc: r.instructions.join(' '), info: [['Difficulty', r.difficulty], ['Prep (min)', r.prepTimeMinutes], ['Calories', r.caloriesPerServing]] })}
    list={{ path: 'menu', label: 'Menu' }}
    pages={[['categories', 'Categories', 'Pick a category from the dropdown on the Menu page.']]}
  />
)
