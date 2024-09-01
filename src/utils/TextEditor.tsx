"use client"
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const TextEditor = () => {
    const [value, setValue] = useState('');
    console.log(value);
    

    const toolbarOptions = [
        ['image'], 
        [{ 'header': [1, 2, false] }], 
        ['bold', 'italic', 'underline'], 
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'align': [] }], 
        [{ 'color': [] }, { 'background': [] }],  
    ];
    const module = {
        toolbar:  toolbarOptions
    }
    return (
        <ReactQuill modules={module} theme="snow" value={value} onChange={setValue} />
    );
};

export default TextEditor;