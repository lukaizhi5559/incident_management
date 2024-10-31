// src/components/IncidentTable.tsx
import React, { useState } from 'react';
import { Table, Button, Modal } from 'antd';
import useIncidents, { Incident } from '../hooks/useIncidents';
import useIncidentMutations from '../hooks/useIncidentMutations';
import IncidentForm from './IncidentForm';

const IncidentTable: React.FC = () => {
  const { incidents, loading, fetchIncidents, deleteIncident } = useIncidents();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingIncident, setEditingIncident] = useState<Incident | null>(null);

  const { addIncident, updateIncident } = useIncidentMutations({
    onSuccess: () => {
      fetchIncidents();
      setIsModalVisible(false);
    },
  });

  // Handle edit action
  const handleEdit = (incident: Incident) => {
    setEditingIncident(incident);
    setIsModalVisible(true);
  };

  const handleAdd = () => {
    setEditingIncident(null);
    setIsModalVisible(true);
  };

  const columns = [
    { title: 'Title', dataIndex: 'title', key: 'title' },
    { title: 'Description', dataIndex: 'description', key: 'description' },
    { title: 'Severity', dataIndex: 'severity', key: 'severity' },
    { title: 'Reported At', dataIndex: 'reported_at', key: 'reported_at' },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: any, record: Incident) => (
        <>
          <Button onClick={() => handleEdit(record)}>Edit</Button>
          <Button danger onClick={() => deleteIncident(record.id)}>
            Delete
          </Button>
        </>
      ),
    },
  ];

  return (
    <div>
      <Button type="primary" onClick={handleAdd}>
        Add Incident
      </Button>
      <Table columns={columns} dataSource={incidents} loading={loading} rowKey="id" />
      <Modal
        title={editingIncident ? 'Edit Incident' : 'Add Incident'}
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <IncidentForm
          initialValues={editingIncident}
          onSubmit={(values) => {
            if (editingIncident) {
              updateIncident(editingIncident.id, values);
            } else {
              addIncident(values);
            }
          }}
        />
      </Modal>
    </div>
  );
};

export default IncidentTable;
