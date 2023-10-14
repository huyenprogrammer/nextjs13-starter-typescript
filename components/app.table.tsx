"use client";

import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

interface IProps {
  blogs: IBlog[];
}

const AppTable = (props: IProps) => {
  const { blogs } = props;

  return (
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
  );
};

export default AppTable;
