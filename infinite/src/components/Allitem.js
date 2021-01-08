import React from "react";
import axios from "axios";
import List from './List';

class Allitem extends React.Component {
  callNewsAPI = () => {
    const newsListAPI = "http://newsapi.org/v2/everything?q=bitcoin&from=2020-12-01&sortBy=publishedAt&apiKey=9e13930af2ed45e49e472714d8a895fc";
    return axios.get(newsListAPI).then((res) => {
      console.log(res.data);
      let result = res.data.slice(this.state.preItems, this.state.items);
      console.log(result);
      return result;
    });
  };
  //지정한 숫자만큼의 배열 가져오기
  constructor() {
    super();

    this.state = {
      newsList: [],
      items: 10,
      preItems: 0,
    };
  }

  componentDidMount() {
    //컴포넌트가 마운트 되는 순간 infiniteScroll 함수 실행
    window.addEventListener("scroll", this.infiniteScroll, true);
  }

  //스크롤이 끝에 다다르면 componentDidMount() 실행하기
  infiniteScroll = () => {
    let scrollHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight
    );
    let scrollTop = Math.max(
      document.documentElement.scrollTop,
      document.body.scrollTop
    );
    let clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      this.setState({
        preItems: this.state.items,
        items: this.state.items + 10,
      });
      this.componentDidMount();
    }
  };

  render() {
    const { newsList } = this.state;
    return (
      <article className="Allitem">
        <div className="toInfo">
          <div className="totalItems">
            <p className="totalNum">
              총 <span className="pointSpan">1541</span>
              개의 상품이 조회되었습니다.
            </p>
          </div>
					<List></List>
        </div>
      </article>
    );
  }
}

export default Allitem;
