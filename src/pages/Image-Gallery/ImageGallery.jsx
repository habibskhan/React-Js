import React, { useState } from "react";
import "./imagegallery.scss";

// react-image-gallery
import Gallery from "react-image-gallery";
import ImageGallery from "react-image-gallery";

// react-image-magnify
import Magnify from "react-image-magnify";

// react-image-lightbox
// import Lightbox from "react-image-lightbox";
// import "react-image-lightbox/style.css";

// yet another react lightbox
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Inline from "yet-another-react-lightbox/plugins/inline";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

// const images = [
//   {
//     original: "https://via.placeholder.com/270x270/000/000",
//     thumbnail: "https://via.placeholder.com/70x70/000/000",
//     description: "Image 1 description",
//   },
//   {
//     original: "https://via.placeholder.com/270x270/EC1D1D/EC1D1D",
//     thumbnail: "https://via.placeholder.com/70x70/EC1D1D/EC1D1D",
//     description: "Image 2 description",
//   },
//   {
//     original: "https://via.placeholder.com/270x270/eee/eee",
//     thumbnail: "https://via.placeholder.com/70x70/eee/eee",
//     description: "Image 3 description",
//   },
//   // Add more images as needed
// ];

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

const arrOfImages = [
  "https://www.geeksforgeeks.org/wp-content/uploads/html-768x256.png",
  "https://www.geeksforgeeks.org/wp-content/uploads/CSS-768x256.png",
  "https://www.geeksforgeeks.org/wp-content/uploads/php-1-768x256.png",
];

const ImageGallery1 = () => {
  const [indexOfImages, setIndexOfImages] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const [open, setOpen] = React.useState(false);
  const zoomRef = React.useRef(null);

  const openModalAndSetIndex = (index) => {
    setIndexOfImages(index);
    setShowModal(true);
    return;
  };

  const renderCustomThumb = (item) => (
    <img
      src={item.thumbnail}
      alt={item.description}
      className="gallery-thumbnail"
    />
  );
  const renderCustomImage = (item) => (
    <Magnify
      {...{
        smallImage: {
          alt: item.description,
          isFluidWidth: true,
          src: item.original,
        },
        largeImage: {
          src: item.original,
          width: 1200,
          height: 1800,
        },
        imageClassName: "gallery-image",
        enlargedImageClassName: "gallery-enlarged-image",
      }}
    />
  );
  return (
    <>
      <section className="imagegallery_sec1">
        <div className="my-container">
          <h2>Welcome to Image Gallery</h2>
          {/* <Gallery
          items={images}
          showFullscreenButton={false}
          showPlayButton={false}
          renderThumbInner={renderCustomThumb}
          renderItem={renderCustomImage}
        /> */}
          <ImageGallery items={images} autoPlay={true} showBullets={true} />
          <ImageGallery items={images} autoPlay={true} showBullets={true} />
        </div>
      </section>

      <section className="imagegallery_sec2">
        <div className="my-container">
          <h1>Image Slide Show With Zoom In/Out feature</h1>
          {arrOfImages.map((image, index) => (
            <img
              key={image}
              style={{
                height: "200px",
                width: "300px",
                margin: "20px",
              }}
              src={image}
              alt={image}
              onClick={() => openModalAndSetIndex(index)}
            />
          ))}
          {/* <div>
                <button type="button"
                    onClick={() => setShowModal(true)}>
                    Show Lightbox
                </button>
            </div> */}
          {showModal && (
            <Lightbox
              mainSrc={arrOfImages[indexOfImages]}
              nextSrc={arrOfImages[(indexOfImages + 1) % arrOfImages.length]}
              prevSrc={
                arrOfImages[
                  (indexOfImages + arrOfImages.length - 1) % arrOfImages.length
                ]
              }
              onCloseRequest={() => setShowModal(false)}
              onMovePrevRequest={() =>
                setIndexOfImages(
                  (indexOfImages + arrOfImages.length - 1) % arrOfImages.length
                )
              }
              onMoveNextRequest={() =>
                setIndexOfImages(
                  (indexOfImages + arrOfImages.length + 1) % arrOfImages.length
                )
              }
            />
          )}
          ;
        </div>
      </section>

      <section className="yet_lightbox">
        <button type="button" onClick={() => setOpen(true)}>
          Open Lightbox
        </button>
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={[
            { src: "https://picsum.photos/id/1018/500/500/" },
            { src: "https://picsum.photos/id/1015/500/500/" },
            { src: "https://picsum.photos/id/1019/500/500/" },
          ]}
          plugins={[Captions, Fullscreen, Slideshow, Video, Zoom]}
          // inline={{
          //   style: { width: "100%", maxWidth: "900px", aspectRatio: "3 / 2" },
          // }}
          zoom={{
            // scrollToZoom:true,
            maxZoomPixelRatio: 5,
          }}
          animation={{
            zoom: 500,
          }}
        />
      </section>
    </>
  );
};

export default ImageGallery1;
