import React, { useState } from 'react';
import CustomCardStyle3 from '../CustomCard/CustomCardStyle3';
import IconboxStyle3 from '../Iconbox/IconboxStyle3';

export default function EditorSidebar({
  newContent,
  generateContent,
  editContent,
}) {
  const [activeTab, setActiveTab] = useState(1);
  const handleTabClick = tabNumber => {
    setActiveTab(tabNumber);
  };
  return (
    <div className="nk-editor-base">
      <ul className="nav nav-tabs nav-sm nav-tabs-s1 px-3">
        <li className="nav-item">
          <button
            className={` ${activeTab === 1 ? 'nav-link active' : 'nav-link '}`}
            type="button"
            onClick={() => handleTabClick(1)}
          >
            AI Writer
          </button>
        </li>
        <li className="nav-item">
          <button
            className={` ${activeTab === 2 ? 'nav-link active' : 'nav-link '}`}
            type="button"
            onClick={() => handleTabClick(2)}
          >
            History
          </button>
        </li>
      </ul>
      <div className="tab-content">
        {activeTab === 1 && (
          <>
            {newContent && (
              <div className="tab-pane fade show active">
                <div className="px-3 pt-4 pb-3">
                  <h6 className="fw-normal">What do you want to generate?</h6>
                </div>
                <ul className="d-flex flex-column">
                  <li>
                    <IconboxStyle3
                      title="Blog Ideas"
                      subTitle="Write blog ideas for business engagements."
                      icon="file-text-fill"
                      iconColorClass="text-warning"
                      href="/document-editor-generate"
                    />
                  </li>
                  <li>
                    <IconboxStyle3
                      title="Blog Post Outline"
                      subTitle="Create blog outlines that performs best."
                      icon="list-thumb-fill"
                      iconColorClass="text-info"
                      href="/document-editor-generate"
                    />
                  </li>
                  <li>
                    <IconboxStyle3
                      title="Social Media Posts"
                      subTitle="Write blog ideas for business engagements."
                      icon="pen-fill"
                      iconColorClass="text-primary"
                      href="/document-editor-generate"
                    />
                  </li>
                  <li>
                    <IconboxStyle3
                      title="Website Headlines/Copy"
                      subTitle="Professional copy for your website"
                      icon="laptop"
                      iconColorClass="text-blue"
                      href="/document-editor-generate"
                    />
                  </li>
                </ul>
              </div>
            )}
            {generateContent && (
              <div className="tab-pane fade show active">
                <form action="/document-editor-edit" className="px-4 py-4">
                  <div className="row gy-4 gx-4">
                    <div className="col-12">
                      <div className="form-group">
                        <label className="form-label">Select Template</label>
                        <div className="form-control-wrap">
                          <select className="form-select">
                            <option selected>Social Media Posts</option>
                            <option>Website Copy</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label className="form-label">
                          What do you want to generate?
                        </label>
                        <div className="form-control-wrap">
                          <textarea
                            cols={30}
                            rows={4}
                            className="form-control"
                            defaultValue={
                              'Write a Facebook post about openai that revolutionizes the world through the power of data.'
                            }
                          />
                        </div>
                        <div className="form-note d-flex justify-content-end">
                          <span>0/500 Characters</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label htmlFor="PrimaryKeywords" className="form-label">
                          Primary Keywords
                        </label>
                        <div className="form-control-wrap">
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="chatgpt, openai, facebook"
                          />
                        </div>
                        <div className="form-note d-flex justify-content-between">
                          <span>Separated with a comma</span>
                          <span>0/10</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-group">
                        <label className="form-label">Select Language</label>
                        <div className="form-control-wrap">
                          <select className="form-select">
                            <option selected>English US</option>
                            <option>Español</option>
                            <option>Françaisy</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-group">
                        <label className="form-label">Select Tone</label>
                        <div className="form-control-wrap">
                          <select className="form-select">
                            <option selected>Friendly</option>
                            <option>Creative</option>
                            <option>Extreme</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-group d-flex align-items-center flex-row-reverse">
                        <label
                          htmlFor="Variant"
                          className="form-label ms-3 mb-0 flex-grow-1"
                        >
                          Variant
                        </label>
                        <div className="form-control-wrap w-70px">
                          <input
                            id="Variant"
                            type="number"
                            className="form-control"
                            defaultValue={1}
                            min="0"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <button className="btn btn-primary w-100">
                        Generate
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            )}
            {editContent && (
              <div className="tab-pane fade show active">
                <div className="p-4 ">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <div className="media media-xs media-middle media-circle text-primary bg-primary bg-opacity-20">
                        <em className="icon ni ni-pen-fill" />
                      </div>
                      <h5 className="fs-14px fw-normal ms-2">
                        Social Media Post
                      </h5>
                    </div>
                    <a href="#" className="link">
                      Edit Prompt
                    </a>
                  </div>
                  <div className="card bg-lighter shadow-none mt-3">
                    <div className="p-3">
                      <p className="small text-dark">
                        Write a Facebook post about openai that revolutionizes
                        the world through the power of data.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-4 border-top border-light">
                  <div className="row g-4">
                    <div className="col-12">
                      <CustomCardStyle3
                        variantText="Variant 1"
                        text="Hey everyone! Have you met ChatGPT? As an AI language model, I'm trained to answer your questions and have a conversation with you! Ask me anything, and let's get chatting! 😊"
                        wordNumber={42}
                      />
                    </div>
                    <div className="col-12">
                      <CustomCardStyle3
                        variantText="Variant 2"
                        text="Are you tired of Googling for answers? Meet ChatGPT - your one-stop solution for all your queries! I'm an AI language model trained to provide you with accurate and informative responses. Try me out! 💬"
                        wordNumber={22}
                      />
                    </div>
                    <div className="col-12">
                      <CustomCardStyle3
                        variantText="Variant 3"
                        text="OpenAI is changing the game for data-driven innovation. With its cutting-edge technology, we can harness the power of data in ways we never thought possible."
                        wordNumber={32}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        )}

        {activeTab === 2 && (
          <div className="tab-pane fade show active">
            <div className="px-3 py-4">
              <div className="d-flex flex-wrap justify-content-between mb-3">
                <h6 className="mb-0 me-3">Generation History</h6>
                <div className="fs-11px">
                  <span className="text-dark">1763</span> words left.{' '}
                  <a href="#">Go Unlimited</a>
                </div>
              </div>
              <div className="row g-4">
                <div className="col-12">
                  <CustomCardStyle3
                    category="Social Media Post"
                    text="Hey everyone! Have you met ChatGPT? As an AI language model, I'm trained to answer your questions and have a conversation with you! Ask me anything, and let's get chatting! 😊"
                    date="Feb 23, 2023"
                    time="05:23 PM"
                    wordNumber={42}
                  />
                </div>
                <div className="col-12">
                  <CustomCardStyle3
                    category="Social Media Post"
                    text="Are you tired of Googling for answers? Meet ChatGPT - your one-stop solution for all your queries! I'm an AI language model trained to provide you with accurate and informative responses. Try me out! 💬"
                    date="Feb 23, 2023"
                    time="06:23 PM"
                    wordNumber={56}
                  />
                </div>
                <div className="col-12">
                  <CustomCardStyle3
                    category="Social Media Post"
                    text="OpenAI is changing the game for data-driven innovation. With its cutting-edge technology, we can harness the power of data in ways we never thought possible."
                    date="Feb 23, 2023"
                    time="07:23 PM"
                    wordNumber={78}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
