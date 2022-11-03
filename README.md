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

[위키 보러가기](https://github.com/wanted-freeOnBoarding-8/pre-onboarding-7th-2-8/wiki/Dev-%EB%85%B8%ED%8A%B8)

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
- useReducer를 사용하여 컴포넌트와 상태 업데이트 로직을 분리하여 컴포넌트 외부에서도 상태 관리를 할 수 있어 선정하였습니다.

```javascript
type State = {
  isLoading: boolean;
  data: CarType[];
  error: string;
};

type Action =
  | { type: ActionType.SET_DATA; data: CarType[] }
  | { type: ActionType.SET_IS_LOADING; isLoading: boolean }
  | { type: ActionType.SET_ERROR; error: string };

type CarsDistpatch = Dispatch<Action>;

const initialState = {
  isLoading: false,
  data: [],
  error: '',
};

export const CarsStateContext = createContext<State | null>(initialState);
export const CarsDispatchContext = createContext<CarsDistpatch | null>(null);

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case ActionType.SET_DATA:
      return {
        ...state,
        data: action.data,
      };
    case ActionType.SET_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      throw new Error('Unknown Action');
  }
};
```

- hooks를 활용하여 UI로직과 비지니스로직을 분리하여 추상화 수준을 보다 높였다는 점에서 선정하였습니다.

```javascript
export const useCarsState = () => {
  const state = useContext(CarsStateContext);
  if (!state) throw new Error("Can't find State Provider");
  return state;
};

export const useCarsDispatch = () => {
  const dispatch = useContext(CarsDispatchContext);
  if (!dispatch) throw new Error("Can't find Dispatch Provider");
  return dispatch;
};

export const useCarsValue = () => {
  const state = useCarsState();
  const { category } = useContext(CategoryContext);

  if (!state) throw new Error("Can't find StateProvider");
  if (!category) throw new Error("Can't find CategoryProvider");
  if (category === '전체') return state.data;

  const filterd = state?.data.filter(
    (car) => SegmentEnum[car.attribute.segment] === category
  );
  return filterd;
};
```

## ✏️ 개선 부분
하루동안 함께 시행착오를 한 기록을 담았습니다!

- CRA의 단점을 개선하기 위해 react-helmet과 react-snap을 활용하여 SEO를 보완하였습니다.  
- 타입추론 등을 통해 효율성을 향상시키고, 타입으로 인한 예상치못한 에러를 줄이기위하여 타입스크립를 사용했습니다.
- 컴포넌트 내에 비지니스 로직을 분리하여 추상화하기 위해 노력하였습니다.

## ✨ 주요 기능

<img width="300" src="https://user-images.githubusercontent.com/83333409/199750503-7588ede2-00c9-4b37-9338-574a64fbdf15.gif"/>

</br>

<img width="300" src="https://user-images.githubusercontent.com/83333409/199750553-26765d16-ff0c-41a5-ad71-441a6af361f0.gif"/>

</br>

<img width="300" src="https://user-images.githubusercontent.com/83333409/199751587-d65b6580-fbc5-4998-8540-a1b42b5c5294.png"/>

</br>

<img width="300" src="https://user-images.githubusercontent.com/83333409/199751616-6b8c7e22-93ae-462d-bea1-7d4eb48634db.png"/>



