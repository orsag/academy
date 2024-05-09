import React, { useState } from 'react'
import './ImageCropperPage.css';
import FileInput from '../../components/FileInput/FileInput';
import ImageCropper from '../../components/FileInput/ImageCropper';
import { Area } from 'react-easy-crop';

const ImageCropperPage = () => {
  // Define state variables
  const [image, setImage] = useState("");
  const [currentPage, setCurrentPage] = useState("choose-img");
  const [imgAfterCrop, setImgAfterCrop] = useState("");

  // Callback function when an image is selected
  const onImageSelected = (selectedImg: any) => {
    setImage(selectedImg);
    setCurrentPage("crop-img");
  };

  // Callback function when cropping is done
  const onCropDone = (imgCroppedArea: Area | null) => {

    // Create a canvas element to crop the image
    const canvasEle = document.createElement("canvas");
    if (imgCroppedArea) {
      canvasEle.width = imgCroppedArea.width;
      canvasEle.height = imgCroppedArea.height;
    }

    const context = canvasEle.getContext("2d");

    // Load the selected image
    let imageObj1 = new Image();
    imageObj1.src = image;

    imageObj1.onload = function () {
      // Draw the cropped portion of the image onto the canvas
      if (imgCroppedArea) {
        context?.drawImage(
          imageObj1,
          imgCroppedArea.x,
          imgCroppedArea.y,
          imgCroppedArea.width,
          imgCroppedArea.height,
          0,
          0,
          imgCroppedArea.width,
          imgCroppedArea.height
        );
      }

      // Convert the canvas content to a data URL (JPEG format)
      const dataURL = canvasEle.toDataURL("image/jpeg");

      setImgAfterCrop(dataURL);
      setCurrentPage("img-cropped");
    };
  };

  // Callback function when cropping is canceled
  const onCropCancel = () => {
    setCurrentPage("choose-img");
    setImage("");
  };

  return (
    <div className="cropper-container">
      {currentPage === "choose-img" ? (
        <FileInput onImageSelected={onImageSelected} />
      ) : currentPage === "crop-img" ? (
        <ImageCropper
          image={image}
          onCropDone={onCropDone}
          onCropCancel={onCropCancel}
        />
      ) : (
        // Display the cropped image and options to crop a new image or start over
        <div>
          <div>
            <img src={imgAfterCrop} className="cropped-img" />
          </div>

          <button
            onClick={() => {
              // Allow cropping the current image again
              setCurrentPage("crop-img");
            }}
            className="btn"
          >
            Crop
          </button>

          <button
            onClick={() => {
              // Start over by choosing a new image
              setCurrentPage("choose-img");
              setImage("");
            }}
            className="btn"
          >
            New Image
          </button>
        </div>
      )}
    </div>
  );
}

export default ImageCropperPage