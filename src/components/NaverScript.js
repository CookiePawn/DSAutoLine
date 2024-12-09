import { useEffect } from 'react';

const NaverScript = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//wcs.naver.net/wcslog.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (!window.wcs_add) window.wcs_add = {};
      window.wcs_add["wa"] = "s_54bd969202cb";
      if (!window._nasa) window._nasa = {};
      if (window.wcs) {
        window.wcs.inflow();
        window.wcs_do();
      }
    };

    return () => {
      // Clean up 스크립트 제거
      document.body.removeChild(script);
    };
  }, []);

  return null; // 렌더링할 UI 없음
};

export default NaverScript;
