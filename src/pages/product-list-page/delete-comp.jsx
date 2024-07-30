
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function DeleteModal(props) {
    const { selectedBook, deleteBookHandler, deleteModal, deleteModalToggle } = props;

    return (
        <Modal isOpen={deleteModal} toggle={deleteModalToggle}>
            <ModalHeader toggle={deleteModalToggle}>Silme Onayı</ModalHeader>
            <ModalBody>
                <h3>Bu ürünü silmek istediğinize emin misiniz?</h3>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={() => deleteBookHandler(selectedBook)}>
                    Evet
                </Button>{' '}
                <Button color="secondary" onClick={deleteModalToggle}>
                    Hayır
                </Button>
            </ModalFooter>
        </Modal>
    );
}

export default DeleteModal;
