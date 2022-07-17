
import React, { useEffect } from 'react';
import { markerdata } from './markerData';
const { kakao } = window;

const MapContainer = () => {

    useEffect(() => {
        const container = document.getElementById('myMap');
		const options = {
			center: new kakao.maps.LatLng(37.624915253753194, 127.15122688059974
          ),
			level: 3
		};
        const map = new kakao.maps.Map(container, options);
        /*
        let markerPosition = new kakao.maps.LatLng(
            37.62197524055062,
      127.16017523675508

        );
        */
        markerdata.forEach((el) => {
            // 마커를 생성합니다
            new kakao.maps.Marker({
              //마커가 표시 될 지도
              map: map,
              //마커가 표시 될 위치
              position: new kakao.maps.LatLng(el.lat, el.lng),
              //마커에 hover시 나타날 title
              title: el.title,
            });
          });
        }, []);

    return (
        <div id='myMap' style={{
            width: '500px', 
            height: '500px'
        }}></div>
    );
}

export default MapContainer;  