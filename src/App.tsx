function App() {

  return (
    <section className='body'>
      <aside>
        <h1>PatientDash</h1>
        <p>Patient Management System</p>
        <div className="overview">
          <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
            <p className="text-sm text-blue-600 mb-1">Total Patients</p>
            <p className="text-3xl font-bold text-blue-700">247</p>
          </div>
          <div className="bg-green-50 rounded-lg p-4 border border-green-100">
            <p className="text-sm text-green-600 mb-1">Active Today</p>
            <p className="text-3xl font-bold text-green-700">18</p>
          </div>
          <div className="bg-orange-50 rounded-lg p-4 border border-orange-100">
            <p className="text-sm text-orange-600 mb-1">Pending</p>
            <p className="text-3xl font-bold text-orange-700">5</p>
          </div>
          <div className="bg-purple-50 rounded-lg p-4 border border-purple-100">
            <p className="text-sm text-purple-600 mb-1">Completed</p>
            <p className="text-3xl font-bold text-purple-700">224</p>
          </div>
        </div>
      </aside>
      <main>
        <h2>Patient List</h2>
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Visit</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Condition</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr className="hover:bg-gray-50 transition-colors cursor-pointer">
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">PT-001</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Sarah Johnson</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">34</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">Active</span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Jan 27, 2026</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Hypertension</td>
            </tr>
          </tbody>
        </table>
        <footer>Yoko</footer>
      </main>
    </section>
  )
}

export default App
