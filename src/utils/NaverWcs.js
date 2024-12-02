// 스크립트 로드 함수
export const loadNaverWCS = () => {
    return new Promise((resolve) => {
        if (document.querySelector('script[src="//wcs.naver.net/wcslog.js"]')) {
            resolve(); // 이미 스크립트가 로드된 경우
            return;
        }

        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = '//wcs.naver.net/wcslog.js';
        script.async = true;

        script.onload = () => resolve(); // 스크립트 로드 완료 시 resolve
        document.body.appendChild(script);
    });
};


// 카카오톡 톡상담 전환 스크립트
export const sendKakaoTalkConversion = () => {
    if (window.wcs) {
        if (!window.wcs_add) {
            window.wcs_add = {};
        }
        window.wcs_add['wa'] = 's_54bd969202cb';

        const _conv = {
            value: '1',
            type: 'custom001',
        };

        window.wcs.trans(_conv);
    }
};


// 견적 및 상담신청하기 전환 스크립트
export const sendOptionConversion = () => {
    if (window.wcs) {
        if (!window.wcs_add) {
            window.wcs_add = {};
        }
        window.wcs_add['wa'] = 's_54bd969202cb';

        const _conv = {
            value: '10',
            type: 'lead',
        };

        window.wcs.trans(_conv);
    }
};


// 견적 및 상담신청하기 전환 스크립트
export const sendFastFAQConversion = () => {
    if (window.wcs) {
        if (!window.wcs_add) {
            window.wcs_add = {};
        }
        window.wcs_add['wa'] = 's_54bd969202cb';

        const _conv = {
            value: '100',
            type: 'lead',
        };

        window.wcs.trans(_conv);
    }
};



// 기업 전용 상담 신청하기 전환 스크립트
export const sendEnterConversion = () => {
    if (window.wcs) {
        if (!window.wcs_add) {
            window.wcs_add = {};
        }
        window.wcs_add['wa'] = 's_54bd969202cb';

        const _conv = {
            value: '1000',
            type: 'lead',
        };

        window.wcs.trans(_conv);
    }
}