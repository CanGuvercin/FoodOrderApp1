import { useRef, useEffect } from 'react';
import { CreatePortal } from 'react-dom';

export default function Modal({children, open, className = ''}) {
    const dialog = useRef();
    
    useEffect(() => { 
        if (open) {
            dialog.current.showModal();
        }else{
            dialog.current.close();
        }
    }, [open]);
    
    return CreatePortal(
        <dialog ref={dialog} className={`modal ${className}`}>{children}</dialog>,
        document.getElementById('modal')
    );
}