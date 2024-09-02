"use client";

import { Button } from 'antd';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import 'react-quill/dist/quill.snow.css';

// Dynamically import ReactQuill with SSR disabled
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const TextEditor = () => {
  const [value, setValue] = useState('<h2>Education is the cornerstone of personal and societal development...</h2>');

  const toolbarOptions = [
    ['image'],
    [{ 'header': [1, 2, false] }],
    ['bold', 'italic', 'underline'],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'align': [] }],
    [{ 'color': [] }, { 'background': [] }],
  ];

  const moduleConest = {
    toolbar: toolbarOptions,
  };

  return (
    <>
      <ReactQuill
        modules={moduleConest}
        theme="snow"
        value={value}
        onChange={setValue}
        placeholder='Start writing ......'
      />
      <Button
        size='large'
        block
        style={{ marginTop: "20px", backgroundColor: "#2B4E63", border: "none", color: "#FDFDFD" }}
      >
        Save Changes
      </Button>
    </>
  );
};

export default dynamic(() => Promise.resolve(TextEditor), { ssr: false });
