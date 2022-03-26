import { ProGallery } from "pro-gallery";
import "pro-gallery/dist/statics/main.css";

export default function Gallery() {
  // Add your images here...
  const items = [
    {
      itemId: "1",
      mediaUrl:
        "https://i.pinimg.com/originals/31/4e/f4/314ef4ec79e9ad816724272b08f8f0e2.jpg",
      metaData: {
        type: "image",
        width: 800,
        height: 570,
        title: "sample-title",
        description: "sample-description",
        focalPoint: [0, 0],
        link: {
          url: "http://example.com",
          target: "_blank",
        },
      },
    },
    {
      itemId: "2",
      mediaUrl:
        "https://images.saatchiart.com/saatchi/1533373/art/7825361/6893260-HSC00001-6.jpg",
      metaData: {
        type: "image",
        width: 375,
        height: 467,
        poster: "sample-image-url",
        title: "Primal",
        description: "sample-description",
        focalPoint: [0, 0],
        link: {
          url: "http://example.com",
          target: "_blank",
        },
      },
    },
    {
      // Video item:
      itemId: "3",
      mediaUrl:
        "https://beyondlanguage.files.wordpress.com/2013/07/stream_of_consciousness_4_contemporary_abstract_art.jpg",
      metaData: {
        type: "image",
        width: 900,
        height: 1438,
        poster: "sample-image-url",
        title: "Primal",
        description: "sample-description",
        focalPoint: [0, 0],
        link: {
          url: "http://example.com",
          target: "_blank",
        },
      },
    },
    {
      // Video item:
      itemId: "4",
      mediaUrl:
        "https://www.worldatlas.com/r/w1200/upload/ca/13/25/whistlers-mother-high-res.jpg",
      metaData: {
        type: "image",
        width: 1126,
        height: 1002,
        poster: "sample-image-url",
        title: "Primal",
        description: "sample-description",
        focalPoint: [0, 0],
        link: {
          url: "http://example.com",
          target: "_blank",
        },
      },
    },
    {
      // Video item:
      itemId: "5",
      mediaUrl:
        "https://blogofart.com/wp-content/uploads/2020/11/greatest-works-of-art.jpg",
      metaData: {
        type: "image",
        height: 1304,
        width: 778,
        poster: "sample-image-url",
        title: "Primal",
        description: "sample-description",
        focalPoint: [0, 0],
        link: {
          url: "http://example.com",
          target: "_blank",
        },
      },
    },
    {
      // Video item:
      itemId: "6",
      mediaUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOWMCN50AkWJvcOkN8HYAExL66PuPBeGJjmA&usqp=CAU",
      metaData: {
        type: "image",
        width: 1200,
        height: 1294,
        poster: "sample-image-url",
        title: "Primal",
        description: "sample-description",
        focalPoint: [0, 0],
        link: {
          url: "http://example.com",
          target: "_blank",
        },
      },
    },
  ];

  // The options of the gallery (from the playground current state)
  const options = {
    galleryLayout: -1,
    imageMargin: 0,
    scrollAnimation: "FADE_IN",
    overlayAnimation: "FADE_IN",
    imageHoverAnimation: "ZOOM_IN",
    scrollDirection: 1,
  };

  // The size of the gallery container. The images will fit themselves in it
  const container = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  // The eventsListener will notify you anytime something has happened in the gallery.
  const eventsListener = (eventName, eventData) =>
    console.log({ eventName, eventData });

  // The scrollingElement is usually the window, if you are scrolling inside another element, suplly it here
  const scrollingElement = window;

  return (
    <ProGallery
      items={items}
      options={options}
      container={container}
      eventsListener={eventsListener}
      scrollingElement={scrollingElement}
    />
  );
}

// Enjoy using your new gallery!
// For more options, visit https://github.com/wix/pro-gallery
