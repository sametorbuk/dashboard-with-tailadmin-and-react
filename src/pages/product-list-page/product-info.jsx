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
                    <p>Yazar: {book.author}</p>
                    <p>Yayınlanma Tarihi: {book.publishDate}</p>
                    <p>Sayfa Sayısı: {book.pageCount}</p>
                    <img className='w-[10rem]' src={book["coverImage"]} alt="" />
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