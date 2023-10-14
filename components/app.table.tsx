"use client";

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

import CreateModal from "./create.model";

interface IProps {
  blogs: IBlog[];
}

const AppTable = (props: IProps) => {
  const { blogs } = props;

  const [showModalCreate, setShowModalCreate] = useState<boolean>(false);

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
          {blogs?.map((blog) => (
            <tr key={blog.id}>
              <td>{blog.id}</td>
              <td>{blog.title}</td>
              <td>{blog.author}</td>
              <td className='flex gap-2'>
                <Button>View</Button>
                <Button variant='warning'>Edit</Button>
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
    </>
  );
};

export default AppTable;
