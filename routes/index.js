const express = require('express');
const axios = require('axios');

const History = require('../schemas/history');

const router = express.Router();

// 메인 화면을 보여주는 라우터
router.get('/', (req, res) => {
  res.render('index');
});

// 검색어 자동완성 라우터
router.get('/autocomplete/:query', (req, res, next) => {

});

// 실제 장소 검색 시 결과를 반환
router.get('/search/:query', async (req, res, next) => {

  try {
    // 검색내역을 구현하기 위해 검색어 저장
    const history = new History({ query: req.params.query });
    await history.save();

    const params = { 'query' : encodeURI(req.params.query) };
    const headers = { 'X-NCP-APIGW-API-KEY-ID':process.env.NAVER_GEOCODE_API_CLIENT_ID, 'X-NCP-APIGW-API-KEY': process.env.NAVER_GEOCODE_API_CLIENT_KEY };

    await axios.get('https://naveropenapi.apigw.ntruss.com/map-geocode/v2/geocode', {params, headers})
      .then(response => {
        console.log(response.data);
        res.render('result', {
          title: `${req.params.query} 검색 결과`,
          results: response.data || '없음',
          query: req.params.query,
        });
      }).catch((error) => {
        console.error(error);
      });
      
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
