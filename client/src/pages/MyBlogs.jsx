import React, { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
import { loadAllBlogs, addBlog, editBlog, deleteBlog } from "../services/blogs";
import { toast } from "react-toastify";

function MyBlogs() {
  const [searchText, setSearchText] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [currentBlog, setCurrentBlog] = useState({
    id: null,
    title: "",
    category: "",
    contents: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [viewBlog, setViewBlog] = useState(null);

  const handleAddClick = () => {
    setIsEditing(false);
    setCurrentBlog({ id: null, title: "", category: "", contents: "" });
    setShowModal(true);
  };

  const handleEditClick = (blog) => {
    setIsEditing(true);
    setCurrentBlog(blog);
    setShowModal(true);
  };

  const handleViewClick = (blog) => {
    setViewBlog(blog);
    setShowViewModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setShowViewModal(false);
  };

  const handleSave = async () => {
    if (isEditing) {
      // Edit existing blog
      const res = await editBlog(currentBlog);
      if (res.status === "success") {
        setBlogs(
          blogs.map((blog) => (blog.id === currentBlog.id ? currentBlog : blog))
        );
        toast.success("Blog updated successfully!");
      } else {
        toast.error(res.error);
      }
    } else {
      // Add new blog
      const res = await addBlog(currentBlog);
      if (res.status === "success") {
        setBlogs([...blogs, res.data]);
        toast.success("Blog added successfully!");
      } else {
        toast.error(res.error);
      }
    }
    setShowModal(false);
  };

  const handleDelete = async (id) => {
    const res = await deleteBlog(id);
    if (res.status === "success") {
      setBlogs(blogs.filter((blog) => blog.id !== id));
      toast.success("Blog deleted successfully!");
    } else {
      toast.error(res.error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentBlog({ ...currentBlog, [name]: value });
  };

  const showAllBlogs = async () => {
    const res = await loadAllBlogs();
    if (res.status === "success") {
      setBlogs(res.data);
    } else {
      toast.error(res.error);
    }
  };

  useEffect(() => {
    showAllBlogs();
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
        <div>
          <button
            type="button"
            className="btn btn-success px-4 fw-bold ms-3"
            onClick={handleAddClick}
          >
            ADD
          </button>
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
          {blogs
            .filter((blog) =>
              blog.title.toLowerCase().includes(searchText.toLowerCase())
            )
            .map((blog, index) => (
              <tr key={blog.id}>
                <td>{index + 1}</td>
                <td
                  className="text-primary cursor-pointer"
                  onClick={() => handleViewClick(blog)}
                >
                  {blog.title}
                </td>
                <td>{blog.CategoryTitle}</td>
                <td>
                  <button className="btn" onClick={() => handleEditClick(blog)}>
                    <CiEdit size={20} />
                  </button>
                  <button className="btn" onClick={() => handleDelete(blog.id)}>
                    <MdDeleteForever size={20} color="red" />
                  </button>
                </td>
              </tr>
            ))}
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
                <button
                  type="button"
                  className="close"
                  onClick={handleCloseModal}
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
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
                <div className="form-floating mb-3">
                  <textarea
                    className="form-control"
                    id="contentsInput"
                    name="contents"
                    placeholder="Contents"
                    value={currentBlog.contents}
                    onChange={handleInputChange}
                  ></textarea>
                  <label htmlFor="contentsInput">Contents</label>
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

      {/* View Blog Modal */}
      {showViewModal && viewBlog && (
        <div
          className="modal fade show"
          style={{ display: "block" }}
          tabIndex="-1"
          role="dialog"
          aria-labelledby="viewModalLabel"
          aria-hidden="false"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="viewModalLabel">
                  View Blog
                </h5>
                <button
                  type="button"
                  className="close"
                  onClick={handleCloseModal}
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <h4>{viewBlog.title}</h4>
                <p>
                  <strong>Category:</strong> {viewBlog.CategoryTitle}
                </p>
                <p>
                  <strong>Contents:</strong>
                </p>
                <p>{viewBlog.contents}</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyBlogs;
