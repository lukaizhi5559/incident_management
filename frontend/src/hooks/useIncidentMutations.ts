import api from '../api';
import { message } from 'antd';
import { Incident } from './useIncidents';

interface UseIncidentMutationsProps {
  onSuccess: () => void;
}

const useIncidentMutations = ({ onSuccess }: UseIncidentMutationsProps) => {
  // Add a new incident
  const addIncident = async (incidentData: Omit<Incident, 'id' | 'reported_at'>) => {
    try {
      await api.post(`/incidents/`, incidentData);
      message.success('Incident added successfully');
      onSuccess();
    } catch (error) {
      message.error('Failed to add incident');
    }
  };

  // Update an existing incident
  const updateIncident = async (id: number, incidentData: Omit<Incident, 'id' | 'reported_at'>) => {
    try {
      await api.put(`/incidents/${id}/`, incidentData);
      message.success('Incident updated successfully');
      onSuccess();
    } catch (error) {
      message.error('Failed to update incident');
    }
  };

  return {
    addIncident,
    updateIncident,
  };
};

export default useIncidentMutations;
