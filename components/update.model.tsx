import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { mutate } from "swr";

interface IProps {
  showModalUpdate: boolean;
  setShowModalUpdate: (v: boolean) => void;
  blog: IBlog | null;
  setBlog: (v: IBlog | null) => void;
}

const UpdateModal = (props: IProps) => {
  const { showModalUpdate, setShowModalUpdate, blog, setBlog } = props;

  const [ID, setID] = useState<number | null>(null);
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const handleSubmit = () => {
    const data = {
      title: title.trim(),
      author: author.trim(),
      content: content.trim(),
    };

    if (!ID) {
      toast.error("Blog not found!");
    }

    if (!data?.title) {
      toast.error("Title required!");
      return;
    }

    if (!data?.author) {
      toast.error("Author required!");
      return;
    }

    if (!data?.content) {
      toast.error("Content required!");
      return;
    }

    fetch(`http://localhost:8000/blogs/${ID}`, {
      method: "PUT",
      headers: {
        Accept: "application/json, text/plan, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, author, content }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          toast.success("Update blog succeed");
          mutate("http://localhost:8000/blogs");
          handleClose();
        }
      });
  };

  const handleClose = () => {
    setID(null);
    setTitle("");
    setAuthor("");
    setContent("");
    setBlog(null);
    setShowModalUpdate(false);
  };

  useEffect(() => {
    if (blog) {
      setID(blog.id);
      setTitle(blog.title);
      setAuthor(blog.author);
      setContent(blog.content);
    }
  }, [blog]);

  return (
    <Modal
      show={showModalUpdate}
      backdrop='static'
      size='lg'
      onHide={handleClose}
    >
      <Modal.Header closeButton>
        <Modal.Title>Update blog</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group className='mb-3'>
            <Form.Label>ID</Form.Label>

            <Form.Control value={ID?.toString()} disabled />
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label>Title</Form.Label>

            <Form.Control
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label>Author</Form.Label>

            <Form.Control
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label>Content</Form.Label>

            <Form.Control
              as='textarea'
              rows={3}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant='secondary' onClick={handleClose}>
          Close
        </Button>

        <Button variant='primary' onClick={handleSubmit}>
          Update
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UpdateModal;
