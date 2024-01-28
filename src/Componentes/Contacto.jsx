import React from 'react';

function Contacto() {
  const styles = {
    form: {
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      width: '70%',
      margin: 'auto',
    },
    label: {
      display: 'block',
      margin: '10px 0 5px',
      color: '#333',
    },
    input: {
      width: '100%',
      padding: '10px',
      marginBottom: '15px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      boxSizing: 'border-box',
    },
    textarea: {
      width: '100%',
      padding: '10px',
      marginBottom: '15px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      boxSizing: 'border-box',
    },
    button: {
      backgroundColor: '#007bff',
      color: '#fff',
      padding: '10px 15px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
  };

  return (
    <div>
      <form
        action="https://forms.zohopublic.com/edinsonramirez0627/form/EDinson/formperma/EY0TVOTVoqnZd-MwE6PGORbSVQVsYrx28BhzTEhu2ys/htmlRecords/submit"
        name="form"
        id="form"
        method="POST"
        acceptCharset="UTF-8"
        encType="multipart/form-data"
        style={styles.form}
      >
        <input type="hidden" name="zf_referrer_name" value="" />
        <input type="hidden" name="zf_redirect_url" value="" />
        <input type="hidden" name="zc_gad" value="" />
        <h2>EDinson</h2>
        <p></p>
        {/* Name */}
        <label style={styles.label}>
          Name <em>*</em>
        </label>
        <input
          type="text"
          maxLength="255"
          name="Name_First"
          fieldtype="7"
          placeholder=""
          style={styles.input}
        />
        <label style={styles.label}>First Name</label>
        <input
          type="text"
          maxLength="255"
          name="Name_Last"
          fieldtype="7"
          placeholder=""
          style={styles.input}
        />
        <label style={styles.label}>Last Name</label>
        {/* Email */}
        <label style={styles.label}>Email</label>
        <input
          type="text"
          maxLength="255"
          name="Email"
          value=""
          fieldtype="9"
          placeholder=""
          style={styles.input}
        />
        {/* Multi Line */}
        <label style={styles.label}>Multi Line</label>
        <textarea
          name="MultiLine"
          maxLength="65535"
          placeholder=""
          style={styles.textarea}
        ></textarea>
        <button type="submit" style={styles.button}>
          <em>Submit</em>
        </button>
      </form>
    </div>
  );
}

export default Contacto;
