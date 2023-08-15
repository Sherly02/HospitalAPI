const QUERY = {
    SELECT_PATIENTS: 'SELECT * FROM patients ORDER BY created_at DESC LIMIT 100',
    SELECT_PATIENT: 'SELECT * FROM patients WHERE id = ?',
    CREATE_PATIENTS: 'INSERT INTO patients(first_name, last_name, email, address, diagnosis, phone, image_url) VALUES (?, ?, ?, ?, ?, ?, ?)',
    UPDATE_PATIENTS: 'UPDATE patients SET first_name = ?, last_name = ?, email = ?, address = ?, diagnosis = ?, phone = ?, image_url = ?',
    DELETE_PATIENTS: 'DELETE FROM patients WHERE id = ?'
};

export default QUERY;