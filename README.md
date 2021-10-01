# 한만중 201840233

## [ 09월 29일]
> 학습내용 <br />
> 1. 상대경로 이미지 삽입 방법 
> 2. 음식 앱에 prop-types 도입하기
> 3. Food.propTypes 작성하기
> 4. Food.propTypes의 rating 키 값 확인하기
> 5. prop-types 경고 해결하기
> 6. 다른 종류의 prop-types 경고 해결하기
> 7. state로 숫자 증감 기능 만들어 보기
> 8. render() 함수를 사용해보자.
> 9. state 정의하기
- 조금 더 나아가기 <br>
I.04-4 음식 앱에 prop-types 도입하기<br>
   - 정의한 props의 값이 컴포넌트에 제대로 전달되지 않으면 어떻게 해야 할까?<br>
   - pricture props에 {dish.image}가 아닌 {true}를 전달하면 어떻게 될까?<br>
   - 여러가지 이유로 원하는 대로 이미지 등이 나오지 않을 때 이를 검사할 수 있는 방법은 없을까?<br>
   - 이번 절에서는 이 검사 방법에 대해 알아 보도록 한다.<br>

액션 01. 음식 데이터에 rating 추가하기<br>
   - foodLike 배열의 각 요소에 rating(평점)을 추가한다.
   - 값의 자료형은 number로 한다.<br>
   - Rating props를 Food 컴포넌트에 전달하면서 이 값을 검사해 보기로 한다.<br>
   - 그러기 위해서는 props의 자료형을 검사할 수 있도록 만들어 주는 prop-types라는 도구가 필요하다.<br>
   - 다음 액션에서는 도구를 설치해 본다.<br>
액션02. prop-type 설치하기<br>
   - 터미널에서 다음 명령을 입력해서 prop-types를 설치한다.<br>
액션03. 정상 설치 여부 확인<br>
   - package.json파일을 열어 dependencies 키에 있는 값을 살펴보자<br>
   - prop-types가 등록되어 있으면 설치가 정상적으로 된 것이다.<br>
   - prop-types는 컴포넌트가 전달받은 props가 원하는 값인지 확인해 주는 역할을 한다.<br>
   - prop-types를 통해 "Food 컴포넌트는 반드시 picture props가 전달되야 한다"고 정의할 수 있다.<br>
액션04. prop-types 적용하기<br>
   - Import PropTypes from 'prop-types';를 App.js 파일 맨 위에 추가해 주자.<br>
   - 그리고 rating props를 Food 컴포넌트에 전달하자<br>
   - 아직 prop-types를 적용한 상태는 아니다.<br>
액션05. Food.propTypes 작성하기<br>
   - 이제 prop-types를 적용해 보자.<br>
   - Food.propType에 객체를 적어 주기만 하면 된다.<br>
   - 모든 props는 문자열이고 반드시 있어야 한다는 조건을 추가해 보자.<br>
   - 실행하면 별 문제가 없어 보이지만, 콘솔 탭을 확인해 보면 경고 메시지가 보인다.<br>
액션06. Food.propTypes의 rating 키 값 확인하기<br>
   - IsRequired는 필요하다는 뜻 이다.
   - 'rating에는 string이라는 자료형이 반드시 필요하다'는 이야기 이다.<br>
액션07.prop-types 경고 해결하기<br>
   - rating: propTypes.string.isRequired 대신 rating: PropTypes.number.JsRequired로 교체<br>
   - Console탭을 확인해 보면 prop type 경고 메시지가 사라져 있다.<br>
액션08. 다른 종류의 prop-types 경고 해결하기<br>
   - Picture props의 이름을 image로 바꿔보자<br>
   - 화면에 사진이 나오지 않게 된다<br>
   - Console 탭을 살펴보면 그 이유를 알 수 있다.<br>
   - Food 컴포넌트에 picture라는 이름의 props가 필요한데, 그 값이 underfined다.<br>  
II.05-1 state로 숫자 증감 기능 만들어 보기<br>
   - props는 정적인 데이터만 다룰 수 있다.<br>
   - state는 동적인 데이터를 다루기 위해 사용된다.<br>
   - state는 class형 컴포넌트에서 사용된다.<br>
   - 기존의 App.js는 04-App.js로 이름을 바꾸고 새로운 App.js파일을 생성한다.<br>
액션01. 클래스형 컴포넌트 작성하기<br>
액션02. App클래스가 React.Component 클래스를 상속 받도록 하자.<br>
   - class를 'React.Component'로 상속받아 생성한다.<br>
   - 'React.Component' 클래스는 500여 줄이 넘는 코드로 여러가지 기능이 이미 구현되어 있기 때문에 사용하기에 편리하다.<br>
   - import할 때 '{Component}'를 써주면 extends에서 'React'을 생략할 수 있다.<br>
액션03. render() 함수를 사용해보자.<br>
   - App컴포넌트가 JSX를 반환해야 하지만 class형 컴포넌트에서는 바로 return을 사용할 수 없다.<br>
   - render() 함수 내에서 return문을 사용한다.<br>
   - 함수형 컴포넌트는 return문이 JSX를 반환하지만, 클래스형 컴포넌트는 render() 함수가 JSX를 반환한다.<br>
액션04. state 정의하기<br>
액션05. state에 count값 추가하고 사용하기.<br>
III. 생성자란 무엇인가<br>
   - constructor()는 Component를 생성할 때 state 값을 초기화하거나 메서드를 바인딩할 때 사용한다.<br>
   - React Component를 상속해서 만들어진 컴포넌트의 생성자를 구현할 때는 super(props)를 선언을 권고하는 이유는 this.props사용 시 생성자 내에서 정의되지 않아 버그 발생 가능성이 있기 때문입니다.<br>
   - 자바스크립트에서 super는 부모클래스 생성자의 참조한다는 의미이다.<br>
   - 또한가지 자바스크립트는 언어적 제약사항으로 생성자에서 super를 호출하기 전에는 this를 사용할 수없다. 반드시 super를 먼저 호출해야 this를 사용할 수 있다는 것이다.<br>
   - 생성자 내에서는 setState를 사용하지 않고, this.state를 사용하여 state의 초기값을 할당한다.<br>
   - 생성자 내에서는 외부API를 직접 호출할 수 없다. 필요하다면 componentDidMount()를 사용한다.<br>
액션02. componentDidMount() 함수 알아보기<br>
   - componentDidMount() 함수를 선언하고, 함수 안에 console.log() 함수를 작성하여 실행되는 시점을 확인해 본다.<br>
   - 실행 순서를 console을 통해 확인해 보면 render() 함수 실행 직후인 것을 확인할 수 있다.<br>
액션03/04 componentDidUpdate() 함수 알아보기<br>
   - 액션02와 동일한 방법으로 componentDidUpdate() 함수의 실행 순서를 확인한다.<br>
   - 단순히 실행한 것으로는 console에 출력되지 않는다. 화면이 없데이트 되어야 한다.<br>
   - 버튼을 클릭해서 화면을 업데이트 하면서, console을 확인한다.<br>
   - 버튼을 클릭하면 setState() 함수가 실행되고, render()함수로 화면이 업데이트된 직후 componentDidUpdate()함수가 실행된다.<br>
액션05. componentWillUnmount() 함수 알아보기<br>
   - componentWillUnmount() 함수도 위와 마찬가지로 테스트를 한다. <br>
   - 하지만 이경우 실행 여부를 직접 확인할 수는 없다.<br>
   - 이 함수는 컴포넌트가 화면에서 떠날 때 실행된다.<br>
   - 보통 컴포넌트에 적용한 이벤트 리스너를 제거할 때 많이 사용된다.<br>
   
## [ 09월 15일]
> 학습내용 <br />
> 1. 두 번째 리액트 기초 개념: JSX 
> 2. 세 번째 리액트 기초 개념: props
> 3. 비슷한 컴포넌트 여러 개 만들기
> 4. map() 함수로 컴포넌트 많이 만들기
> 5. 음식 앱 이리저리 만지고, 고쳐보기
- 조금 더 나아가기 <br>
 I. 03-3 <br>
  - 컴포넌트는 자바스크립트와 HTML을 조합한 JSX라는 문법을 사용해서 만든다.<br>
  - JSX의 문법은 JS와 HTML 문법의 조합한 것으로 사용하다 보면 자연스럽게 익힐 수 있다. <br>

  <h3>액션01. potato 컴포넌트 만들기</h3>
   <p> 1. src 폴더 안에 Potato.js라는 이름의 새 파일을 만든다.
    2. 첫 글자는 반드시 대문자를 사용한다.<br>
    3. import 구문을 입력해야 리액트가 JSX를 이해할 수 있으니 반드시 입력한다. </P>
  <h3> 액션02. Potato()함수를 작성한다.</h3>
   다시 한 번 강조하지만 컴포넌트를 작성할 때 중요한 규칙은 이름은 대문자로 시작해야 한다는 것이다.<br>
  <h3>액션03. Potato 컴포넌트가 JSX를 반환하도록 만든다.</h3>
   <br>
    <h3>액션04. 마지막 줄에 export 구문을 다음과 같이 추가한다.</h3>
     Export 구문을 추가하면 다른 파일에서 해당 컴포넌트를 사용할 수 있다.

     <h3>액션05. Potato컴포넌트 사용하기</h3>
      1. Export구문을 추가하면 다른 파일에서 해당 컴포넌트를 사용할 수 있다.
      2. 교재의 액션06처럼 코딩하는 경우 오류가 발생한다.

    <h3>액션06을 실행하면 오류가 발생하는데 이 오류는</h3>
    1. '인접한 JSX요소는 반드시 하나의 태그로 감싸야 한다'는 내용이다.<br>
    2. 리액트는 최종적으로 단 한 개의 컴포넌트를 그려야 하는데, 현재 두개의 컴포넌트를 그리려 해서 오류가 발생한 것이다.<br>
    3.문제를 해결하기 위해서는 Photato 컴포넌트는 App 컴포넌트 안에 넣어줘야 한다.

    <h3>액션07. index.js 파일을 원래대로 돌려놓자.</h3>

    <h3>액션09. App컴포넌트의 return값에 Photo컴포넌트를 추가하고 결과를 확인한다.
    </h3>

<pre><code> 
import { render }from"@testing-libraryreact;


const FoodLike = [
  {
    id: 1,
    name : "gobchang",
    image: "http://th2.tmon.kr/thumbs/image/46b/303/d46/fe4e3add6_700x700_95_FIT.jpg"
  },
  {
    id:2,
    name : "pizza",
    image : "https://w.namu.la/s/8c2aebf04d4c6e0ae24ebf3b3789cb064f353da40f0a2916630ee33cc34742414ac8427b8765569e84d615a24cac7bc389ada2e5c60579541ea8b41be9b22db6d0ce58f59fd1ac01912436c928605cd86974e360258a66ac0374662e70b0ae73"
  }
]

function App() {
  return( 
    <div>
      {
        FoodLike.map(dish => (<Food key= {dish.id} name = {dish.name} picture={dish.image} />))
      }
    </div>
  )
}

function Food({name, picture}){
  
  return (
  <div>
    <h1>I like {name} </h1>
    <image src={picture} />

  </div>
  )
}

export default App;    
</code></pre>
</hr>

<div>
 <h2> 비슷한 컴포넌트 여러 개 만들기</h2>
 1.3장에서 처럼 컴포넌트가 여러 개 필요할 때 <food/><food/><food/>와 같이 여러 개를 직접 입력하는 것은 비효율 적이다. 보다 효율적으로 컴포넌트를 출력하는 방법을 알아보자.
 </div>

<h3>액션01. 앞에서 만든 컴포넌트 형태 다시 살펴보기</h3>
3장에서 작성한 App.js파일을 다시 열어 코드가 효육적인지 살펴본다.

<h3>액션02. 음식 데이터 만들기</h3>
1. 아직 서버에서 데이터를 받아오는 방법을 학습하지 않았기 때문에, 우선 서버에서 데이터를 받았다고 가정하고, 그 데이터를 출력하는 방법을 알아보자. <br>
2. 서버에서 넘어온 데이터를 저장할 수 있도록 foodLike라는 변수를 만든 다음 빈 배열을 할당한다.<br>
3. 비효율적으로 작성된 Food 컴포넌트는 모두 삭제한다.
<h3> 액션03</h3>
1. 서버에서 데이터가 넘어온다고 가정하고 다음과 같이 코드를 작성해 본다.<br>
2. 이미지는 각자 준비를 하거나, 생략하고 연습한다.
3. 데이터 부분은 반복되기 때문에 필요한 만큼 작성한다.
<hr>

<h2> 음식 앱 이리저리 만지고, 고쳐보기</h2>
1. 04-2에서 만든 음식 앱을 다시 살펴 보면서 리액트와 map()함수가 어떤 상호작용을 하는지 알아본다.<br>
2. 우전 map()함수의 인자로 함수를 전달하도록 만들어 본다.<br>

<h3>액션01. map()함수의 인자로 함수 전달하기</h3>
1. 다음과 같이 App.js파일을 수정한다.

<h3>액션02. renderFood() 함수 정의하기</h3>
함수의 return값은 04-2. 액션09의 해당 부분과 동일하다.

<h3>액션03. map() 함수의 반환 값 살펴보기</h3>
1. 크롭 console을 통해 map() 함수의 반환 값을 살펴보자.

<h3>액션04. 음식 앱 다시 원래대로 돌려놓기</h3>
1. renderFood() 함수는 map()함수가 반환한 리액트 컴포넌트를 출력하려고 사용한 것임으로 원래대로 돌려 놓는다.

<h3>액션05. map()함수로 만든 컴포넌트에 key props 추가하기</h3>
1. 액션03에서 나온 오류 메시지를 살펴보자.<br>
2. '리스트의 각 원소는 유일한 "key" prop을 가져야 한다' <br>
3. 액션03의 배열 속성을 보면 key값이 없어서 null이란 메시지를 발견할 수 있다.<br>
4. 리액트의 원소들은 유일해야 하는데 리액트 원소가 리스트에 포함되면서, 유일성이 없어져서 발생하는 문제이다.

<h3>액션06</h3>
1.위의 문제를 해결하기 위해 foodLike 배열의 원소에 id값을 추가한다.<br>
2. 이 것으로 위의 경고 메시지는 사라진다.<br>
3.id를 추가하는 이유는 리액트에 Food 컴포넌트가 서로 다르다는 것을 알려주기 위해서이다.<br>
4. 그리고 리액트에 key props를 통해 이것을 알려준다.

<h3>액션07. Food컴포넌트에 key props 추가하기</h3>

<h3>액션08. img 엘리먼트에 alt속성 추가하기</h3>

<h3> import를 이용한 이미지 삽입 방법</h3>
1. 교재에서의 이미지 삽입은 절대 경로를 사용했다. <br>
2. 먼저 알아 둬야 할 것은 src폴더 내부에 이미지를 저장해야 한다는 것이다.<br>
3. 여기서는 import방법을 설명한다.<br>
4. Img01은 벌칭이고 실제 이미지의 위치는 /src/Images/1.jpg이다. 반드시 src 아래 두어야 한다.<br>
5. 그리고 실제 사용한 때는 Img01로 사용한다.

## [ 09월 08일]
> 학습내용 <br />
> 1. 슈퍼 빠른 create-react-app <br>
> 2. 리액트 앱 만들기 <br>
> 3. 프로젝트 폴더 선택하기 <br>
> 4. package.json 파일 수정 <br>
- 조금 더 나아가기 <br>
 I. 02-1 <br>
  1) 웹팩(webpack)은 자바스크립트 앱을 위한 정적 모듈들을 하나로 묶어주는 번들러이다.<br>
  
   2) 바벨(Bavel)은 최신 자바스크립트 문법을 사용할 수 있게 해주는 트랜스파일러이다.<br>

    3) React로 개발하는 경우 웹팩이나, 바벨은 신경 쓰지않아도 된다.<br> 
      4) create-react-app은 react를 위한 보일러 플레이트이며, 이 한 줄을 입력해서 리액트 개발을 바로 시작할 수 있다.<br>

       5) 보일러 플레이트는 최소한의 변경으로 여러 곳에서 재사용이 가능한 코드를 보일러 플레이트 코드라고 부른다.<br>

II.리액트 앱 만들기

1. 명령 프롬프트를 실행한 다음 리액트 앱을 만들고 싶은 디렉토리로 이동해서 다음과 같이 명령을 실행한다.

2. 명령은 > npx create-react-app movie_app_2021 

III. 리액트 앱 실행하기 종료하기

1. 명령 프롬프트에서 프로젝트 폴더로 이동한 다음 > npm start로 앱을 실행한다
2. Terminal을 이용 할 때는 경로를 주의해야 한다.
3. 웹 브라우저에 리액트 로고가 나타나면 정상적으로 프로젝트가 생성된 것이다.
4. App 실행되면 웹브라우저에 다음 화면이 나타난다.
5. App을 종료하려면 프롬프트에서 Ctrl+c를 누른다.

<h3>리액트 동작 원리 알아보기 </h3><br>

*자바스크립트를 학습한 경험이 있으면 동작원리는 이해하고 있겠지만, 자바스크립트를 해석해서 그 결과물을 index.html에 삽입하게 된다.

<h3>리액트 기초개념 알아보기</h3> <br>

액션01. App.js파일로 컴포넌트의 정의 알아보기.

* function으로 정의 내린 곳을 컴포넌트(component)라고 한다.
* 아래 코드를 살펴보면 App()함수가 정의되어 있고, 함수는 html문서를 return해 주고 있다. 리액트에서는 이것을 "App컴포넌트를 정의했다." 고한다.

액션02. index.js 파일로 컴포넌트의 사용 알아보기

* index.js 파일을 열어서, <App />이라고 입력한 부분을 잘 살펴본다.
* App 컴포넌트가 그려질 위치는 ReactDOM.render()함수의 두번째 인자로 전달하면 된다.
* 컴포넌트를 사용할 때 App라고만 입력하면 오류가 발생한다.
* 리액트는 컴포넌트와 함께 동작하고, 리액트 앱은 모두 컴포넌트로 구성된다.
* Photato() 함수를 작성한다.
다시 한 번 강조하지만 컴포넌트를 작성할 때 중요한 규칙은 이름은 대문자로 시작해야한다는 것이다.

액션03. Potato 컴포넌트가 JSX를 반환하도록 만든다.

액션04. 마지막 줄에 export 구문을 다음과 같이 추가한다. 
Export 구문을 추가하면 다른 파일에서 해당 컴포넌트를 사용할 수 있다.

액션05, 06. Photo 컴포넌트 사용하기.

* Export구문을 추가하면 다른 파일에서 해당 컴포넌트를 사용할 수 있다.

액션06을 실행하면 오류가 발생하는데 이 오류는

* '인접한 JSX요소는 반드시 하나의 태그로 감싸야 한다.'는 내용이다.
* 리액트는 최종적으로 단 한 개의 컴포넌트를 그려야 하는데, 현재 두개의 컴포넌트를 그리려 해서 오류가 발생한 것이다.
* 문제를 해결하기 위해서는 Photato컴포넌트는 App 컴포넌트 안에 넣어줘야 한다.

액션10. 개발자 도구에서 Photo 컴포넌트를 살펴보자.

*크롬 개발자 도구의 element탭에서 확인해 본다.
* 이것이 바로 컴포넌트와 JSX가 리액트에서 동작하는 방식임을 이해한다.