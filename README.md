# node-place
- ~~구글 지도/장소 API~~ 카카오/네이버 API 를 사용해 검색한 장소의 위치를 보여주고 즐겨찾기로 관리하기

## v0.1
- 프로젝트 설정
    - 프론트 : ~~ Google Maps API ~~ KAKAO MAP API 사용. 장소표시 , 백엔드 : ~~ Google Places API ~~ NAVER API 사용. 장소검색
    - 검색을 통해 위치를 파악하여 위치 데이터를 프론트로 보냄
    - 딱히 관계형 디비가 필요하지 않으므로 몽고디비사용
        - favorite.js : 즐겨찾기
        - history.js : 검색내역
    - .env 생성 
        - COOKIE_SECRET=nodeplacesecret
        - MONGO_ID=아이디
        - MONGO_PASSWORD=비밀번호

## v0.2
- NAVER API를 사용하기 위해 키 발급 (NAVER API중 Geocoding을 사용)
    - .env에 `PLACES_API_KEY=키` 추가
- 간단히 검색 보여주기
    - `/`, `/autocomplete/:query`, `/search/:query` 라우터 추가
    - views 추가

## v0.3
- 프론트: 화면에 지도보여주기

## v0.4
- 내 위치 주변을 검색하는 API와 특정 종류의 장소(카페, 병원 등)만 검색하는 API
- 즐겨찾기 추가버튼 클릭하면 /로 가도록

## v1.0
- /에서 즐켜찾기 위치가 나오도록

## v1.1
- 즐겨찾기 삭제하기
    - 라우터 생성 및 프론트에서 삭제버튼 추가

## v1.2
- 검색 내역 표시하기
    - 검색내역을 불러와 화면에 랜더링
    

