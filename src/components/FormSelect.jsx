
import React from 'react';
import Form from 'react-bootstrap/Form';

function FormSelect() {
  return (
    <>
      <div className='container text-white background-image mt-5'>
        <h5 className='text-center'><strong>Car Selector</strong></h5>
        <h6 className='text-center'>Brand:</h6>
        <Form.Select>
          <option>Select</option>
          <option>Select</option>
          <option>Select</option>
          <option>Select</option>
          <option>Select</option>
        </Form.Select>
        <br />
        <h6 className='text-center'>Model series:</h6>
        <Form.Select>
          <option>Select</option>
          <option>Select</option>
          <option>Select</option>
          <option>Select</option>
          <option>Select</option>
        </Form.Select>
        <br />
        <h6 className='text-center'>Year of manufacture / type:</h6>
        <Form.Select>
          <option>Select</option>
          <option>Select</option>
          <option>Select</option>
          <option>Select</option>
          <option>Select</option>
        </Form.Select>
        <br />
        <h6 className='text-center'>Series / Version:</h6>
        <Form.Select>
          <option>Select</option>
          <option>Select</option>
          <option>Select</option>
          <option>Select</option>
          <option>Select</option>
        </Form.Select>
      </div>
    </>
  );
}

export default FormSelect;
