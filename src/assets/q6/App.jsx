import Portal, { strip } from './shared/Portal'

export default () => (
  <Portal
    name="Job Portal"
    url="https://remotive.com/api/remote-jobs?limit=30"
    pick={d => d.jobs}
    map={j => ({ id: j.id, title: j.title, sub: j.company_name + ' · ' + j.candidate_required_location, img: j.company_logo, tag: j.category, desc: strip(j.description).slice(0, 700), info: [['Company', j.company_name], ['Location', j.candidate_required_location], ['Salary', j.salary || 'Not listed'], ['Skills', j.tags.join(', ')]] })}
    list={{ path: 'jobs', label: 'Jobs' }}
    pages={[['about', 'About', 'Search jobs by title or location.']]}
  />
)
