import React, { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
import { loadAllBlogs } from "../services/blogs";
import { toast } from "react-toastify";

function AllBlogs() {
  const [searchText, setSearchText] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [currentBlog, setCurrentBlog] = useState({
    id: null,
    title: "",
    category: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleAddClick = () => {
    setIsEditing(false);
    setCurrentBlog({ id: null, title: "", category: "" });
    setShowModal(true);
  };

  const handleEditClick = (blog) => {
    setIsEditing(true);
    setCurrentBlog(blog);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSave = () => {
    if (isEditing) {
      // Edit existing blog
      setBlogs(
        blogs.map((blog) => (blog.id === currentBlog.id ? currentBlog : blog))
      );
    } else {
      // Add new blog
      setBlogs([...blogs, { ...currentBlog, id: blogs.length + 1 }]);
    }
    setShowModal(false);
  };

  const handleDelete = (id) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentBlog({ ...currentBlog, [name]: value });
  };

  const showAllBLogs = async () => {
    const res = await loadAllBlogs();
    if (res.status == "success") {
      setBlogs(res.data);
    } else {
      toast.error(res.error);
    }
  };

  useEffect(() => {
    showAllBLogs();
  }, []);

  return (
    <div className="container">
      <h1 className="my-3">ALL BLOGS</h1>
      <div className="d-flex mb-4 justify-content-end">
        <div className="d-flex">
          <input
            type="text"
            className="p-1 px-3 py-1"
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search here"
          />
          <button className="btn btn-success ms-3 px-4 fw-bold">Search</button>
        </div>
      </div>
      <table className="table table-bordered table-hover">
        <thead className="thead-dark">
          <tr>
            <th scope="col">SR NO</th>
            <th scope="col">TITLE</th>
            <th scope="col">CATEGORY</th>
            <th scope="col">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((data, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{data.title}</td>
                <td>{data.CategoryTitle}</td>
                <td>
                  <button className="btn">
                    <CiEdit size={20} />
                  </button>
                  <button className="btn">
                    <MdDeleteForever size={20} color="red" />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Add/Edit Blog Modal */}
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
                  {isEditing ? "Edit Blog" : "Add Blog"}
                </h5>
              </div>
              <div className="modal-body">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="titleInput"
                    name="title"
                    placeholder="Title"
                    value={currentBlog.title}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="titleInput">Title</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="categoryInput"
                    name="category"
                    placeholder="Category"
                    value={currentBlog.category}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="categoryInput">Category</label>
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
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AllBlogs;
