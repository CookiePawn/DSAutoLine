import { useEffect } from 'react';

const NaverScript = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//wcs.naver.net/wcslog.js";
    script.async = true;
    document.body.appendChild(script);

    const initializeWcs = () => {
      if (!window.wcs_add) window.wcs_add = {};
      window.wcs_add["wa"] = "s_54bd969202cb";
      if (!window._nasa) window._nasa = {};

      // 재시도 로직
      const interval = setInterval(() => {
        if (window.wcs) {
          console.log("Executing wcs functions...");
          window.wcs.inflow();
          window.wcs_do();
          clearInterval(interval); // 초기화 완료 후 인터벌 종료
        }
      }, 100);

      // 5초 내에 초기화 실패 시 로그 출력
      setTimeout(() => {
        clearInterval(interval);
        if (!window.wcs) {
          console.error("Failed to initialize wcs object.");
        }
      }, 5000);
    };

    script.onload = () => {
      console.log("Naver script loaded successfully!");
      initializeWcs();
    };

    script.onerror = () => {
      console.error("Failed to load Naver script.");
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default NaverScript;
