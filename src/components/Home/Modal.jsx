import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, ListGroup } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { addPost } from '../../redux/actions';
import FileBase64 from 'react-file-base64';
import { v4 as uuidv4 } from 'uuid';
function Example(args) {
    const dispatch = useDispatch();
    const [modal, setModal] = useState(false);
    const [data, setData] = useState({
        id: uuidv4(),
        title: '',
        category: '',
        description: '',
        cover: '',
        authorName: '',
        authorAvt: '',
        createAt: new Date(),
    });

    const [validate, setValidate] = useState('');

    const toggle = () => {
        setModal(!modal);
    };

    const handleChangeTitle = (e) => {
        setData({ ...data, title: e.target.value });
    };

    const handleChangeCategory = (e) => {
        setData({ ...data, category: e.target.value });
    };

    const handleChangeDescription = (e) => {
        setData({ ...data, description: e.target.value });
    };

    const handleChangeImg = (e) => {
        setData({ ...data, cover: e.base64 });
        console.log(e);
    };

    const handleChangeAuthorName = (e) => {
        setData({ ...data, authorName: e.target.value });
    };

    const handleChangeAuthoravt = (e) => {
        setData({ ...data, authorAvt: e.base64 });
    };

    const validateAll = () => {
        let msg = {};
        if (data.title === '') {
            msg.title = 'Please enter your blog title';
        }
        if (data.category === '') {
            msg.category = 'Please enter your blog category';
        }
        if (data.description === '') {
            msg.description = 'Please enter your blog description';
        }
        if (data.cover === '') {
            msg.cover = 'Please upload your blog image';
        }
        if (data.authorName === '') {
            msg.authorName = 'Please enter your blog author';
        }
        if (data.authorAvt === '') {
            msg.authorAvt = 'Please upload your author avatar';
        }

        setValidate(msg);
        if (Object.keys(msg).length > 0) return false;
        return true;
    };
    const handleAddPost = () => {
        const isValid = validateAll();
        if (!isValid) return;
        setModal(!modal);

        dispatch(addPost.addPostRequest(data));
        console.log('data', data);
    };

    return (
        <div>
            <div className="add__btn" onClick={toggle}>
                <i className="fa-solid fa-plus"></i>
            </div>
            <Modal isOpen={modal} toggle={toggle} {...args}>
                <ModalHeader toggle={toggle}>CREATE POST</ModalHeader>
                <ModalBody>
                    <Label>Title</Label>
                    <Input placeholder="Write title" value={data.title} onChange={handleChangeTitle} />
                    <p style={{ color: 'red', fontStyle: 'italic', fontSize: '13px' }}>{validate.title}</p>
                    <Label className="mt-2">Category</Label>
                    <Input placeholder="Write category" value={data.category} onChange={handleChangeCategory} />
                    <p style={{ color: 'red', fontStyle: 'italic', fontSize: '13px' }}>{validate.category}</p>
                    <Label className="mt-2">Description</Label>
                    <Input
                        type="textarea"
                        placeholder="Write something "
                        rows={5}
                        value={data.description}
                        onChange={handleChangeDescription}
                    />
                    <p style={{ color: 'red', fontStyle: 'italic', fontSize: '13px' }}>{validate.description}</p>
                    <Label className="mt-2">File</Label>
                    <br></br>
                    <FileBase64 type="file" multiple={false} value={data.cover} onDone={handleChangeImg} />
                    <p style={{ color: 'red', fontStyle: 'italic', fontSize: '13px' }}>{validate.cover}</p>
                    <hr></hr>
                    <Label className="mt-2">Author</Label>
                    <Input placeholder="Author Name" value={data.authorName} onChange={handleChangeAuthorName} />
                    <p style={{ color: 'red', fontStyle: 'italic', fontSize: '13px' }}>{validate.authorName}</p>
                    <Label className="mt-2">Author avatar</Label>
                    <br></br>
                    <FileBase64 type="file" value={data.authorAvt} onDone={handleChangeAuthoravt} />
                    <p style={{ color: 'red', fontStyle: 'italic', fontSize: '13px' }}>{validate.authorAvt}</p>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={handleAddPost}>
                        Create
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default Example;
