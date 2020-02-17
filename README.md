# node-place
- 구글 지도/장소 API 를 사용해 검색한 장소의 위치를 보여주고 즐겨찾기로 관리하기

## v0.1
- 프로젝트 설정
    - 프론트 : Google Maps API 사용. 장소표시 , 백엔드 : Google Places API 사용. 장소검색
    - 검색을 통해 위치를 파악하여 위치 데이터를 프론트로 보냄
    - 딱히 관계형 디비가 필요하지 않으므로 몽고디비사용
        - favorite.js : 즐겨찾기
        - history.js : 검색내역
    - .env 생성 
        - COOKIE_SECRET=nodeplacesecret
        - MONGO_ID=아이디
        - MONGO_PASSWORD=비밀번호