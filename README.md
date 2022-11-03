# 원티드 프리온보딩 프론트엔드 - Week 2 Team 8

원티드 프리온보딩 **프론트엔드 8팀**의 `팔팔한 형제들`입니다.<br>

## 📅 프로젝트 기간

기간 : 2022년 11월 2일 ~ 2022년 11월 4일

## 팔팔한 형제들 팀 소개

### FE

<table>
  <tr>
    <td>
        <a href="https://github.com/CodyMan0">            
	    <img src="https://avatars.githubusercontent.com/u/93697790?v=4" width="100px" />
        </a>
    </td>
    <td>
        <a href="https://github.com/shimeeuisuk">
            <img src="https://avatars.githubusercontent.com/u/104304569?v=4" width="100px" />
        </a>
    </td>
    <td>
        <a href="https://github.com/jangth0655"> 
            <img src="https://avatars.githubusercontent.com/u/83333409?v=4" width="100px" />
        </a>
    </td>
    <td>
        <a href="https://github.com/choi2021">
	    <img src="https://avatars.githubusercontent.com/u/80830981?v=4" width="100px" />
        </a>
    </td>
    <td>
        <a href="https://github.com/strongsongky">
	    <img src="https://avatars.githubusercontent.com/u/102295416?v=4" width="100px" />
        </a>
    </td>
    <td>
        <a href="https://github.com/gywn9708">
	    <img src="https://avatars.githubusercontent.com/u/107469939?v=4" width="100px" />
        </a>
    </td>
    <td>
        <a href="https://github.com/YongHyunKwon">
	    <img src="https://avatars.githubusercontent.com/u/13326980?v=4" width="100px" />
        </a>
    </td>
  </tr>
  <tr>
    <td><b>이주영(팀장)</b></td>
    <td><b>심의석(부팀장)</b></td>
    <td><b>장태희</b></td>
    <td><b>최영준</b></td>
    <td><b>송경용(공지)</b></td>
    <td><b>강효주</b></td>
    <td><b>권용현</b></td>
  </tr>
  <tr>
    <td><b>Front-End</b></td>
    <td><b>Front-End</b></td>
    <td><b>Front-End</b></td>
    <td><b>Front-End</b></td>
    <td><b>Front-End</b></td>
    <td><b>Front-End</b></td>
    <td><b>Front-End</b></td>
  </tr>
</table>

## 🛠 기술 스택

<div align=left> 
  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> 
  <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> 
  <img src="https://img.shields.io/badge/typescript-1572B6?style=for-the-badge&logo=typescript&logoColor=white">
  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> 
  <img src="https://img.shields.io/badge/styled_components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"> 
  <br>
  
  <img src="https://img.shields.io/badge/vs_code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white">
  <img src="https://img.shields.io/badge/react_router_dom-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white">
  <br>
  
  <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
  <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
  <img src="https://img.shields.io/badge/slack-4A154B?style=for-the-badge&logo=slack&logoColor=white">
  <br>
</div>

## 🏁 프로젝트 실행 방법

1. 의존성 패키지를 설치합니다.

```zsh
$ npm install
```

2. 리눅스와 윈도우 husky 충돌 방지 후 사용을 위해 설치합니다.

```zsh
$ chmod ug+x .husky/*
```

3. 프로젝트를 실행합니다.

```zsh
$ npm start
```

## 🔗 위키 링크

[ 보러가기]()

## 🔗 배포 링크

[베포 링크 보러가기](http://88-2-1-assignment.s3-website-ap-northeast-1.amazonaws.com/)

- 해당 프로젝트는 를 AWS S3통해 배포하였습니다.

## 📦 디렉토리 구조

<details>
<summary> 구조</summary>
<div markdown="1">

```
📦src
 ┣ 📂components
 ┃ ┃ ┣ 📂carItem
 ┃ ┃ ┃ ┣ 📜CarItem.tsx
 ┃ ┃ ┃ ┗  📜styles.ts
 ┃ ┃ ┣ 📂carList
 ┃ ┃ ┃ ┣ 📜CarList.tsx
 ┃ ┃ ┃ ┗  📜styles.ts
 ┃ ┃ ┣ 📂categories
 ┃ ┃ ┃ ┣ 📜Categories.tsx
 ┃ ┃ ┃ ┗  📜styles.ts
 ┃ ┃ ┣ 📂category
 ┃ ┃ ┃ ┣ 📜Category.tsx
 ┃ ┃ ┃ ┗  📜styles.ts
 ┃ ┃ ┣ 📂detailInfo
 ┃ ┃ ┃ ┣ 📜DetailInfo.tsx
 ┃ ┃ ┃ ┗  📜styles.ts
 ┃ ┃ ┣ 📂detailItem
 ┃ ┃ ┃ ┗ 📜DetailItem.tsx
 ┃ ┃ ┣ 📂detailList
 ┃ ┃ ┃ ┗ 📜DetailList.tsx
 ┃ ┃ ┣ 📂header
 ┃ ┃ ┃ ┣ 📜Header.tsx
 ┃ ┃ ┃ ┗  📜styles.ts
 ┃ ┃ ┣ 📂meta
 ┃ ┃ ┃ ┗ 📜Meta.tsx
 ┃ ┃ ┣ 📂titleInfo
 ┃ ┃ ┃ ┣ 📜TitleInfo.tsx
 ┃ ┃ ┃ ┗  📜styles.ts
 ┣ 📂context
 ┃ ┣  📜carsContext.tsx
 ┃ ┗ 📜categoryContext.tsx
 ┣ 📂hooks
 ┃ ┗ 📜useCars.ts
 ┣ 📂interfaces
 ┃ ┣ 📜ActionEnum.ts
 ┃ ┗ 📜CarsInterface.ts
 ┣ 📂network
 ┃ ┗ 📜httpError.ts
 ┣ 📂pages
 ┃ ┃ ┣ 📂detail
 ┃ ┃ ┃ ┣ 📜Detail.tsx
 ┃ ┃ ┃ ┗ 📜styles.ts
 ┃ ┃ ┣ 📂home
 ┃ ┃ ┃ ┣ 📜Home.tsx
 ┃ ┃ ┃ ┗ 📜styles.ts
 ┃ ┃ ┣ 📂notfound
 ┃ ┃ ┃ ┣ 📜NotFound.tsx
 ┃ ┃ ┃ ┗ 📜styles.ts
 ┣ 📂service
 ┃ ┣ 📜axiosUtils.ts
 ┃ ┗ 📜carsService.ts
 ┣ 📂styles
 ┃ ┣ 📜DetailLayout.ts
 ┃ ┣ 📜GlobalStyle.ts
 ┃ ┗ 📜theme.ts
 ┣ 📂utils
 ┃ ┣ 📜checkWithinOneday.ts
 ┃ ┗ 📜formatDate.ts
 ┣ 📜Router.tsx
 ┣ 📜index.css
 ┣ 📜index.tsx
 ┗ 📜styled.d.ts
```

</div>
</details>

## 👍 Best Practice 선정 이유
- useReducer와 cont
- Typescript를 활용하여 
- Hooks 폴더 안에 filter
- UI 차원에서 가장 완성도가 높아서 

## ✏️ 개선 부분
- SEO 관련해서 (react-snap을 활용해서 고쳐나간 과정을 적기

하루동안 함께 시행착오를 한 기록을 담았습니다!

## ✏️ action-point 보러가기 []()

## ✨ 주요 기능

<img width="700" src=""/>

</br>

<img width="700" src=""/>
