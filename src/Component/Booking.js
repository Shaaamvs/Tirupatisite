// import React, { useState } from 'react';
// import { useForm } from '@formspree/react';

// const BookingForm = () => {
//   const [formData, setFormData] = useState({
//     Full_Name: '',
//     Email: '',
//     PhoneNumber: '',
//     Address: '',
//     CheckIn: '',
//   });

//   const [state, handleSubmit] = useForm("xoqookdy");

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//     setErrors({
//       ...errors,
//       [name]: '', // Clear the error when the user starts typing
//     });
//   };

//   const validateForm = () => {
//     let newErrors = {};

//     // Add your validation logic here

//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return false; // Return false to indicate validation failure
//     } else {
//       return true; // Return true to indicate validation success
//     }
//   };

//   const onSubmit = (e) => {
//     e.preventDefault();

//     // Validate the form
//     const isValid = validateForm();

//     if (isValid) {
//       // Submit the form
//       handleSubmit();
//       console.log('Form submitted:', formData);
//     }
//   };


//   return (
//     <form onSubmit='handleSubmit'  method="POST">
//       <div className="mb-3">
//         <label htmlFor="destination" className="form-label fw-bold">
//           Enter a Name:
//         </label>
//         <input
//           type="text"
//           name="Full_Name"
//           value={formData.Full_Name}
//           onChange={handleChange}
//           className={`form-control fw-bold ${errors.Full_Name ? 'is-invalid' : ''}`}
//           id="destination"
//           placeholder="Name"
//         />
//         {errors.Full_Name && <div className="invalid-feedback">{errors.Full_Name}</div>}
//       </div>

//       <div className="mb-3">
//         <label htmlFor="destination" className="form-label fw-bold">
//           Enter an Email:
//         </label>
//         <input
//           type="email"
//           name="Email"
//           value={formData.Email}
//           onChange={handleChange}
//           className={`form-control fw-bold ${errors.Email ? 'is-invalid' : ''}`}
//           id="destination"
//           placeholder="Email"
//         />
//         {errors.Email && <div className="invalid-feedback">{errors.Email}</div>}
//       </div>

//       <div className="mb-3">
//         <label htmlFor="destination" className="form-label fw-bold">
//           Enter a Mobile Number:
//         </label>
//         <input
//           type="number"
//           name="PhoneNumber"
//           value={formData.PhoneNumber}
//           onChange={handleChange}
//           className={`form-control fw-bold ${errors.PhoneNumber ? 'is-invalid' : ''}`}
//           id="destination"
//           placeholder="Mobile Number"
//         />
//         {errors.PhoneNumber && <div className="invalid-feedback">{errors.PhoneNumber}</div>}
//       </div>

//       <div className="mb-3">
//         <label htmlFor="destination" className="form-label fw-bold">
//           Enter an Address:
//         </label>
//         <input
//           type="text"
//           name="Address"
//           value={formData.Address}
//           onChange={handleChange}
//           className={`form-control fw-bold ${errors.Address ? 'is-invalid' : ''}`}
//           id="destination"
//           placeholder="Address"
//         />
//         {errors.Address && <div className="invalid-feedback">{errors.Address}</div>}
//       </div>

//       <div className="mb-3">
//         <label htmlFor="checkIn" className="form-label fw-bold">
//           Check-in
//         </label>
//         <input
//           type="date"
//           name="CheckIn"
//           value={formData.CheckIn}
//           onChange={handleChange}
//           className={`form-control fw-bold ${errors.CheckIn ? 'is-invalid' : ''}`}
//         />
//         {errors.CheckIn && <div className="invalid-feedback">{errors.CheckIn}</div>}
//       </div>

//       <button type="submit" className="btn btn-primary fw-bold">
//         Book Now
//       </button>

//       {state.succeeded && <p className="mt-3 text-success">Thanks for joining!</p>}
//     </form>
//   );
// };

// export default BookingForm;









import React from 'react'
import {useForm,ValidationError}  from '@formspree/react';
export default function Booking() {

  const [state, handleSubmit] = useForm("xoqookdy");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }

  return (
<>

<form onSubmit={handleSubmit}>
   

<div className="mb-0">
          <label htmlFor="destination" className="form-label fw-bold">
            Enter a Name:
          </label>
          <input
            type="text"
            name='Full_Name'
            className="form-control fw-bold"
            id="destination"
            placeholder="Name"
          />
        </div>



        <div className="mb-0">
          <label htmlFor="destination" className="form-label fw-bold">
            Enter a Email:
          </label>
          <input
          name='Email'
            type="email"
            className="form-control fw-bold"
            id="destination"
            placeholder="Email"
          />
        </div>




        <div className="mb-0">
          <label htmlFor="destination" className="form-label fw-bold">
            Enter a Mobile No:
          </label>
          <input
          name='Phone Number'
            type="number"
            className="form-control fw-bold"
            id="destination"
            placeholder="Phone No"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="destination" className="form-label fw-bold">
            Pickup Address
          </label>
          <input
          name='Address'
            type="text"
            className="form-control fw-bold"
            id="destination"
            placeholder="Address"
          />
        </div>

        <div className="row">
          <div className="col-md-12">
            <label htmlFor="checkIn" className="form-label fw-bold">
              Check-in
            </label>
            <input type="date" className="form-control fw-bold" id="checkIn" name='CheckIn' />
          </div>
        
        </div>
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      

      <button type="submit" className="call-button  mt-3 w-100 fw-bold" disabled={state.submitting}>
        Submit
      </button>

</form>
</>  )
}

