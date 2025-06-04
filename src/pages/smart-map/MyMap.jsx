import { useEffect, useRef, useState } from "react";
import loadKakaoMap from "../../api/loadKakaoMap";
import styles from '../../styles/MyMap.module.css';

const MyMap = () => {
  const mapRef = useRef(null);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [bookmarks, setBookmarks] = useState([]);
  const markersRef = useRef([]);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_KAKAO_MAP_API_KEY;
    if (!apiKey) {
      console.error("❗ Kakao Map API Key is missing");
      return;
    }

    loadKakaoMap(apiKey).then((kakao) => {
      const container = mapRef.current;
      const center = new kakao.maps.LatLng(37.5665, 126.978);
      const options = { center, level: 3 };
      const map = new kakao.maps.Map(container, options);
      const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

      const clickMarker = new kakao.maps.Marker();
      kakao.maps.event.addListener(map, "click", function (mouseEvent) {
        const latlng = mouseEvent.latLng;
        clickMarker.setMap(null);
        clickMarker.setPosition(latlng);
        clickMarker.setMap(map);
        console.log("🖱️ 지도 클릭 좌표:", latlng.getLat(), latlng.getLng());
      });

      const ps = new kakao.maps.services.Places();

      const searchPlaces = (keyword) => {
        if (!keyword.trim()) {
          alert("검색어를 입력하세요.");
          return;
        }

        ps.keywordSearch(keyword, (data, status) => {
          if (status === kakao.maps.services.Status.OK) {
            markersRef.current.forEach((marker) => marker.setMap(null));
            markersRef.current = [];

            const bounds = new kakao.maps.LatLngBounds();

            data.forEach((place) => {
              const marker = new kakao.maps.Marker({
                map,
                position: new kakao.maps.LatLng(place.y, place.x),
              });

              kakao.maps.event.addListener(marker, "click", () => {
                const selected = {
                  id: place.id,
                  name: place.place_name,
                  address: place.road_address_name || place.address_name,
                  url: place.place_url,
                  x: place.x,
                  y: place.y,
                };
                setSelectedPlace(selected);
                console.log("📌 선택한 장소:", selected);

                infowindow.setContent(`<div style="padding:8px;">${place.place_name}</div>`);
                infowindow.open(map, marker);
              });

              markersRef.current.push(marker);
              bounds.extend(new kakao.maps.LatLng(place.y, place.x));
            });

            map.setBounds(bounds);
          } else {
            alert("검색 결과가 없습니다.");
          }
        });
      };

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((pos) => {
          const latlng = new kakao.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
          map.setCenter(latlng);
          new kakao.maps.Marker({ map, position: latlng });
        });
      }

      kakao.maps.event.addListener(map, "dragend", () => {
        const center = map.getCenter();
        console.log("📦 지도 이동 → 중심좌표:", center.getLat(), center.getLng());
      });

      kakao.maps.event.addListener(map, "zoom_changed", () => {
        console.log("🔍 지도 레벨 변경 → 현재 레벨:", map.getLevel());
      });

      mapRef.current.searchPlaces = searchPlaces;
    });
  }, []);

  const handleSearch = () => {
    if (mapRef.current?.searchPlaces) {
      mapRef.current.searchPlaces(searchKeyword);
    }
  };

  const handleBookmark = () => {
    if (!selectedPlace) return;

    const isDuplicate = bookmarks.some((item) => item.id === selectedPlace.id);
    if (!isDuplicate) {
      setBookmarks([...bookmarks, selectedPlace]);
    } else {
      alert("이미 북마크에 추가된 장소입니다.");
    }
  };

  const handleRemoveBookmark = (id) => {
    setBookmarks(bookmarks.filter((item) => item.id !== id));
  };

  return (
    <div className="page-container">
      <h1 className="page-title">개인 맞춤형 지도</h1>

      <div className={styles.searchBox}>
        <input
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
          placeholder="장소를 입력하세요"
          className={styles.searchInput}
        />
        <button onClick={handleSearch} className={styles.searchButton}>
          검색
        </button>
      </div>

      <div
        ref={mapRef}
        style={{ width: "100%", height: "500px", backgroundColor: "#eee" }}
      />

      {selectedPlace && (
        <div className={styles.selectedPlace}>
          <h3 className={styles.selectedTitle}>📌 선택한 장소 정보</h3>
          <p><strong>이름:</strong> {selectedPlace.name}</p>
          <p><strong>주소:</strong> {selectedPlace.address}</p>
          <p>
            <strong>상세보기:</strong>{" "}
            <a href={selectedPlace.url} target="_blank" rel="noreferrer" className={styles.placeLink}>
              Kakao 지도에서 보기
            </a>
          </p>
          <button onClick={handleBookmark} className={styles.bookmarkButton}>
            ⭐ 북마크에 추가
          </button>
        </div>
      )}

      {bookmarks.length > 0 && (
        <div className={styles.bookmarkList}>
          <h2>📚 내 북마크 목록</h2>
          <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
            {bookmarks.map((place) => (
              <li key={place.id} className={styles.bookmarkItem}>
                <div>
                  <strong>{place.name}</strong><br />
                  <span style={{ fontSize: "0.9rem", color: "#666" }}>{place.address}</span>
                </div>
                <div>
                  <a
                    href={place.url}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.bookmarkLink}
                  >
                    보기
                  </a>
                  <button
                    onClick={() => handleRemoveBookmark(place.id)}
                    className={styles.removeButton}
                  >
                    ❌
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MyMap;
