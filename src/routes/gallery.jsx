import { useNavigate } from "react-router-dom";

import { ProGallery } from "pro-gallery";
import "pro-gallery/dist/statics/main.css";

export default function Gallery() {
  const navigate = useNavigate();

  const items = [
    {
      itemId: "1",
      mediaUrl:
        "https://images.squarespace-cdn.com/content/v1/573031141d07c088bf6e7fb6/1508328221223-DQFOMZJ81M56CH81JHGR/Prisoned_mind_lo_res.jpg?format=2500w",
      metaData: {
        type: "image",
        title: "Prisoned Mind",
        description:
          "Acrylic Painting by Waone Interes Nikazki (@waone_interesnikazki)",
        link: {
          url: "https://www.instagram.com/p/CbfUvWOOb5y/",
        },
      },
    },
    {
      itemId: "2",
      mediaUrl:
        "https://lh3.googleusercontent.com/i4xxcz6ZhxBizlYF7QKLgeOyoeIDchYNWn_k4oeAPjiESeOzXudfOk11mXgUb59tTuZeP4vN3E56y8P7jQ82hgj1vQM-eLhrQSCvLw=w1400-k",
      metaData: {
        type: "image",
        title: "The Fleur",
        description: "3D Artworks: “The Fleur” Collection by Ondrej Zunka",
        link: {
          url: "https://www.instagram.com/p/Cbad3o8rpuD/",
        },
      },
    },
    {
      itemId: "3",
      mediaUrl: "https://www.prntr.com/images/modern-art-3.jpg",
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
      mediaUrl: "https://www.prntr.com/images/modern-art-4.jpg",
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
      mediaUrl: "https://www.prntr.com/images/modern-art-5.jpg",
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
      mediaUrl: "https://www.prntr.com/images/modern-art-6.jpg",
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
      mediaUrl: "https://www.prntr.com/images/modern-art-7.jpg",
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
