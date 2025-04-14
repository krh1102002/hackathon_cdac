import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";

function Category() {
  const [searchText, setSearchText] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editingCategoryId, setEditingCategoryId] = useState(null);

  const handleAddClick = () => {
    setIsEditing(false);
    setCategoryName("");
    setShowModal(true);
  };

  const handleEditClick = (id, name) => {
    setIsEditing(true);
    setEditingCategoryId(id);
    setCategoryName(name);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSave = () => {
    if (isEditing) {
    } else {
    }
    setShowModal(false);
  };

  return (
    <div className="container m-0">
      <h1 className="my-3">CATEGORY</h1>
      <div className="d-flex mb-4 justify-content-between">
        <div>
          <input
            type="text"
            onChange={(e) => setSearchText(e.target.value)}
            className="p-1 px-3"
            placeholder="Search here"
          />
          <button className="btn btn-success ms-3 px-4 fw-bold">Search</button>
        </div>
        <div>
          <button
            className="btn btn-success px-4 fw-bold"
            onClick={handleAddClick}
          >
            ADD
          </button>
        </div>
      </div>
      <div className="container m-0 d-flex">
        <div className="container row">
          <table className="table table-bordered table-hover">
            <thead className="thead-dark">
              <tr>
                <th>Id</th>
                <th>Category</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>
                  <button
                    className="btn"
                    onClick={() => handleEditClick(1, "Mark")}
                  >
                    <CiEdit size={20} />
                  </button>
                  <button className="btn">
                    <MdDeleteForever size={20} color="red" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Add/Edit Category Modal */}
      {showModal && (
        <div
          className="modal fade show"
          style={{ display: "block" }}
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="false"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  {isEditing ? "Edit Category" : "Add Category"}
                </h5>
              </div>
              <div className="modal-body">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="categoryNameInput"
                    placeholder="Category Name"
                    value={categoryName}
                    onChange={(e) => setCategoryName(e.target.value)}
                  />
                  <label htmlFor="categoryNameInput">Category Name</label>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSave}
                >
                  {isEditing ? "Save Changes" : "Add Category"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Category;
