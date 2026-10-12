import Portal from './shared/Portal'

export default () => (
  <Portal
    name="Hospital Doctor Directory"
    url="https://dummyjson.com/users?limit=30"
    pick={d => d.users}
    map={u => ({ id: u.id, title: 'Dr. ' + u.firstName + ' ' + u.lastName, sub: u.company.title, img: u.image, tag: u.company.department, desc: u.company.title + ' in ' + u.company.department, info: [['Specialization', u.company.department], ['Experience', u.age - 25 + ' years'], ['Availability', 'Mon-Fri'], ['Email', u.email], ['Phone', u.phone]] })}
    list={{ path: 'doctors', label: 'Doctors' }}
    pages={[['departments', 'Departments', 'Use the department filter on the Doctors page.']]}
  />
)
