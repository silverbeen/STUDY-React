# React URL 직접 접근 막기 



ex) 로그인 하지 않은 사용자 & 로그인 사용자

이 두명의 사용자는 접근 할 수 있는 페이지가 다름

- 로그인을 하지 않은 사용자의 접근 가능한 페이지  : 로그인 페이지, 회원가입 페이지

- 로그인 사용자의 접근 가능한 페이지 : 마이페이지, 회원 정보 등

> 비정상적인 URL 직접 접근을 막아 웹 프로그램의 예측하지 못한 에러를 방지하는 것이 필요하다.





## 어떻게 할까



- Public Route는 로그인하지 않은 사용자에게 공개된 URL을 관리
- Restricted 옵션의 유무를 통해서, 로그인 페이지, 회원가입 페이지 등 로그인 사용자가 접근하지 말아야 할 주소에 접근을 제한
- Private Route는 로그인한 사용자에게만 접근이 허용된 URL을 관리하여 로그인하지 않은 사용자가 접속할 경우 로그인 페이지로 리다이렉트



![image-20210208144911827](C:\Users\user\AppData\Roaming\Typora\typora-user-images\image-20210208144911827.png)





## 어디서 ? 

### 컴포넌트 추가

- Public Route 컴포넌트와 Private Route 컴포넌트를 다음과 같이 추가
- 각 라우터 안에는 isLogin() 이라는 메소드를 통해 사용자가 로그인 한 상태인지 확인
- 즉, isLogin() 메소드를 통해 접근 권한을 판단
- Public Route는 접근 권한이 없을 때 메인 페이지로 Redirect 하게 되고
- Private Route는 접근 권한이 없을 때 로그인 페이지로 Redirect



#### Public Route

```react
const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (isLogin() && restricted ? <Redirect to="/" /> : <Component {...props} />)}
    />
  );
};

export default PublicRoute;
```



#### Private Route

```react
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    //로그인이 되었을때만 보여주는 
    <Route
      {...rest}
      render={(props) => (isLogin() ? <Component {...props} /> : <Redirect to="/login" />)}
    />
  );
};

export default PrivateRoute;
```



### isLogin.js

- isLogin() 메소그에서는 로컬스토리지에 저장된 accessTOken의 존재 여부에 따라 로그인 상태를 판별
- accessToken의 유효성에 대한 검사흔 API 서버에서 이루어지며, axios.interceptor에서 401 응답을 받은 경우 로그인 페이지로 Redirect 시키기 떄문에 로그인 상태 판별은 accessToken의 여부로만 판단 가능

```react
const isLogin = () => !!localStorage.getItem('accessToken');

export default isLogin;
```





### 결과 

- 원래 Route의 형식을 흐트려지지 않으며 URL 접근제한을 적용할 수 있음



#### 직접 접근이 허용된 코드(적용 전)

```react
const routes = () => (
  <Switch>
    <Route exact path={pathURI.login} component={LoginPage} /> //로그인페이지
    <Route exact path={pathURI.register} component={RegisterPage} /> //회원가입페이지
    <Route exact path={pathURI.myBucketList} component={MyBucketListPage} />
    <Route exact path={pathURI.myBucketListDetail} component={MyBucketListDetailPage} />
    <Route exact path={pathURI.bucketcreate} component={BucketCreatePage} />
    <Route exact path={pathURI.achieveCreate} component={AchieveCreatePage} />
    <Route exact path={pathURI.feed} component={FeedPage} />
    <Route exact path={pathURI.setting} component={SettingPage} />
    <Route exact path={pathURI.logout} component={LogoutPage} />
    <Route exact path={pathURI.follow} component={FollowListPage} />
    <Route exact path={pathURI.userInfo} component={UserInfoPage} />
  </Switch>
);
```



#### 직접 접근 제한을 적용한 코드(적용 후)

```react
const routes = () => {
  return (
    <Switch>
      <PublicRoute restricted component={LoginPage} path={pathURI.login} exact />
      <PublicRoute restricted component={RegisterPage} path={pathURI.register} exact />
      <PrivateRoute component={MyBucketListPage} path={pathURI.myBucketList} exact />
      <PrivateRoute component={MyBucketListDetailPage} path={pathURI.myBucketListDetail} exact />
      <PrivateRoute component={BucketCreatePage} path={pathURI.bucketcreate} exact />
      <PrivateRoute component={AchieveCreatePage} path={pathURI.achieveCreate} exact />
      <PrivateRoute component={FeedPage} path={pathURI.feed} exact />
      <PrivateRoute component={SettingPage} path={pathURI.setting} exact />
      <PrivateRoute component={LogoutPage} path={pathURI.logout} exact />
      <PrivateRoute component={FollowListPage} path={pathURI.follow} exact />
      <PrivateRoute component={UserInfoPage} path={pathURI.userInfo} exact />
    </Switch>
  );
};
```

