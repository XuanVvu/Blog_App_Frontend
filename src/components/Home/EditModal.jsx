import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label } from 'reactstrap';
import Filebase64 from 'react-file-base64';
import { useDispatch } from 'react-redux';
import * as actions from '../../redux/actions';

function EditModal({ data }) {
    const [modal, setModal] = useState(false);
    const dispatch = useDispatch();
    const [updateData, setUpdateData] = useState({
        title: data.title,
        category: data.category,
        description: data.description,
        cover: data.cover,
        createAt: data.createAt,
        authorName: data.authorName,
        authorAvt: data.authorAvt,
    });
    const toggle = () => setModal(!modal);
    const handleUpdate = () => {
        console.log('[updateData]', updateData);
        dispatch(actions.updatePost.updatePostRequest({ ...updateData, id: data.id }));

        setModal(!modal);
    };

    return (
        <div>
            <div className="function__popover__item" onClick={toggle}>
                EDIT
            </div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>EDIT POST</ModalHeader>
                <ModalBody>
                    <Label>Title</Label>
                    <Input
                        placeholder="Write title"
                        value={updateData.title}
                        onChange={(e) => setUpdateData({ ...updateData, title: e.target.value })}
                    />
                    <Label className="mt-2">Category</Label>
                    <Input
                        placeholder="Write category"
                        value={updateData.category}
                        onChange={(e) => setUpdateData({ ...updateData, category: e.target.value })}
                    />
                    <Label className="mt-2">Description</Label>
                    <Input
                        type="textarea"
                        placeholder="Write something "
                        rows={5}
                        value={updateData.description}
                        onChange={(e) => setUpdateData({ ...updateData, description: e.target.value })}
                    />
                    <Label className="mt-2">File</Label>
                    <br></br>
                    <Filebase64
                        type="file"
                        value={updateData.cover}
                        onDone={(e) => setUpdateData({ ...updateData, cover: e.base64 })}
                    />
                    <hr></hr>
                    <Label className="mt-2">Author</Label>

                    <Input
                        placeholder="Author Name"
                        value={updateData.authorName}
                        onChange={(e) => setUpdateData({ ...updateData, authorName: e.target.value })}
                    />
                    <Label className="mt-2">Author avatar</Label>
                    <br></br>
                    <Filebase64 type="file" onDone={(e) => setUpdateData({ ...updateData, authorAvt: e.base64 })} />
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={handleUpdate}>
                        UPDATE
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default EditModal;
