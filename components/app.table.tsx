"use client";

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

import CreateModal from "./create.model";
import UpdateModal from "./update.model";

interface IProps {
  blogs: IBlog[];
}

const AppTable = (props: IProps) => {
  const { blogs } = props;

  const [blog, setBlog] = useState<IBlog | null>(null);
  const [showModalCreate, setShowModalCreate] = useState<boolean>(false);
  const [showModalUpdate, setShowModalUpdate] = useState<boolean>(false);

  const handleOpenUpdateDialog = (item: IBlog) => {
    setBlog(item);
    setShowModalUpdate(true);
  };

  return (
    <>
      <div className='flex justify-between mb-3'>
        <h3>Blogs</h3>

        <Button variant='secondary' onClick={() => setShowModalCreate(true)}>
          Add New
        </Button>
      </div>

      <Table bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Author</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {blogs?.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.author}</td>
              <td className='flex gap-2'>
                <Button>View</Button>
                <Button
                  variant='warning'
                  onClick={() => handleOpenUpdateDialog(item)}
                >
                  Edit
                </Button>
                <Button variant='danger'>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <CreateModal
        showModalCreate={showModalCreate}
        setShowModalCreate={setShowModalCreate}
      />

      <UpdateModal
        showModalUpdate={showModalUpdate}
        setShowModalUpdate={setShowModalUpdate}
        blog={blog}
        setBlog={setBlog}
      />
    </>
  );
};

export default AppTable;
