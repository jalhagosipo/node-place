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
    const headers = { 'X-Naver-Client-Id':process.env.NAVER_GEOCODE_API_CLIENT_ID, 'X-Naver-Client-Secret': process.env.NAVER_GEOCODE_API_CLIENT_KEY };

   const result = await axios.get('https://openapi.naver.com/v1/map/geocode', {params, headers})
      .then(response => {
        console.log(response);
        console.log(response.data.representation);
      }).catch((error) => {
        console.error(error);
      });
      console.log(result);

      res.render('result', {
        title: `${req.params.query} 검색 결과`,
        results: result || '없음',
        query: req.params.query,
      });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
