import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import { ProGallery } from 'pro-gallery';
import 'pro-gallery/dist/statics/main.css';

export default function Gallery() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get('https://artchive-gateway-1riggbkw.uc.gateway.dev/api')
      .then((result) => {
        setItems(result.data.links);
      })
      .catch(() => console.log('not worked'));
  }, []);

  const navigate = useNavigate();

  const options = {
    galleryLayout: -1,
    imageMargin: 10,
    scrollAnimation: 'FADE_IN',
    overlayAnimation: 'FADE_IN',
    imageHoverAnimation: 'ZOOM_IN',
    scrollDirection: 1,
    infiniteScroll: true,
  };

  const container = {
    width: window.innerWidth,
    height: window.innerHeight - 114,
  };

  const eventsListener = (eventName, eventData) => {
    if (eventName === 'ITEM_CLICKED') {
      navigate('info', {
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
