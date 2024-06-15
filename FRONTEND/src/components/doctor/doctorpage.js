import React, {
    useEffect,
    useState,
} from 'react';

import { useNavigate } from 'react-router-dom';

import Homepagedoctor from './homepageDoctor';

export default function PatientManagement() {
    const navigate = useNavigate();
    const [patients, setPatients] = useState([]);
    const [selectedPatient, setSelectedPatient] = useState(null);
    const [editPatient, setEditPatient] = useState(null);
    const [deletePatient, setDeletePatient] = useState(null);
    const [newPatient, setNewPatient] = useState(null);

    useEffect(() => {
        const fetchPatients = async () => {
            try {
                let result = await fetch('http://127.0.0.1:8000/api/patients');
                result = await result.json();
                setPatients(result);
            } catch (error) {
                console.error('Error fetching patients:', error);
            }
        };
        fetchPatients();
    }, []);

    const openViewPatient = (patient) => {
        setSelectedPatient(patient);
    };

    const handleCloseModal = () => {
        setSelectedPatient(null);
        setEditPatient(null);
        setDeletePatient(null);
        setNewPatient(null);
    };

    const openEditPatient = (patient) => {
        setEditPatient(patient);
    };

    const OpenMedicalRecords = ({ patient }) => {
        const navigate = useNavigate();

        const handleMedicalRecords = () => {
            // Store patient ID in localStorage
            localStorage.setItem('patientId', patient.id);

            // Log patient ID to console
            console.log("Patient ID stored in localStorage:", patient.id);

            // Navigate to the medicalrecords page
            navigate('/medicalrecords');
        };

        return (
            <button className="btn btn-warning mr-2" onClick={handleMedicalRecords} type="button">
                Medical Records
            </button>
        );
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditPatient((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const submitEditedPatient = async (e) => {
        e.preventDefault();
        const { id, first_name, last_name, date_of_birth, gender, address, phone, email, emergency_contact, medical_history } = editPatient;

        try {
            let result = await fetch(`http://127.0.0.1:8000/api/patients/${id}`, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify({ first_name, last_name, date_of_birth, gender, address, phone, email, emergency_contact, medical_history })
            });

            if (result.ok) {
                result = await result.json();
                setPatients(patients.map(patient => (patient.id === id ? result : patient)));
                handleCloseModal();
            } else {
                const errorData = await result.json();
                alert('Error updating patient: ' + JSON.stringify(errorData));
            }
        } catch (error) {
            alert('Error: ' + error.message);
        }
    };

    const submitNewPatient = async (e) => {
        e.preventDefault();
        const { first_name, last_name, date_of_birth, gender, address, phone, email, emergency_contact, medical_history } = newPatient;

        try {
            let result = await fetch('http://127.0.0.1:8000/api/patients', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify({ first_name, last_name, date_of_birth, gender, address, phone, email, emergency_contact, medical_history })
            });

            if (result.ok) {
                result = await result.json();
                setPatients([...patients, result.patient]);
                handleCloseModal();
            } else {
                const errorData = await result.json();
                alert('Error adding patient: ' + JSON.stringify(errorData));
            }
        } catch (error) {
            alert('Error: ' + error.message);
        }
    };

    return (
        <div className="crud">
            <Homepagedoctor />
            <main className="crud-body">
                <h1 style={{ color: 'green', fontWeight: 'bold' }}>Patients</h1>
                <table className='table table-striped'>
                    {/* Table Header */}
                    <thead className='thead-dark'>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Date of Birth</th>
                            <th>Gender</th>
                        </tr>
                    </thead>
                    {/* Table Body */}
                    <tbody>
                        {patients.map((patient) => (
                            <tr key={patient.id}>
                                <td>{patient.id}</td>
                                <td>{patient.first_name}</td>
                                <td>{patient.last_name}</td>
                                <td>{patient.date_of_birth}</td>
                                <td>{patient.gender}</td>
                                <td>

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {/* Modals for selectedPatient and editPatient */}
            </main>
        </div>
    );
}
