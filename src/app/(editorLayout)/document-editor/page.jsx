'use client';
import React, { useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import EditorSidebar from '@/app/ui/EditorSidebar/EditorSidebar';

export default function DocumentEditorPage() {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  return (
    <div className="nk-editor-main">
      <EditorSidebar newContent={true} />
      <div className="nk-editor-body">
        <Editor
          apiKey="acvoe0ol15rctl8dblbalahcfprzkdk6qlwg3k2cpzpu1hm0"
          onInit={(evt, editor) => (editorRef.current = editor)}
          init={{
            height: 500,
            menubar: false,
            content_style:
              'body { font-family:system-ui; font-size:14px; margin:0 5px; }',
          }}
        />
      </div>
    </div>
  );
}
