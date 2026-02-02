function App() {

  return (
    <section className='body'>
      <aside>
        <h1>PatientDash</h1>
        <p>Patient Management System</p>
        <div className="overview">
          <div className="card">
            <p className="card-title">Total Patients</p>
            <p className="card-number">247</p>
          </div>
          <div className="card active">
            <p className="card-title">Active Today</p>
            <p className="card-number">18</p>
          </div>
          <div className="card pending">
            <p className="card-title">Pending</p>
            <p className="card-number">5</p>
          </div>
          <div className="card completed">
            <p className="card-title">Completed</p>
            <p className="card-number">224</p>
          </div>
        </div>
      </aside>
      <main>
        <h2>Patient List</h2>
        <table>
          <thead>
            <tr>
              <th>Patient ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Status</th>
              <th>Last visit</th>
              <th>Condition</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>PT-001</td>
              <td><b>Sarah Johnson</b></td>
              <td>34</td>
              <td>
                <span className="status active">Active</span>
              </td>
              <td>Jan 27, 2026</td>
              <td>Hypertension</td>
            </tr>
            <tr>
              <td>PT-002</td>
              <td><b>Michael Chen</b></td>
              <td>45</td>
              <td>
                <span className="status completed">Completed</span>
              </td>
              <td>Jan 25, 2026</td>
              <td>Diabetes Type 2</td>
            </tr>
            <tr>
              <td>PT-003</td>
              <td><b>Emily Rodriguez</b></td>
              <td>28</td>
              <td>
                <span className="status active">Active</span>
              </td>
              <td>Jan 8, 2026</td>
              <td>Asthma</td>
            </tr>  
            <tr>
              <td>PT-004</td>
              <td><b>James Williams</b></td>
              <td>52</td>
              <td>
                <span className="status pending">Pending</span>
              </td>
              <td>Jan 20, 2026</td>
              <td>Heart Disease</td>
            </tr>           
          </tbody>
        </table>
        <footer>
          <ul>
            <li><a href="https://github.com/kizuyoko/patientdash" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/kizuyoko/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </footer>
      </main>
    </section>
  )
}

export default App
