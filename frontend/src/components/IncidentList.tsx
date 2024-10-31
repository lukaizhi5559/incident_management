import React, { useEffect, useState } from 'react';
import { getIncidents } from '../api/incidentService';

interface Incident {
    id: number;
    title: string;
    description: string;
    severity: string;
    reported_at: string;
}

const IncidentList: React.FC = () => {
    const [incidents, setIncidents] = useState<Incident[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getIncidents();
            setIncidents(data);
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>Incident List</h1>
            <ul>
                {incidents.map((incident) => (
                    <li key={incident.id}>
                        <h3>{incident.title}</h3>
                        <p>{incident.description}</p>
                        <p>Severity: {incident.severity}</p>
                        <p>Reported At: {new Date(incident.reported_at).toLocaleString()}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default IncidentList;
