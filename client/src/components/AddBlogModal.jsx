import React from "react";

function AddOrEditBlog({ onClose }) {
  return (
    <div
      className="modal fade show"
      id="exampleModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="false"
      style={{ display: "block" }} // Ensure the modal is visible
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header bg-secondary">
            <h5
              className="modal-title text-white fw-bold"
              id="exampleModalLabel"
            >
              ADD BLOG
            </h5>
          </div>
          <div className="modal-body">
            {/* Add your form or content here */}
            <p>Add blog content goes here...</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose} // Close the modal
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddOrEditBlog;
