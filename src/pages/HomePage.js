import React from 'react';

function HomePage() {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Welcome to Medicine Search</h1>
      <p>Use our search feature to find information about medicines, their composition, usage, and dosage.</p>
      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Search Medicines</h5>
              <p className="card-text">Find detailed information about any medicine.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Composition Details</h5>
              <p className="card-text">Learn about medicine ingredients.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Usage Guidelines</h5>
              <p className="card-text">Understand proper usage and dosage.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;