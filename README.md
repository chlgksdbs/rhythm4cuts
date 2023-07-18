# SUB_PJT_1_B109


## 📆 개발 기간
> 2023.07.10 ~ 2023.08.18


## 👫 TEAM: 9ithub

<table>
  <tbody>
    <tr>
      <td align="center">
        <a href="https://github.com/chlgksdbs">
          <img src="https://github.com/chlgksdbs/forJ/assets/96401350/f0164a80-4990-4b41-8b96-6ae21a4b5b0f" width="100px;"/>
          <br />
          <p><b>최한윤</b></p>
        </a>
        <ul>
          <li>팀장</li>
          <li>Back-end</li>
        </ul>
      </td>
      <td align="center">
        <a href="https://github.com/sixinchnails">
          <img src="https://github.com/chlgksdbs/forJ/assets/96401350/ce77878d-19b1-48d0-a7dd-b7bc8d8a63e1" width="100px;"/>
          <br />
          <p><b>최재용</b></p>
        </a>
        <ul>
          <li>Back-end</li>
        </ul>
      </td>
      <td align="center">
        <a href="https://github.com/HongYouBin">
          <img src="https://github.com/chlgksdbs/forJ/assets/96401350/ac2e1247-2f67-48c5-a6d1-5c4293305318" width="100px;"/>
          <br />
          <p><b>홍유빈</b></p>
        </a>
        <ul>
          <li>Back-end 리더</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td align="center">
        <a href="https://github.com/acd4548">
          <img src="https://github.com/chlgksdbs/forJ/assets/96401350/5cbf280a-1448-4b8f-b2ff-1cf0b00e7b20" width="100px;"/>
          <br />
          <p><b>유민국</b></p>
        </a>
        <ul>
          <li>Front-end 리더</li>
        </ul>
      </td>
      <td align="center">
        <a href="https://github.com/hyunnn12">
          <img src="https://github.com/chlgksdbs/forJ/assets/96401350/c8d8b028-db2c-43ab-87f4-d4321c0dc7d4" width="120px;"/>
          <br />
          <p><b>강현</b></p>
        </a>
        <ul>
          <li>Front-end</li>
        </ul>
      </td>
      <td align="center">
        <a href="https://github.com/SeongLI">
          <img src="https://avatars.githubusercontent.com/u/110223414?v=4" width="135px;"/>
          <br />
          <p><b>이은성</b></p>
        </a>
        <ul>
          <li>Front-end</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>


<details>
<summary> 2023-07-17 ( 6일차 ) </summary>
<div markdown="2">

## 📅 일일 스크럼
#### FRONT-END
> - 요구사항 명세서 작성
> - UI/UX 컨설팅 

#### BACK-END
> - 가사 채점 레퍼런스 찾기
> - 음정 채점 관련 정확도 향상을 위한 시도
> - 싱크 맞추기 래퍼런스 찾기

<br/>

## ✅ 오늘 진행한 일

#### FRONT-END
> - 요구사항 명세서 작성
> - UI/UX 컨설팅 
> - 목업 설정 

##### UI/UX 상담 내용
> - 게임 메인화면에 뮤직비디오를 나오게 하는 것 추천한다. 기술적으로 어렵지 않다. 
> - 게임 순서 설정하거나 중간에 바꾸게 하는 것 추천한다. 
> - 나가기 버튼은 없애는 게 낫다.
> - 게임 녹화한 후 메인 페이지에 방명록 클릭하면 녹화한 내용 나오도록 설정하는게 좋다.
> - 마이페이지에 My Photo에도 사진을 보고 했던 노래들을 볼 수 있음 좋을 거 같다.

#### BACK-END
> - 가사 채점 레퍼런스 찾기
> - 음정 채점 관련 정확도 향상을 위한 시도
> - 요구사항 명세서 작성
> - ERD 상담받기
> - ERD 수정하기

##### ERD 상담 내용
> - 유저-PK보다는 일련번호가 좀 더 논리적인 이름이 필요하다.
> - id보다는 seq로 변경 추천한다.
> - 프로젝트 이름을 우측 상단에 굳이 넣을 필요 없다. 스키마 이름을 넣는게 그나마 더 낫다.
> - 타입 설정 메모리와 저장 내용 고려해서 해야 한다.
> - 생성 날짜 같은 것들을 맨 밑으로 중요한 것들을 위로 올리자
> - 친구 신청 테이블이 있어야 한다. 성공해야 친구목록 테이블로 간다. 친구목록 테이블에 수락, 거절 컬럼이 있어야 한다.
> - 일대일로 된 테이블은 굳이 나눌 필요가 없이 그냥 합치는게 좋다. 
> - 방 정보 테이블에 사진 촬영 여부를 넣어야 할 거 같다.
> - 네컷 배경 테이블을 만들어 그 배경의 아이디와 주소 등을 관리하는게 좋다.
> - 게임 결과를 유저 정보 테이블에 추가
> - 포인트 누적, 사용 로그 추가
> - 사진 경로 지금처럼 해놓고 하면 보안 상으로 좋지 않다. 폼 데이터로 파일을 저장할 때 물리적 경로로 저장을 한다. 
> - 오리지날 파일 첨부 주소와 저장 파일 첨부 주소(무슨 파일을 들고 와야 되는데? 할 때 사용하는 주소) 주로 이렇게 두 개의 컬럼을 저장한다. 
권한을 설정


- #### 오늘의 공유 사이트  
[Spring Security + JWT](https://www.inflearn.com/course/%EC%8A%A4%ED%94%84%EB%A7%81%EB%B6%80%ED%8A%B8-jwt/dashboard)

<hr>
</div>
</details>
