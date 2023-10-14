import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

interface IProps {
  showModalCreate: boolean;
  setShowModalCreate: (v: boolean) => void;
}

const CreateModal = (props: IProps) => {
  const { showModalCreate, setShowModalCreate } = props;

  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const handleSubmit = () => {};

  const handleClose = () => {
    setTitle("");
    setAuthor("");
    setContent("");
    setShowModalCreate(false);
  };

  return (
    <Modal
      show={showModalCreate}
      backdrop='static'
      size='lg'
      onHide={handleClose}
    >
      <Modal.Header closeButton>
        <Modal.Title>Add new blog</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
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
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateModal;
