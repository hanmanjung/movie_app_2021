# 한만중 201840233

## [ 11월 17일]
> 학습내용 <br />
> handleChange는 모든 키보드 입력마다 state 갱신
> 사용자입력 -> handleChange -> React의 state 갱신
> 외부 플러그인 사용
> npx-create-react-app markdown-editor 로 새로운 프로젝트 생성
> class MarkdownEditor extends React.Component -> MarkdownEditor부분을 App으로 변경
- 조금 더 나아가기 <br>
리액트 >  비동기식 <br>
<br>
* 동기식 : 서버랑 동기화 시킨다. > 다운로드 한새월 걸림<br>
<br>
---------------------------------------<br>
<br>
 - state = 0<br>
 - state.seconds +1 > state에 1더하기<br>
 - this.tick(), 1000  >> 1초(1000) 마다 한번씩 tick 실행<br>
<br>
-상태를 가지는 컴포넌트<br>
컴포넌트는 this.props를 이용해 입력 데이터를 다루는 것 외에도<br>
내부적인 상태 데이터를 가질수있습니다. 이는 this.state로 접근할 수 있습니다.<br>
컴포넌트의 상태 데이터가 바뀌면 render(),가 호출되어 마크업이 갱신<br>
<br>
-------------------------------------<br>
<br>
 - handlechange는 모든 키보드 이벽마다 react의 state를 갱신해서 보여준다.<br>
 - 유저입력 > handlechange > react의 state를 갱신 > form element가 react state를 참조<br>
 - 유저 입력을 강제로 대문자로 변경할 경우에도 사용.<br>
 - input area에 이벤트가 발생하면 hendlechange가 동작하여 state의 text값을 변경<br>
 - add버튼을 클릭하여 리스트의 lenth에 1을 더해서 버튼에 출력<br>
 - e.preventDefault(); <br>
// 양식을 제출할 때는 브라우저 새로고침이 발생하는 데 리액트는 비동기식이기 때문에 필요없음. 그걸 안하게 만드는 문장 <br>
<br>
Key Props<br>
key는 props가 안정적으로 사용할 수 있도록 고유성을 부여하기 위해 필요하다<br>
react가 어떤 props를 변경, 추가할지 식별을 도와줌<br>
반드시 date를 사용하지 않아도 index 값도 가능 , 유일한 값이라면 어느 값이든 가능.<br>
<br>
javascript<br>
java는 배열속성을 정해주지만 javascript는 속성을 지정해주지 않기 때문에<br>
배열 안에 아무거나 넣어도 된다.<br>
<br>
-애플리케이션<br>
props와 state를 사용해서 간단한 todo 애플리케이션을 만들수 있습니다.<br>
state를 사용해 사용자가 입력한 텍스트와 파일 목록을 관리합니다.<br>
이벤트 핸들러들이 인라인으로 각각 존재하는 것처럼 보이지만, 실제로는 이벤트 위임을 통해 하나로 구현됩니다.<br>
<br>
<br>
----------------------------------------------<br>
 외부 플러그인은 remarkable을 사용함으로 cdn으로 링크를 추가한다,<br>
https://github.com/jonschlinkert/remarkable<br>
<br>
 - 외부 플러그인을 사용하는 컴포넌트<br>
react는 유연하며 다른 라이브러리나 프레임워크를 함께 활용할 수 있습니다.<br>
이 예제에서는 외부 마크다운 라이브러리인 remarkable을 사용해<br>
 <textarea>의 값을 실시간으로 변환합니다.<br>
<br>
새로운 react 만들기.<br>
npx create-react-app markdown-editor<br>
<br>
npm install remarkable<br>
<br>
import { Remarkable } from 'remarkable';<br>
import React, { Component } from 'react';<br>
<br>
하고 복사<br>
<br>
-review<br>
외부 컴포넌트를 사용하기 위해 생성자 내 객체를 생성한다.<br>
state 를 이용<br>

## [ 11월 10일]
> 학습내용 <br />
> 컴포넌트 설치 오류
> 컴포넌트 설치 오류 등 원인 규명이 되지 안은 오류가 있을 경우
> package.json과 package-lock.json 차이
- 조금 더 나아가기 <br>
<p>git hub 페이지 만들기
-package.json<br>
<br>
"homepage": "https://hanmanjung.github.io/movie2021"<br>
<br>
script<br>
    "predeploy": "npm run build",<br>
    "deploy": "gh-pages -d build"<br>
<br>
터미널<br>
npm install gh-pages<br>
<br>
배포<br>
npm run deploy<br>
<br>
min 파일<br>
줄바꿈을 다 없애버리고 한줄로 사용.<br>
-> 줄바꿈도 1byte 이기 때문에 500줄 짜리 한줄로 만들면 500byte 줄일수 있음.<br>
배포할때는 min 파일로 해야함.<br>
<br>
cdn으로 할때...<br>
리액트 cdn >  babel > 스크립트 타입에 text-babel 넣어주기<br>
<br>
리액트 장점.<br>
내가 고치고 싶은 곳만 고칠수 있음.<br>
요즘 유튜브 , 페이스북 같은 거대한 사이트를 전체적으로 고치려면<br>
한세월 걸린다. 하지만 리액트는 고치고 싶은 부분만<br>
고칠 수 있어서 쉽게 바꿀 수 있다.</p><br>
<br>
<h2> 컴포넌트 설치 오류 등 원인 규명이 되지 안은 오류가 있을경우</h2>
   - $ npm cache clean --force<br>
   - $ npm rebuild<br>
   - $ rm -rf node_modules<br>
   - $ npm install<br>
<br>
   * 만일 rm명령이 실행되지 않으면 shell을 관리자 권한으로 실행한 후 다시 시도해 본다.<br>
   * 그래도 안될 경우는 탐색기에서 삭제하면 되는데 시간이 조금 걸릴 수는 있다.<br>
   * 원인 모를 문제가 발생했을 때 cache clean과 rebuild를 통해 많은 부분 해결되기도 한다.<br>
<br>
<h2> package.json과 package-lock.json 차이</h2>
   - package.json은 패키지 의존성 관리 파일이다.<br>
   - 협업을 할 때는 팀원들 각자의 컴퓨터에 같은 패키지들을 설치해서 동일한 개발환경을 구성해야 하는게 이때 사용하는 것이 package.json이다.<br>
   - 물론 개인의 프로젝트를 재 생성하거나, 이번의ㅣ 경우처럼 오류가 있을 때도 유용하게 사용된다.<br>
   - 하지만 간혹 팀원들 중 버전이 다르게 설치되는 경우 앱이 동작하지 않는 경우도 있어 난감할 때가 생긴다. 이때는 다음과 같이 확인하고 조치한다.
     결국 앞서 소개한 방법으로 해결하는 것이다.<br>
   - package.json의 경우는 version range를 사용한다. "express":"~4.16.1"<br>
   - package.json-lock.json 이 변경될 때 마다 업데이트 되는 것으로 좀더 정확한 버전이 기록되어 있다.<br>
<br>
   - npm install을 진행하더라도 서로 다른 node_modules트리를 생성하는 경우가 발생한다.<br>
   - 이것은 npm의 버전이 다른 경우, npm 알고리즘의 차이가 나기 때문이다.<br>
   - 그래서 팀원 간의 문제가 발행하면 npm버전부터 확인한다.<br>
     
## [ 11월 3일]
> 학습내용 <br />
> 액션06. 라우터 테스트하고 문제 찾아보기
> 액션07. 라우터 자세히 살펴보기
> 액션08. 라우터 다시 테스트해 보기
> 액션09. App 다시 원래대로 돌리기
> 액션11. About.css 작성하기
> 08-3. 네비게이션 만들어 보기
- 조금 더 나아가기 <br>
<h2>  08-4. 영화 상세 정보 기능 만들어 보기</h2>  
  - route props를 이용해 영화 카드를 누르면 상세 정보를 보여주는 기능을 만들어 본다.<br>
  - route props는 라우팅 대상이 되는 컴포넌트에 넘겨주는 기본 props를 말한다.<br>
    * 액션01. route props 살펴보기<br>
    * 액션02. route props에 데이터 담아 보내기<br>
    * 액션03. route props 다시 살펴 보기<br>
    * 액션04. Navigation 컴포넌트 정리하기<br>
    * 액션06. Deatil 컴포넌트 만들기<br>
    * 액션07. Route 컴포넌트 추가하기<br>
    * 액션08. 영화 카드를 눌러/ movie-detail로 이동한 다음 영화 데이터 확인하기 <br>
<h2>08-5. 리다이렉트 기능 만들어 보기</h2>
  - 리다이렉트 기능을 사용하기 위해서는 route props의 history 키를 활용해야 한다.<br>
  - history키에는 push,go,goBack,goForward와 같이 키가 있으며, 그 키에는 URL을 변경해 주는 함수들이 있다.<br>
  - 이 함수들을 이용해서 리다이렉트 기능을 구현한다.<br>
    * 액션01. History 키 살펴보기<br>
    * 액션02. Detail 컴포넌트 클래스형 컴포넌트로 변경하기 <br>
    * 액션03. push() 함수 사용하기 <br>
    * 액션04. 리다이렉트 기능 확인해 보기<br>
    * 액션05. 영화 제목 출력하기<br>
    * 액션06. /movie-detail로 바로 이동하기
    * 액션07. location.state 확인하기
<pre><code>
import React from "react"
import axios from "axios"
import Movie from "../components/Movie"
import "./Home.css"

class Home extends React.Component{
  state = {
    isLoading : true,
    movies : []
  }

  getMovies = async() => {
    const{
      data: {
        data : {movies}
      }
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating')
    this.setState({movies, isLoading: false})
  }

  componentDidMount(){
   this.getMovies()
  }
  render() {
    const { isLoading, movies } = this.state
    return(
      <section className='container'>
        { isLoading ?
        ( <div className='loader'>
          <span className='loader-text'> Loading....</span>
          </div>
          ) : (
            <div className='movies'>
              {
                movies.map((movie) => {
                  return <Movie 
                          key = {movie.id}
                          id = {movie.id}
                          year = {movie.year}
                          title = {movie.title}
                          summary = {movie.summary}
                          poster = {movie.medium_cover_image}
                          genres = {movie.genres}
                          />
                        })}
            </div>
          )}
        </section>
    )
  }
}

export default Home;
</pre></code>

## [ 10월 27일]
> 학습내용 <br />
> 08-1. react-router-dom 설치하고 프로젝트 폴더 정리하기
> 08-2. 라우터 만들어 보기
> 액션03. ABout.js 수정하기
> 액션04. 라우터 테스트해 보기
> 액션05. Home 컴포넌트를 위한 Route컴포넌트 추가하기
> 액션06. 라우터 테스트하고 문제 찾아보기
> 액션07. 라우터 자세히 살펴보기
> 액션08. 라우터 다시 테스트해 보기
> 액션09. App 다시 원래대로 돌리기
> 액션11. About.css 작성하기
> 08-3. 네비게이션 만들어 보기
- 조금 더 나아가기 <br>
<h2> 08-1. react-router-dom 설치하고 프로젝트 폴더 정리하기 </h2>
  - 간단한 메뉴를 추가한다. <br>
  - 메뉴를 클릭하면 화면이 이동해야 하는데, 이때 필요한 것이 라우터이다. <br>
  - 라우터는 react-router-dom 패키지를 이용하면 된다. <br>
    * 액션01. react-router-dom 설치하기<br>
    * 액션02. components 폴더에 Movie 컴포넌트 옮기기<br>
    * 액션03. routes 폴더에 라우터가 보여줄 화면 만들기 <br>
    * 액션04. Home.js 수정하기 <br>
    * 액션05. Home.css 만들기/ 액션06 App.js 수정하기<br>
<h2> 08-2. 라우터 만들어 보기</h2>
  - 라우터는 사용자가 입력한 URL을 통해 특정 컴포넌트를 불러준다.<br>
  - 예) localhost:3000/about<br>
  - React-router-dom은 여러 종류의 라우터를 제공하는데, 여기서는 HashRouter와 Route 컴포넌트를 사용한다.<br>
  - App.js에 HashRouter와 Route 컴포넌트 import하고 적용한다.<br>
    * 액션01. HashRouter와 Route 컴포넌트<br>
    * 액션02. Route 컴포넌트에 path, component props 추가하기 <br>
    * 액션03. About.js 수정하기<br>
    * 액션04. 라우터 테스트해 보기<br>
    * 액션05. Home 컴포넌트를 위한 Route컴포넌트 추가하기<br>
    * 액션06. 라우터 테스트하고 문제 찾아보기<br>
    * 액션07. 라우터 자세히 살펴보기<br>
    * 액션08. 라우터 다시 테스트해 보기<br>
    * 액션09. App 다시 원래대로 돌리기<br>
    * 액션11. About.css 작성하기<br>
<h2>  08-3. 네비게이션 만들어 보기</h2>
    * 액션01. Navigation 컴포넌트 만들기<br>
    * 액션02. Navigation 컴포넌트 App 컴포넌트에 포함 시키기 <br>
    * 액션03. Home 링크 눌러 보기<br>
    * 액션04. a태그 Link 컴포넌트로 바꾸기<br>
    * 액션05. Navigation 컴포넌트 위치 다시 확인하기<br>
    * 액션06. Navigation 컴포넌트 스타일링하기<br>
<h2>  08-4. 영화 상세 정보 기능 만들어 보기</h2>  
  - route props를 이용해 영화 카드를 누르면 상세 정보를 보여주는 기능을 만들어 본다.<br>
  - route props는 라우팅 대상이 되는 컴포넌트에 넘겨주는 기본 props를 말한다.<br>
    * 액션01. route props 살펴보기<br>
    * 액션02. route props에 데이터 담아 보내기<br>
    * 액션03. route props 다시 살펴 보기<br>
    * 액션04. Navigation 컴포넌트 정리하기<br>
    * 액션06. Deatil 컴포넌트 만들기<br>
    * 액션07. Route 컴포넌트 추가하기<br>
    * 액션08. 영화 카드를 눌러/ movie-detail로 이동한 다음 영화 데이터 확인하기 <br>
<h2>08-5. 리다이렉트 기능 만들어 보기</h2>
  - 리다이렉트 기능을 사용하기 위해서는 route props의 history 키를 활용해야 한다.<br>
  - history키에는 push,go,goBack,goForward와 같이 키가 있으며, 그 키에는 URL을 변경해 주는 함수들이 있다.<br>
  - 이 함수들을 이용해서 리다이렉트 기능을 구현한다.<br>
    * 액션01. History 키 살펴보기<br>
    * 액션02. Detail 컴포넌트 클래스형 컴포넌트로 변경하기 <br>
    * 액션03. push() 함수 사용하기 <br>
    * 액션04. 리다이렉트 기능 확인해 보기<br>
    * 액션05. 영화 제목 출력하기<br>
    * 액션06. /movie-detail로 바로 이동하기
    * 액션07. location.state 확인하기
    
## [ 10월 13일]
> 학습내용 <br />
> 06-3 Movie 컴포넌트 만들기
> 액션02. 영화 데이터 다시 살펴보기
> 액션03.04 Movie.propTypes 작성하기
> 액션06.07.08 노마드 코더 영화 API 정렬 기능 사용해 보기
> 액션09. axios.get() 수정하기
> 액션10. Movie 컴포넌트에서 props를 추가하고 출력해 보기
> 액션11. App 컴포넌트에서 Movie컴포넌트 그리기
> 액션12. map() 함수에 컴포넌트를 반환하는 함수 전달하기
> 액션13.Movie 컴포넌트를 반환하도록 movies.map() 수정하기
> 액션14.Movie컴포넌트에 props 전달하기
> 액션15. console탭에서 영화 데이터 확인해 보기
> 액션16. key props 추가하기
> 06-4 영화 앱 스타일링 하기 - 기초
> 액션02. Movie 컴포넌트에 HTML추가하기
> 액션03. 영화 포스터 이미지 추가하기 
> 07-1 영화 앱 전체 모습 수정하기
> 07-2 영화 앱 멋지게 스타일링하기
- 조금 더 나아가기 <br>
<h2>06-3. Movie 컴포넌트 만들기</h2><br>
   * 액션01. Movie 컴포넌트 만들기 
     - src폴더에 Movie.js파일을 새로 만든다.<br>
     - 컴포넌트의 기본 골격을 작성한다.<br>
     - Movie 컴포넌트는 state가 필요하지 않으므로 클래스형 컴포넌트가 아닌, 함수형 컴포넌트로 작성하기로 한다.<br>
     - Movie에 넘어와야 하는 영화 데이터를 정의하고, 관리하기 위해 prop-types를 사용한다.<br>
   * 액션02. 영화 데이터 다시 살펴보기<br>
     - yts-proxy.now.sh/list_movies.json에 접속해서 사용할 영화 데이터를 다시 확인한다.<br>
     - 데이터 중 필요한 것만 골라서 영화 앱에 반영한다.<br>
   * 액션03.04. Movie.propTypes 작성하기<br>
     - 먼저 id를 Movie.propTypes를 추가 한다.<br>
     - id의 자료형은 Number이고, 반드시 있어야 함으로 PropType.number.isRequired로 작성한다.<br>
     -year,title,summary,poster를 각각 Movie.propTypes에 추가한다.<br>
     - 여기서 poster props는 영화 포스터 이미지 주소를 저장하기 위한 것이다.<br>
   * 액션06.07.08 노마드 코더 영화 API정렬 기능 사용해 보기<br>
     - 평점을 기준으로 내림차순으로 영화 데이터를 정렬해 보여 주는 것을 확인할 수 있다.<br>
   * 액션09. axios.get() 수정하기<br>
     - axios.get()yts-proxy.now.sh/list_movies.json?sort_by=rating을 전달한다<br>
  <pre><code>   
  import PropTypes from 'prop-types'
import "./Movie.css"

function Movie({title, year, summary, poster, genres}) {
    return(
    <div className='movie'>
        <img src={poster} alt={title} title ={title} />
        <div className='movie-data'>
            <h3 className='movie-title'>{title}</h3>
            <h5 className='movie-year'>{year}</h5>
            <p className='movie-summary'>{summary}</p>
        </div> 
    </div>
    )
}


Movie.propTypes = {
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie 
</code></pre>
<h2>06-4.영화 앱 스타일링 하기 - 기초</h2><br>
    * 액션01. App 컴포넌트에 HTML추가하기<br>
      - App컴포넌트가 반환할 JSX바깥쪽을<section class="container">로 감싼다.<br>
      - Loading..은 <div class="loader"><span class="leader" >로 감싼다.<br>
      movies.map()은 <div class="movies">로 감싼다.<br>
    * 액션02. Movie컴포넌트에 HTML추가하기<br>
      - Movie 컴포넌트가 반환할 JSX를 <div class="movie">로 감싼다.<br>
      - 그 안에서 title,year,summary를 목적에 맞는 tag로 감싼다.<br>
    * 액션03. 영화 포스터 이미지 추가하기<br>
      - 전체 tag를 감싸는 div tag(class="movie")를 추가 한다.<br>
      - img tag를 그 아래 추가해서 src속성에는 poster props를, alt속성에는 title props를 전달한다.<br>
    * 액션04. Movie 컴포넌트 정리하기<br>
      - Movie 컴포넌트에는 id props가 필요 없으니 제거해 준다.<br>
    * 액션05. style속성으로 title 스타일링하기<br>
      - h3 tag에 style 속성을 추가하고 backgroundColor를 red로 준다.<br>
    * 액션06.CSS파일 생성<br>
      - src폴더에 App.css,Movie.css를 생성한다.<br>
    * 액션07.08.Movie 컴포넌트에 CSS 파일 import하기<br>
<h2>07-1.영화 앱 전체 모습 수정하기</h2><br>
    - 페이지의 디자인은 다음과 같이 한다.<br>
    - 왼쪽 위에는 살짝 튀어나온 듯한 느낌의 영화 포스트<br>
    - 오른쪽에는 제목,장르,평점(별 표시), 시놉시스<br>
    * 액션01. App.css 내용 모두 지우기<br>
      - 만일 삭제하거나 없다면 새로 생성한다.
    * 액션02. Movie 컴포넌트에 genres props 넘겨주기 <br>
      - 런타이(runtime) 아래 있는 장르(genres)를 추가해 준다.<br>
    * 액션03. Movie 컴포넌트 수정하기<br>
      - App컴포넌트에서 Movie컴포넌트에 genres props를 넘겨준다.
      - console을 확인해 보면 두가지의 warming을 확인할 수 있다.<br>
    * 액션04. App 컴포넌트 수정하기<br>
      - genres props가 Movie 컴포넌트에 underfined로 넘어 왔다는 부분 부터 수정한다.<br>
      - 이는 App컴포넌트에서 해당 props를 Movie컴포넌트로 전달 하기만 하면 된다.
      - 메시지가 사라졌는지 console을 확인해 보자.<br>
    * 액션05. class 속성 이름 className으로 바꿔 주기 <br>
      - 먼저 이런 메시지는 왜 나오는 것일까?<br>
      - 이는 HTML의 class와 자바스크립트의 class라는 이름이 겹치면 리액트가 혼란스러울 수 있기 때문이다.<br>
      - console에서 확인한다.<br>
      - 이와 유사한 예를 하나 더 설명하면, 바로 label문의 for element이다.<br>
      - 이것도 for="name"이 아니라 htmlFor="name"으로 작성한다.<br>
    * 액션06. 영화 장르 출력하기<br>
      - Movie컴포넌트에서 장르를 출력하도록 코드를 수정한다.<br>
      - genres props가 배열이므로 map()함수를 사용한다.<br>
      - genres props를 ul,li태그로 감싸서 출력한다.<br>
      - console을 확인하면 kye props가 없다는 메시지가 나온다.<br>
    * 액션07. li tag에 key props 추가하기<br>
      - 그런데 genre에는 key값으로 사용하기에 적당한 id값 같은 것이 없다.<br>
      - 이럴 경우 새롭게 만들어 내야 하는데, map() 함수에는 2번째 매개변수를 지정할 경우 배열의 Index 값을 반환해 주는 기능이 있다.<br>
      - 이것을 이용해서 배열의 인덱스를 key props로 활용하는 것이다.<br>
      -console을 확인해 본다.<br>
<pre><code>
import React from "react"
import axios from "axios"
import Movie from "./Movie"
import "./App.css"

class App extends React.Component{
  state = {
    isLoading : true,
    movies : []
  }

  getMovies = async() => {
    const{
      data: {
        data : {movies}
      }
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating')
    console.log(movies);
    this.setState({movies, isLoading: false})
  }

  componentDidMount(){
   this.getMovies()
  }
  render() {
    const { isLoading, movies } = this.state
    return(
      <section className='container'>
        { isLoading ?
        ( <div className='loader'>
          <span className='loader-text'> Loading....</span>
          </div>
          ) : (
            <div className='movies'>
              {
                movies.map((movie) => {
                  console.log(movie);
                  return <Movie 
                          key = {movie.id}
                          id = {movie.id}
                          year = {movie.year}
                          title = {movie.title}
                          summary = {movie.summary}
                          poster = {movie.medium_cover_image}
                          genres = {movie.genres}
                          />
                        })}
            </div>
          )}
        </section>
    )
  }
}

export default App;   
</code></pre>   
## [ 10월 06일]
> 학습내용 <br />
> 06-1. 영화 API사용해 보기
> 액션02. YTS영화 데이터 API 살펴보기
> 액션03. 영화 목록 데이터 확인해 보기
> 액션04. JSON Viewer 확장 도구 설치하기
> 액션05.
> 액션06. 노마드 코더 영화 API를 사용하자
> 액션07.
> 액션08. 영화 정보 더 자세히 살펴보기
> 액션09. 영화 정보를 더 자세히 보기 위해 조건 추가하기
> 액션10. movie_id가 10인 영화 정보 살펴보기
> 액션11. 노마드 코더 영화 API를 영화 앱에서 호출하기
> 06-2. 영화 데이터 화면에 그리기
> 액션02. 영화 데이터 자세히 살펴보기
- 조금 더 나아가기 <br>
<h2>06-1. 영화 API사용해 보기</h2><br>
   * 액션01. axios 설치하기<br>
     - javascript에서는 영화 데이터를 로딩 할 때 fetch()함수를 사용한다.<br>
     - 하지만 이 시간은 javascript시간이 아님으로 그 대신 axios를 사용하도록 한다.<br>
     - 터미널에서 다음과 같이 입력하여 axios를 설치한다.
        -> npm install axios<br>
   * 액션02. YTS영화 데이터 API 살펴보기<br>
     - 브라우저 주소창에 yts.lt/api라고 입력하고, YTS영화 데이터 API 사이트에 접속해보자.<br>
     - 앞으로 사용할 API는 'List Movies API'이다.<br>
     - List Movies를 클릭한다. 로그인 하지 않아도 된다.<br>
     - API는 특정 주소를 입력하면 그 주소에 맞는 결과를 보내 준다.<br>
     - 조건도 붙일 수 있도록 제공한다.<br>
   * 액션03. 영화 목록 데이터 확인해 보기<br>
     - 브라우저에서 Endpoint의 주소 중 json으로 끝나는 주소를 입력한다.<br>
     - min스타일로 제공되기 때문에 보기가 아주 불편하다.<br>
   * 액션04. JSON Viewer 확장 도구 설치하기<br>
     - JSON Viewer라는 확장 도구를 설치하면 정상적으로 볼 수 있다.<br>
     - 크롬 웹스토어 JSON Viewer라고 검색하고 설치한다.<br>
   * 액션05. <br>
     - 액션03에서 접속했던 주소로 다시 접속해 보자.<br>
     - status: 응답상태 메시지<br>
     - data: 영화 데이터<br>
     - movie_count: API가 보내준 영화 데이터의 개수<br>
     - limit: 보내준 데이터의 개수<br>
     - movies키의 서브키로 id,url,imdb_code,title 등을 제공한다.<br>
   * 액션06. 노마드 코더 영화 API를 사용하자<br>
     - API GitHub에 접속해 보면 README.md 소개 글에 다음과 같은 내용이 있다.<br>
     - YTS의 endpoint /list_movies.json을 사용하려면 yts-proxy.now.sh에 /list_movies.json을 붙이면 된다.<br>
     - 만일 YTS의 다른 endpoint와 함께 노마드 코더 영화 API를 사용하려면, yts-proxy.now.sh에 endpoint를 붙이면 된다.<br>
   * 액션07,액션08. 영화 정보 더 자세히 살펴보기<br>
     - 영화 정보를 좀더 자세히 살펴보자<br>
   *액션09. 영화 정보를 더 자세히 보기 위해 조건 추가하기<br>
     - Example에 있는 주소를 보면 movie_id를 어떻게 추가 하는지 알 수 있다.<br>
2. 06-2 영화 데이터 화면에 그리기<br>
   * 액션01. console.log() 함수로 영화 데이터 출력해 보기<br>
     - 앞에서 우리가 작업한 결과로 API가 보내준 데이터는 movies에 들어가 있을 것이다.<br>
     - console을 통해 출력해 보자.<br>
   * 액션02. 영화 데이터 자세히 살펴보기<br>
     - 출력된 데이터를 세심히 살펴 어떻게 사용할 지를 구상한다.<br>
     - 특히 dataㅣ키에 집중하여 살펴본다.<br>
   * 액션04. 객체에 있는 movies키에 접근하기<br>
     - movies변수에 있는 movies 키의 값을 추출해 보자.<br>
     - 이제 우리가 원하는 데이터만 추출된 것을 확인할 수 있다.
   * 액션05,액션06. movies state에 영화 데이터 저장하기<br>
   * 액션07.<br>
   <pre><code> 
   import React from "react";
import axious from "axios";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  }

  getMovies = async () => {
    const {
      data: {
        data: {movies}
      }
    } = await axios.get('https://yts.proxy.now.sh/list_movies.json')
    const movies 
    console.log(movies);
  }
  componentDidMount() {
    this.getMovies()
}
  render() {
    const {isLoading} = this.state
    return (
      <div>
        { isLoading ? 'Loading...' : '영화 데이터 출력'}
      </div>
    )
  }
}

export default App
   </code></pre>
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
<h2>I.04-4 음식 앱에 prop-types 도입하기</h2><br>
   - 정의한 props의 값이 컴포넌트에 제대로 전달되지 않으면 어떻게 해야 할까?<br>
   - pricture props에 {dish.image}가 아닌 {true}를 전달하면 어떻게 될까?<br>
   - 여러가지 이유로 원하는 대로 이미지 등이 나오지 않을 때 이를 검사할 수 있는 방법은 없을까?<br>
   - 이번 절에서는 이 검사 방법에 대해 알아 보도록 한다.<br>

<h3>액션 01. 음식 데이터에 rating 추가하기</h3><br>
   - foodLike 배열의 각 요소에 rating(평점)을 추가한다.
   - 값의 자료형은 number로 한다.<br>
   - Rating props를 Food 컴포넌트에 전달하면서 이 값을 검사해 보기로 한다.<br>
   - 그러기 위해서는 props의 자료형을 검사할 수 있도록 만들어 주는 prop-types라는 도구가 필요하다.<br>
   - 다음 액션에서는 도구를 설치해 본다.<br>
<h3>액션02. prop-type 설치하기</h3><br>
   - 터미널에서 다음 명령을 입력해서 prop-types를 설치한다.<br>
<h3>액션03. 정상 설치 여부 확인</h3><br>
   - package.json파일을 열어 dependencies 키에 있는 값을 살펴보자<br>
   - prop-types가 등록되어 있으면 설치가 정상적으로 된 것이다.<br>
   - prop-types는 컴포넌트가 전달받은 props가 원하는 값인지 확인해 주는 역할을 한다.<br>
   - prop-types를 통해 "Food 컴포넌트는 반드시 picture props가 전달되야 한다"고 정의할 수 있다.<br>
<h3>액션04. prop-types 적용하기</h3><br>
   - Import PropTypes from 'prop-types';를 App.js 파일 맨 위에 추가해 주자.<br>
   - 그리고 rating props를 Food 컴포넌트에 전달하자<br>
   - 아직 prop-types를 적용한 상태는 아니다.<br>
<h3>액션05. Food.propTypes 작성하기</h3><br>
   - 이제 prop-types를 적용해 보자.<br>
   - Food.propType에 객체를 적어 주기만 하면 된다.<br>
   - 모든 props는 문자열이고 반드시 있어야 한다는 조건을 추가해 보자.<br>
   - 실행하면 별 문제가 없어 보이지만, 콘솔 탭을 확인해 보면 경고 메시지가 보인다.<br>
<h3>액션06. Food.propTypes의 rating 키 값 확인하기</h3><br>
   - IsRequired는 필요하다는 뜻 이다.
   - 'rating에는 string이라는 자료형이 반드시 필요하다'는 이야기 이다.<br>
<h3>액션07.prop-types 경고 해결하기</h3><br>
   - rating: propTypes.string.isRequired 대신 rating: PropTypes.number.JsRequired로 교체<br>
   - Console탭을 확인해 보면 prop type 경고 메시지가 사라져 있다.<br>
<h3>액션08. 다른 종류의 prop-types 경고 해결하기</h3><br>
   - Picture props의 이름을 image로 바꿔보자<br>
   - 화면에 사진이 나오지 않게 된다<br>
   - Console 탭을 살펴보면 그 이유를 알 수 있다.<br>
   - Food 컴포넌트에 picture라는 이름의 props가 필요한데, 그 값이 underfined다.<br>  
<h2>II.05-1 state로 숫자 증감 기능 만들어 보기</h2><br>
   - props는 정적인 데이터만 다룰 수 있다.<br>
   - state는 동적인 데이터를 다루기 위해 사용된다.<br>
   - state는 class형 컴포넌트에서 사용된다.<br>
   - 기존의 App.js는 04-App.js로 이름을 바꾸고 새로운 App.js파일을 생성한다.<br>
<h3>액션01. 클래스형 컴포넌트 작성하기</h3><br>
<h3>액션02. App클래스가 React.Component 클래스를 상속 받도록 하자.</h3><br>
   - class를 'React.Component'로 상속받아 생성한다.<br>
   - 'React.Component' 클래스는 500여 줄이 넘는 코드로 여러가지 기능이 이미 구현되어 있기 때문에 사용하기에 편리하다.<br>
   - import할 때 '{Component}'를 써주면 extends에서 'React'을 생략할 수 있다.<br>
<h3>액션03. render() 함수를 사용해보자.</h3><br>
   - App컴포넌트가 JSX를 반환해야 하지만 class형 컴포넌트에서는 바로 return을 사용할 수 없다.<br>
   - render() 함수 내에서 return문을 사용한다.<br>
   - 함수형 컴포넌트는 return문이 JSX를 반환하지만, 클래스형 컴포넌트는 render() 함수가 JSX를 반환한다.<br>
<h3>액션04. state 정의하기</h3><br>
<h3>액션05. state에 count값 추가하고 사용하기.</h3><br>
<h2>III. 생성자란 무엇인가</h2><br>
   - constructor()는 Component를 생성할 때 state 값을 초기화하거나 메서드를 바인딩할 때 사용한다.<br>
   - React Component를 상속해서 만들어진 컴포넌트의 생성자를 구현할 때는 super(props)를 선언을 권고하는 이유는 this.props사용 시 생성자 내에서 정의되지 않아 버그 발생 가능성이 있기 때문입니다.<br>
   - 자바스크립트에서 super는 부모클래스 생성자의 참조한다는 의미이다.<br>
   - 또한가지 자바스크립트는 언어적 제약사항으로 생성자에서 super를 호출하기 전에는 this를 사용할 수없다. 반드시 super를 먼저 호출해야 this를 사용할 수 있다는 것이다.<br>
   - 생성자 내에서는 setState를 사용하지 않고, this.state를 사용하여 state의 초기값을 할당한다.<br>
   - 생성자 내에서는 외부API를 직접 호출할 수 없다. 필요하다면 componentDidMount()를 사용한다.<br>
<h3>액션02. componentDidMount() 함수 알아보기</h3><br>
   - componentDidMount() 함수를 선언하고, 함수 안에 console.log() 함수를 작성하여 실행되는 시점을 확인해 본다.<br>
   - 실행 순서를 console을 통해 확인해 보면 render() 함수 실행 직후인 것을 확인할 수 있다.<br>
<h3>액션03/04 componentDidUpdate() 함수 알아보기</h3><br>
   - 액션02와 동일한 방법으로 componentDidUpdate() 함수의 실행 순서를 확인한다.<br>
   - 단순히 실행한 것으로는 console에 출력되지 않는다. 화면이 없데이트 되어야 한다.<br>
   - 버튼을 클릭해서 화면을 업데이트 하면서, console을 확인한다.<br>
   - 버튼을 클릭하면 setState() 함수가 실행되고, render()함수로 화면이 업데이트된 직후 componentDidUpdate()함수가 실행된다.<br>
<h3>액션05. componentWillUnmount() 함수 알아보기</h3><br>
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