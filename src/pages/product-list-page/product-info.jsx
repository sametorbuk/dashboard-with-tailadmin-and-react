import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



function ProductInfoModal(props) {
    const { productInfoModal, toggle, book } = props

    return (
        <div>

            <Modal isOpen={productInfoModal} toggle={toggle} >
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                    <h2>{book.title}</h2>
                    <p>Author: {book.author}</p>
                    <p>Publish Date: {book.publishDate}</p>
                    <p>Page Count: {book.pageCount}</p>
                    <img src={book["coverImage"]} alt="" />
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>
                        Do Something
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );

}

export default ProductInfoModal;