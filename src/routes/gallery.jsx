import { useNavigate } from "react-router-dom";

import { ProGallery } from "pro-gallery";
import "pro-gallery/dist/statics/main.css";

export default function Gallery() {
  const navigate = useNavigate();

  const items = [
    {
      itemId: "1",
      mediaUrl:
        "https://i.pinimg.com/originals/31/4e/f4/314ef4ec79e9ad816724272b08f8f0e2.jpg",
      metaData: {
        type: "image",
        title: "sample-title",
        description: "sample-description",
        link: {
          url: "http://example.com",
        },
      },
    },
    {
      itemId: "2",
      mediaUrl:
        "https://images.saatchiart.com/saatchi/1533373/art/7825361/6893260-HSC00001-6.jpg",
      metaData: {
        type: "image",
        title: "Primal",
        description: "sample-description",
        link: {
          url: "http://example.com",
        },
      },
    },
    {
      itemId: "3",
      mediaUrl:
        "https://beyondlanguage.files.wordpress.com/2013/07/stream_of_consciousness_4_contemporary_abstract_art.jpg",
      metaData: {
        type: "image",
        title: "Primal",
        description: "sample-description",
        link: {
          url: "http://example.com",
        },
      },
    },
    {
      itemId: "4",
      mediaUrl:
        "https://www.worldatlas.com/r/w1200/upload/ca/13/25/whistlers-mother-high-res.jpg",
      metaData: {
        type: "image",
        title: "Primal",
        description: "sample-description",
        link: {
          url: "http://example.com",
        },
      },
    },
    {
      itemId: "5",
      mediaUrl:
        "https://blogofart.com/wp-content/uploads/2020/11/greatest-works-of-art.jpg",
      metaData: {
        type: "image",
        poster: "sample-image-url",
        title: "Primal",
        description: "sample-description",
        focalPoint: [0, 0],
        link: {
          url: "http://example.com",
        },
      },
    },
    {
      itemId: "6",
      mediaUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOWMCN50AkWJvcOkN8HYAExL66PuPBeGJjmA&usqp=CAU",
      metaData: {
        type: "image",
        poster: "sample-image-url",
        title: "Primal",
        description: "sample-description",
        focalPoint: [0, 0],
        link: {
          url: "http://example.com",
        },
      },
    },
    {
      itemId: "7",
      mediaUrl:
        "https://i.pinimg.com/originals/31/4e/f4/314ef4ec79e9ad816724272b08f8f0e2.jpg",
      metaData: {
        type: "image",
        title: "sample-title",
        description: "sample-description",
        focalPoint: [0, 0],
        link: {
          url: "http://example.com",
        },
      },
    },
    {
      itemId: "8",
      mediaUrl:
        "https://images.saatchiart.com/saatchi/1533373/art/7825361/6893260-HSC00001-6.jpg",
      metaData: {
        type: "image",
        poster: "sample-image-url",
        title: "Primal",
        description: "sample-description",
        focalPoint: [0, 0],
        link: {
          url: "http://example.com",
        },
      },
    },
    {
      itemId: "9",
      mediaUrl:
        "https://beyondlanguage.files.wordpress.com/2013/07/stream_of_consciousness_4_contemporary_abstract_art.jpg",
      metaData: {
        type: "image",
        poster: "sample-image-url",
        title: "Primal",
        description: "sample-description",
        focalPoint: [0, 0],
        link: {
          url: "http://example.com",
        },
      },
    },
    {
      itemId: "10",
      mediaUrl:
        "https://www.worldatlas.com/r/w1200/upload/ca/13/25/whistlers-mother-high-res.jpg",
      metaData: {
        type: "image",
        poster: "sample-image-url",
        title: "Primal",
        description: "sample-description",
        focalPoint: [0, 0],
        link: {
          url: "http://example.com",
        },
      },
    },
    {
      itemId: "11",
      mediaUrl:
        "https://blogofart.com/wp-content/uploads/2020/11/greatest-works-of-art.jpg",
      metaData: {
        type: "image",
        poster: "sample-image-url",
        title: "Primal",
        description: "sample-description",
        focalPoint: [0, 0],
        link: {
          url: "http://example.com",
        },
      },
    },
    {
      itemId: "12",
      mediaUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOWMCN50AkWJvcOkN8HYAExL66PuPBeGJjmA&usqp=CAU",
      metaData: {
        type: "image",
        poster: "sample-image-url",
        title: "Primal",
        description: "sample-description",
        focalPoint: [0, 0],
        link: {
          url: "http://example.com",
        },
      },
    },
  ];

  const options = {
    galleryLayout: -1,
    imageMargin: 10,
    scrollAnimation: "FADE_IN",
    overlayAnimation: "FADE_IN",
    imageHoverAnimation: "ZOOM_IN",
    scrollDirection: 1,
    infiniteScroll: true,
  };

  const container = {
    width: window.innerWidth,
    height: window.innerHeight - 114,
  };

  const eventsListener = (eventName, eventData) => {
    if (eventName === "ITEM_CLICKED") {
      navigate("info", {
        state: {
          data: {
            title: eventData.title,
            description: eventData.description,
            url: eventData.linkUrl,
            imageUrl: eventData.url,
          },
        },
      });
    }
  };

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

// For more options, visit https://github.com/wix/pro-gallery
