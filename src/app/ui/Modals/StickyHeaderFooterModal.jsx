import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

export default function StickyHeaderFooterModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Sticky header footer modal
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        className="modal-dialog-scrollable"
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          This is some placeholder content to show the scrolling behavior for
          modals. We use repeated line breaks to demonstrate how content can
          exceed minimum inner height, thereby showing inner scrolling. When
          content becomes longer than the predefined max-height of modal,
          content will be cropped and scrollable within the modal. This is some
          placeholder content to show the scrolling behavior for modals. We use
          repeated line breaks to demonstrate how content can exceed minimum
          inner height, thereby showing inner scrolling. When content becomes
          longer than the predefined max-height of modal, content will be
          cropped and scrollable within the modal. This is some placeholder
          content to show the scrolling behavior for modals. We use repeated
          line breaks to demonstrate how content can exceed minimum inner
          height, thereby showing inner scrolling. When content becomes longer
          than the predefined max-height of modal, content will be cropped and
          scrollable within the modal. This is some placeholder content to show
          the scrolling behavior for modals. We use repeated line breaks to
          demonstrate how content can exceed minimum inner height, thereby
          showing inner scrolling. When content becomes longer than the
          predefined max-height of modal, content will be cropped and scrollable
          within the modal. This is some placeholder content to show the
          scrolling behavior for modals. We use repeated line breaks to
          demonstrate how content can exceed minimum inner height, thereby
          showing inner scrolling. When content becomes longer than the
          predefined max-height of modal, content will be cropped and scrollable
          within the modal. This is some placeholder content to show the
          scrolling behavior for modals. We use repeated line breaks to
          demonstrate how content can exceed minimum inner height, thereby
          showing inner scrolling. When content becomes longer than the
          predefined max-height of modal, content will be cropped and scrollable
          within the modal. This is some placeholder content to show the
          scrolling behavior for modals. We use repeated line breaks to
          demonstrate how content can exceed minimum inner height, thereby
          showing inner scrolling. When content becomes longer than the
          predefined max-height of modal, content will be cropped and scrollable
          within the modal. This is some placeholder content to show the
          scrolling behavior for modals. We use repeated line breaks to
          demonstrate how content can exceed minimum inner height, thereby
          showing inner scrolling. When content becomes longer than the
          predefined max-height of modal, content will be cropped and scrollable
          within the modal. This is some placeholder content to show the
          scrolling behavior for modals. We use repeated line breaks to
          demonstrate how content can exceed minimum inner height, thereby
          showing inner scrolling. When content becomes longer than the
          predefined max-height of modal, content will be cropped and scrollable
          within the modal. This is some placeholder content to show the
          scrolling behavior for modals. We use repeated line breaks to
          demonstrate how content can exceed minimum inner height, thereby
          showing inner scrolling. When content becomes longer than the
          predefined max-height of modal, content will be cropped and scrollable
          within the modal.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
