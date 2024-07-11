import React from 'react';
import {
   YMap,
   YMapDefaultSchemeLayer,
   YMapDefaultFeaturesLayer,
   YMapComponentsProvider,
   YMapMarker,
   YMapControls,
   YMapZoomControl,
   YMapGeolocationControl,
   // ...other components
} from 'ymap3-components';
import { LngLat } from '@yandex/ymaps3-types';
import cls from './Map.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import marker from '@/shared/assets/icons/marker.png';
import city from '@/shared/assets/icons/icon-city.svg';
import { Coords } from '@/shared/types/maps';
import { Button } from '../Button';
import { Icon } from '../Icon';

interface MapProps {
   className?: string;
   location: LngLat;
   zoom: number;
   coordsStores?: Coords;
   clickMarker?: (key: string) => void;
   width: number;
   height: number;
}

function Map(props: MapProps) {
   const { className, width, height, coordsStores, clickMarker, zoom, location } = props;
   const keysCoords = coordsStores && Object.keys(coordsStores);

   return (
      <div
         style={{ width: `${width}px`, height: `${height}px` }}
         className={classNames(cls.Maps, {}, [className])}
      >
         <YMapComponentsProvider apiKey={process.env.REACT_APP_YA_MAP_KEY}>
            <YMap location={{ center: location, zoom, duration: 800 }}>
               <YMapDefaultFeaturesLayer />
               <YMapDefaultSchemeLayer />
               <YMapControls position='right'>
                  <YMapGeolocationControl />
                  {/* Add the first zoom control to the map */}
                  <div className={cls.zoom}>
                     <YMapZoomControl />
                  </div>
               </YMapControls>

               {keysCoords &&
                  keysCoords.map((key) => (
                     <YMapMarker key={key} coordinates={location}>
                        <div style={{ left: '-20px', bottom: '55px' }} className={cls.markerContainer}>
                           <Button className={cls.marker} onClick={() => clickMarker && clickMarker(key)}>
                              <img height={55} src={marker} alt='метка' />
                              <Icon width={23} height={30} Svg={city} className={cls.icon} />
                           </Button>
                           <div className={cls.info}>
                              <span className={cls.logoName}>АКАДЕМИЯ ТЕПЛА</span>
                           </div>
                        </div>
                     </YMapMarker>
                  ))}
            </YMap>
         </YMapComponentsProvider>
      </div>
   );
}

export default Map;
