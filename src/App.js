import "./styles.css";
import Header from "./components/Header";
import Headline from "./components/Headline/headline";
import Button from "./components/button/index";
import ListItem from "./components/listItem/listItem";
import { connect } from "react-redux";
import { fetchProps } from "./actions/index";

const tempArray = [
  {
    fname: "manikanta",
    lname: "chinna",
    email: "manikantakondapalli944@gmail.com",
    age: 25,
    onlineStatus: true
  }
];

const App = (props) => {
  const fetch = () => {
    props.fetchProps();
  };

  const configButton = {
    buttonText: "Get Posts",
    emitEvent: fetch
  };

  return (
    <div className="App">
      <Header />
      <Headline
        desc="hey this is a description"
        posts="Posts"
        tempData={tempArray}
      />

      <Button {...configButton} />

      {props.posts.length !== 0 && (
        <div>
          {props.posts.map((post, index) => {
            const { title, body } = post;
            const configListItem = {
              title,
              desc: body
            };
            return <ListItem key={index} {...configListItem} />;
          })}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps, { fetchProps })(App);
