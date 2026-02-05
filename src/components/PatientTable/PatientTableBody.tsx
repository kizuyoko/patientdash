const PatientTableBody = () => {
    return (
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
    );
};

export default PatientTableBody;