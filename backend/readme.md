# 웹 IoT Backend

<!-- 필수 항목 -->

## 소개

웹 IoT 프로젝트의 Backend 코드

<!-- 필수 항목 -->

## 기술스택 및 라이브러리

| Project        | Version | Description |
| -------------- | ------- | ----------- |
| express.js     | 4.17.1  |             |
| axios          | 0.24.0  |             |


## 폴더 구조

backend  
│   server.js          # 미들웨어 설정  
│   package.json       # 프로젝트 관리  
└───src                # 폴더 모음  
   └───bin             # 실제 서버가 실행   
   └───views           # html, jade, ejs 같은 웹페이지 관리  
   └───models          # 데이터베이스 모델 관리  
   └───public          # image, js, css파일과 같은 정적 파일 관리  
   └───config          # RDB, AWSconfig 관리  
   └───routes          # 라우터   
   └───controller          # mvc 패턴을 위한 controller 관리 폴더 추가   
 
<!-- 필수 항목 -->

## 개발 환경 구성

1. 프로젝트 다운로드

   ```
   git clone <repo URL> <folder-name>
   ```

2. backend폴더로 이동

   ```
   cd <folder-name>/backend
   ```

3. 패키지 설치

   ```
   npm install
   ```

4. 프로젝트 실행

   ```
   npm start
   ```

## Routes

```
GET     http://localhost:8000/
GET     http://localhost:8000/weather/:latitude/:longitude
GET     http://localhost:8000/businfo/:stationId



```