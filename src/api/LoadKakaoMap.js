const LoadKakaoMap = (apiKey) => {
  return new Promise((resolve) => {
    if (window.kakao && window.kakao.maps) {
      resolve(window.kakao);
    } else {
      const script = document.createElement("script");
      script.onload = () => {
        window.kakao.maps.load(() => {
          resolve(window.kakao);
        });
      };
      script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&autoload=false&libraries=services`;
      document.head.appendChild(script);
    }
  });
};

export default LoadKakaoMap;
