import { CreatePortal } from 'react-dom';

export default function Modal(){
    return CreatePortal(<dialog></dialog>, document.getElementById('modal'));
}