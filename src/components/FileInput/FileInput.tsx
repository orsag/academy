import React, { ChangeEvent, useRef } from "react";

type FileInputType = {
    onImageSelected: (item: any) => void;
}

function FileInput({ onImageSelected }: FileInputType) {
  const inputRef = useRef<HTMLInputElement>();

  // Handle the change event when a file is selected
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = function (e) {
        onImageSelected(reader.result);
      };
    }
  };

  const onChooseImg = () => {
    (inputRef.current as HTMLInputElement).click();
  };

  return (
    <div>
      {/* Hidden file input element */}
      <input
        type="file"
        accept="image/*"
        ref={inputRef as any}
        onChange={handleOnChange}
        style={{ display: "none" }}
      />

      {/* Button to trigger the file input dialog */}
      <button className="btn" onClick={onChooseImg}>
        Choose Image
      </button>
    </div>
  );
}

export default FileInput;