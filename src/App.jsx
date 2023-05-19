import React from 'react';
import FormGenerator from './formcomponent';

const App = () => {
  const data = [
    {
      name: 'firstName',
      label: 'First Name',
      type: 'text',
      required: true,
    },
    {
      name: 'lastName',
      label: 'Last Name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      required: true,
    },
    {
      name: 'phone',
      label: 'Phone',
      type: 'text',
      required: false,
    },
  ];

  return (
    <div>
      <h1 className="m-8">Form Generator Example</h1>
      <FormGenerator data={data} />
    </div>
  );
};

export default App;