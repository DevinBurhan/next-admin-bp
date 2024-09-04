'use client';
import React, { useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import EditorSidebar from '@/app/ui/EditorSidebar/EditorSidebar';

export default function DocumentEditorEditPage() {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <div className="nk-editor-main">
      <EditorSidebar editContent={true} />
      <div className="nk-editor-body">
        <Editor
          apiKey="acvoe0ol15rctl8dblbalahcfprzkdk6qlwg3k2cpzpu1hm0"
          onInit={(evt, editor) => (editorRef.current = editor)}
          initialValue="<h1>The Importance of Business Metrics in Product Design Industry</h1><h3>Introduction</h3><p>In the product design industry, creating a successful product is a top priority for any business. However, creating a product that sells and brings in revenue is equally important. This is where business metrics come into play. Business metrics are key performance indicators (KPIs) that measure a company's success in achieving its goals. In this blog post, we will discuss the importance of business metrics in the product design industry.</p><h3>Understanding Customer Needs</h3><p>One of the most important aspects of product design is understanding customer needs. Business metrics help companies gather data on customer behavior, such as purchase history, product reviews, and customer feedback. By analyzing this data, companies can determine what products are in demand and what features customers are looking for. This helps companies design products that meet customer needs, which can increase sales and customer satisfaction.</p><h3>Measuring Product Performance</h3><p>Business metrics also help companies measure the performance of their products. Metrics such as sales revenue, profit margin, and customer retention rate can provide insight into how well a product is performing in the market. By analyzing these metrics, companies can make data-driven decisions about product design, pricing, and marketing strategies. This can increase profitability and help companies stay competitive in the market.</p><h3>Identifying Areas for Improvement</h3><p>Finally, business metrics can help companies identify areas for improvement in their product design process. Metrics such as product development cycle time, defect rate, and customer satisfaction can help companies pinpoint areas where they can improve their processes. By addressing these areas, companies can streamline their product design process and improve the quality of their products.</p>"
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
