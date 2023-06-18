
const CodePerformance = () => {
  return (
    <div className="max-w-fit p-4 border border-black">
      <h1 className="text-xl font-bold">Weekday</h1>
      <div className="flex justify-between gap-4">
        <label htmlFor="code">Coding tasks at work</label>
        <input id='code' type="checkbox" />
      </div>
      <div className="flex justify-between gap-4">
        <label htmlFor="side">Working on side projects</label>
        <input id='side' type="checkbox" />
      </div>
      <div className="flex justify-between gap-4">
        <label htmlFor="inquiries">Learning new technologies</label>
        <input id='inquiries' type="checkbox" />
      </div>
      <h1 className="text-xl font-bold mt-8">Weekends</h1>
      <div className="flex justify-between gap-4">
        <label htmlFor="courses">Searching inquiries</label>
        <input id='courses' type="checkbox" />
      </div>
      <div className="flex justify-between gap-4">
        <label htmlFor="trends">Keeping up with trends and news</label>
        <input id='trends' type="checkbox" />
      </div>
    </div>
  )
}

export default CodePerformance