import React, { ChangeEvent, useRef, useState } from "react";
import './FileUpload.css';
import axios from 'axios';

const FileUpload = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);
  const [uploadStatus, setUploadStatus] = useState("select");

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const _event = event.target as HTMLInputElement;
    if (_event.files && _event.files.length > 0) {
      setSelectedFile(_event.files[0]);
    }
  };

  const onChooseFile = () => {
    (inputRef.current as HTMLInputElement).click();
  };

  const clearFileInput = () => {
    (inputRef.current as HTMLInputElement).value = "";
    setSelectedFile(null);
    setProgress(0);
    setUploadStatus("select");
  };

  const handleUpload = async () => {
    if (uploadStatus === "done") {
      clearFileInput();
      return;
    }

    try {
      setUploadStatus("uploading");

      if (selectedFile) {
        const formData = new FormData();
        formData.append("file", selectedFile);

        const response = await axios.post(
          "http://localhost:8000/api/upload",
          formData,
          {
            onUploadProgress: (progressEvent) => {
              const progress = progressEvent.total || 1;
              const percentCompleted = Math.round(
                (progressEvent.loaded * 100) / progress
              );
              setProgress(percentCompleted);
            },
          }
        );
      }

      setUploadStatus("done");
    } catch (error) {
      setUploadStatus("select");
    }
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="file"
        onChange={(e) => handleFileChange(e)}
        style={{ display: "none" }}
      />

      {/* Button to trigger the file input dialog */}
      {!selectedFile && (
        <button className="file-btn" onClick={onChooseFile}>
          <span className="material-symbols-outlined">upload</span> Upload File
        </button>
      )}

      {selectedFile && (
        <>
          <div className="file-card">
            <span className="material-symbols-outlined icon">description</span>

            <div className="file-info">
              <div style={{ flex: 1 }}>
                <h6>{selectedFile?.name}</h6>

                <div className="progress-bg">
                  <div className="progress" style={{ width: `${progress}%` }} />
                </div>
              </div>

              {uploadStatus === "select" ? (
                <button onClick={clearFileInput}>
                  <span className="material-symbols-outlined close-icon">
                    close
                  </span>
                </button>
              ) : (
                <div className="check-circle">
                  {uploadStatus === "uploading" ? (
                    `${progress}%`
                  ) : uploadStatus === "done" ? (
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: "20px" }}
                    >
                      check
                    </span>
                  ) : null}
                </div>
              )}
            </div>
          </div>
          <button className="upload-btn" onClick={handleUpload}>
            {uploadStatus === "select" || uploadStatus === 'uploading' ? "Upload" : "Done"}
          </button>
        </>
      )}
    </div>
  );
};

export default FileUpload;