// src/components/IncidentForm.tsx
import React, { useEffect } from 'react';
import { Form, Input, Button, Select } from 'antd';
import { Incident } from '../hooks/useIncidents';

const { Option } = Select;

interface IncidentFormProps {
  initialValues?: Omit<Incident, 'id' | 'reported_at'> | null;
  onSubmit: (values: Omit<Incident, 'id' | 'reported_at'>) => void;
}

const IncidentForm: React.FC<IncidentFormProps> = ({ initialValues, onSubmit }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (initialValues) {
      form.setFieldsValue(initialValues);
    } else {
      form.resetFields();
    }
  }, [initialValues, form]);

  const handleFinish = (values: Omit<Incident, 'id' | 'reported_at'>) => {
    onSubmit(values);
  };

  return (
    <Form form={form} layout="vertical" onFinish={handleFinish}>
      <Form.Item name="title" label="Title" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="description" label="Description" rules={[{ required: true }]}>
        <Input.TextArea rows={4} />
      </Form.Item>
      <Form.Item name="severity" label="Severity" rules={[{ required: true }]}>
        <Select>
          <Option value="Low">Low</Option>
          <Option value="Medium">Medium</Option>
          <Option value="High">High</Option>
          <Option value="Critical">Critical</Option>
        </Select>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          {initialValues ? 'Update' : 'Add'} Incident
        </Button>
      </Form.Item>
    </Form>
  );
};

export default IncidentForm;
