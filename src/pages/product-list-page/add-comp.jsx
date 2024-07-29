import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { booksData } from '../../books-data';

function ProductAddComp(props) {
    const { addBookModal, toggle, setCurrentBookData } = props



    return (
        <div>

            <Modal isOpen={addBookModal} toggle={toggle} {...props}>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
                        <div className="max-w-full overflow-x-auto">
                            <table className="w-full table-auto">
                                <thead>
                                    <tr className="bg-gray-2 text-left dark:bg-meta-4">
                                        <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                                            Product Name
                                        </th>


                                    </tr>
                                </thead>
                                <tbody>
                                    {booksData.map((book, key) => (
                                        <div className='flex' key={key}>
                                            <label htmlFor={key} >
                                                <tr >
                                                    <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                                                        <h5 className="font-medium text-black dark:text-white">
                                                            {book.title}
                                                        </h5>
                                                        <p className="text-sm">${book.pageCount}</p>
                                                    </td>
                                                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                                        <p className="text-black dark:text-white">
                                                            {book.publishDate}
                                                        </p>
                                                    </td>
                                                </tr>
                                            </label>
                                            <input className='' type="checkbox" id={key} />

                                        </div>




                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>




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

export default ProductAddComp;