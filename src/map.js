
import React, { useEffect, useState, useRef } from "react";
import { markerdata } from './markerData';
const { kakao } = window;

const imgSrcs = [
    'https://cdn-icons.flaticon.com/png/512/3943/premium/3943931.png?token=exp=1658320558~hmac=1b9c3c8ef4296aa93957cc44ef09d37b', // 병원
    'https://cdn-icons-png.flaticon.com/512/6934/6934535.png',//사람
    'https://cdn-icons.flaticon.com/png/512/4551/premium/4551377.png?token=exp=1658321593~hmac=9855196cf755e63fb8156e109c1d57e7'
]

const MapContainer = (props ) => {
    const {lat, lng} = props;
 
    var markerImage;
    let imageSize = new kakao.maps.Size(50, 50); // 마커이미지의 크기입니다
    let imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
    useEffect(() => {
        const container = document.getElementById('myMap');
		const options = {
			center: new kakao.maps.LatLng( 
                35.22526125005941,126.8413068514012
                ),
			level: 4
		};
        const map = new kakao.maps.Map(container, options);
        let markerPosition = new kakao.maps.LatLng(
            35.229242 ,
            126.840045
        );
        markerImage = new kakao.maps.MarkerImage(imgSrcs[1],imageSize, imageOption)
        var marker = new kakao.maps.Marker({
            position: markerPosition,
            image: markerImage // 마커이미지 설정 
        });
          
        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map); 

        markerImage = new kakao.maps.MarkerImage(imgSrcs[2],imageSize, imageOption)
        marker = new kakao.maps.Marker({
            position: new kakao.maps.LatLng(lat, lng),
            image: markerImage // 마커이미지 설정 
        });
        marker.setMap(map); 


        markerImage = new kakao.maps.MarkerImage(imgSrcs[2],imageSize, imageOption)
        marker = new kakao.maps.Marker({
            position: new kakao.maps.LatLng(markerdata[2].lat, markerdata[2].lng),
            image: markerImage // 마커이미지 설정 
        });
        marker.setMap(map); 
      
        /*
          markerImage = new kakao.maps.MarkerImage(imgSrcs[2],imageSize, imageOption)
        marker = new kakao.maps.Marker({
            position: new kakao.maps.LatLng(markerdata[2].lat, markerdata[2].lng),
            image: markerImage // 마커이미지 설정 
        });
        marker.setMap(map); 

     
        */
       /*
        markerdata.forEach((el) => {
            // 마커를 생성합니다
            markerImage = new kakao.maps.MarkerImage(imageSrc,imageSize, imageOption)
            new kakao.maps.Marker({
              //마커가 표시 될 지도
              map: map,
              //마커가 표시 될 위치
              position: new kakao.maps.LatLng(el.lat, el.lng),
              //마커에 hover시 나타날 title
              title: el.title,
              Image : markerImage
            });
          });
          */
        }, [lng]);

    return (
        <div id='myMap' style={{
            width: '936px', 
            height: '936px'
        }}></div>
    );
}

export default MapContainer;  