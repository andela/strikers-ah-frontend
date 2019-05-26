import React from 'react';
import { Link } from 'react-router-dom';

const CreateAccount = () => (
  <div className="createAccount">
    Create account <span className="makespace" />
    <Link to="/signup">here</Link>
  </div>
);

export default CreateAccount;
