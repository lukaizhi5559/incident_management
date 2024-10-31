import { useState, useEffect } from 'react';
import api from '../api';
import { message } from 'antd';

export interface Incident {
  id: number;
  title: string;
  description: string;
  severity: string;
  reported_at: string;
}

const useIncidents = () => {
  const [incidents, setIncidents] = useState<Incident[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch incidents
  const fetchIncidents = async () => {
    setLoading(true);
    try {
      const response = await api.get<Incident[]>(`/incidents/`);
      setIncidents(response.data);
    } catch (error) {
      message.error('Failed to load incidents');
    } finally {
      setLoading(false);
    }
  };

  // Delete an incident
  const deleteIncident = async (id: number) => {
    try {
      await api.delete(`/incidents/${id}/`);
      message.success('Incident deleted');
      fetchIncidents(); // Refresh the list
    } catch (error) {
      message.error('Failed to delete incident');
    }
  };

  useEffect(() => {
    fetchIncidents();
  }, []);

  return {
    incidents,
    loading,
    fetchIncidents,
    deleteIncident,
  };
};

export default useIncidents;
