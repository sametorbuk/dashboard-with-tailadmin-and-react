
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



function ProductInfoModal(props) {
    const { productInfoModal, toggle, book } = props

    return (
        <div>

            <Modal isOpen={productInfoModal} toggle={toggle} >
                <ModalHeader toggle={toggle}>Ürün Bilgisi</ModalHeader>
                <ModalBody className='flex items-center flex-col gap-[1.5rem]'>
                    <img className='w-[14rem]' src={book["coverImage"]} alt="" />
                    <h2 className='text-2xl font-bold'>{book.title}</h2>

                    <div className='flex'>
                        <p>Yazar: </p>
                        <p className='font-bold'>{book.author}</p>
                    </div>
                    <div className='flex'>
                        <p>Yayınlanma Tarihi: </p>
                        <p className='font-bold'>{book.publishDate}</p>
                    </div>

                    <div className='flex'>
                        <p>Sayfa Sayısı:</p>
                        <p className='font-bold'> {book.pageCount}</p>
                    </div>

                    <p>{book.description}</p>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>
                        Cancel
                    </Button>{' '}

                </ModalFooter>
            </Modal>
        </div>
    );

}

export default ProductInfoModal;