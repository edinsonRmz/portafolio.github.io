import React from 'react';
import './../../public/css/Contacto.css';

function Contacto() {
  return (
    <div>
      <form
        action="https://forms.zohopublic.com/edinsonramirez0627/form/EDinson/formperma/EY0TVOTVoqnZd-MwE6PGORbSVQVsYrx28BhzTEhu2ys/htmlRecords/submit"
        name="form"
        id="form"
        method="POST"
        accept-charset="UTF-8"
        enctype="multipart/form-data"
      >
        <input type="hidden" name="zf_referrer_name" value="" />
        <input type="hidden" name="zf_redirect_url" value="" />
        <input type="hidden" name="zc_gad" value="" />
        <h2>EDinson</h2>
        <p></p>
        {/* Name */}
        <label>
          Name <em>*</em>
        </label>
        <input type="text" maxlength="255" name="Name_First" fieldtype="7" placeholder="" />
        <label>First Name</label>
        <input type="text" maxlength="255" name="Name_Last" fieldtype="7" placeholder="" />
        <label>Last Name</label>
        {/* Email */}
        <label>Email</label>
        <input type="text" maxlength="255" name="Email" value="" fieldtype="9" placeholder="" />
        {/* Multi Line */}
        <label>Multi Line</label>
        <textarea name="MultiLine" maxlength="65535" placeholder=""></textarea>
        <button type="submit">
          <em>Submit</em>
        </button>
      </form>
    </div>
  );
}

export default Contacto;
