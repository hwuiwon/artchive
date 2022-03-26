import { useNavigate } from "react-router-dom";

import { ProGallery } from "pro-gallery";
import "pro-gallery/dist/statics/main.css";

export default function MiniGallery() {
  const navigate = useNavigate();

  const items = [
    {
      itemId: "1",
      mediaUrl:
        "https://d7hftxdivxxvm.cloudfront.net/?resize_to=fit&width=800&height=638&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FcvOf60j5dfdkrsS3e3_BIw%2Fnormalized.jpg",
      metaData: {
        type: "image",
        title: "Melody of unknown moments",
        description:
          "Acrylic on canvas, 120 x 150 cm. 2021. My second painting for the Untitled Art Fair Miami Beach. For all inquiries contact @saparcontemporary",
        link: {
          url: "https://www.instagram.com/p/CW6G0wcs4J0/",
        },
      },
    },
    {
      itemId: "2",
      mediaUrl: "https://f4.bcbits.com/img/a4044262114_5.jpg",
      metaData: {
        type: "image",
        title: "Вертолётики",
        description:
          "Album art for @mumiytroll Illustration for “Вертолётики” song. Acrylic and gouache on 640 gsm paper, 50 x 50 cm.",
        link: {
          url: "https://www.instagram.com/p/CJWQAJZMtqm/",
        },
      },
    },
    {
      itemId: "3",
      mediaUrl:
        "https://images.squarespace-cdn.com/content/v1/573031141d07c088bf6e7fb6/1639395294594-DRB1CRX609NHEQXOFQBG/_AN59417_Lo_Res.jpg?format=500w",
      metaData: {
        type: "image",
        title: "послезла",
        description:
          "Album cover for @mumiytroll #послезла Acrylic and gouache painting on paper, 50x50 cm.",
        link: {
          url: "https://www.instagram.com/p/CJWQAJZMtqm/",
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
    groupSize: 0,
    imageMargin: 10,
    scrollAnimation: "FADE_IN",
    overlayAnimation: "FADE_IN",
    imageHoverAnimation: "ZOOM_IN",
    scrollDirection: 1,
    infiniteScroll: true,
  };

  const container = {
    width: window.innerWidth,
    height: 250,
  };

  const eventsListener = (eventName, eventData) => {
    if (eventName === "ITEM_CLICKED") {
      navigate("/info", {
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
