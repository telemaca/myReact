import React from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import Card from "./components/Card/Card";
import Wrapper from "./components/Wrapper/Wrapper";
import img1 from "./components/Card/imgs/1.JPG";
import img2 from "./components/Card/imgs/2.JPG";
import img3 from "./components/Card/imgs/3.JPG";
import img4 from "./components/Card/imgs/4.JPG";
import img5 from "./components/Card/imgs/5.JPG";
import img6 from "./components/Card/imgs/6.JPG";
import style from "./app.module.scss";
import { RiBookMarkLine } from "react-icons/ri";
import { BsBook, BsBookHalf, BsEnvelope, BsCircle } from "react-icons/bs";
import { FaPlus, FaRegMoon } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <Header>
        <Header.SiteName>Courses</Header.SiteName>
        <Header.SearchBar />
      </Header>
      <Wrapper className={style.wrapper}>
        <Sidebar>
          <Sidebar.ListTitle text="MENU" />
          <Sidebar.List>
            <Sidebar.ListItem icon={<RiBookMarkLine />} text="My Courses" />
            <Sidebar.ListItem icon={<BsBook />} text="Browse Courses" />
            <Sidebar.ListItem icon={<BsBookHalf />} text="My Categories" />
            <Sidebar.ListItem icon={<BsEnvelope />} text="My Messages" />
          </Sidebar.List>
          <Sidebar.ListTitle text="GROUPS" />
          <Sidebar.List>
            <Sidebar.ListItem icon={<BsCircle />} text="UI/UX" />
            <Sidebar.ListItem icon={<BsCircle />} text="Industrial Design" />
            <Sidebar.ListItem icon={<BsCircle />} text="Architecture" />
          </Sidebar.List>
          <Sidebar.TextAction icon={<FaPlus />} text="Add Group" />
          <Sidebar.TextAction icon={<FaRegMoon />} text="Dark Mode" />
        </Sidebar>
        <Main>
          <Main.MainTitle text="My Courses" />
          <Wrapper className={style.cardWrapper}>
            <Card className={style.card}>
              <Card.CardImage link={img1} />
              <Card.CardTitle text="Abstract Design" />
              <Card.CardText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit, nisl in tincidunt aliquet, sapien lacus mollis libero, eget commodo justo velit in dolor." />
            </Card>
            <Card className={style.card}>
              <Card.CardImage link={img2} />
              <Card.CardTitle text="Industrial Design" />
              <Card.CardText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit, nisl in tincidunt aliquet, sapien lacus mollis libero, eget commodo justo velit in dolor." />
            </Card>
            <Card className={style.card}>
              <Card.CardImage link={img3} />
              <Card.CardTitle text="Photography" />
              <Card.CardText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit, nisl in tincidunt aliquet, sapien lacus mollis libero, eget commodo justo velit in dolor." />
            </Card>
            <Card className={style.card}>
              <Card.CardImage link={img4} />
              <Card.CardTitle text="Marketing" />
              <Card.CardText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit, nisl in tincidunt aliquet, sapien lacus mollis libero, eget commodo justo velit in dolor." />
            </Card>
            <Card className={style.card}>
              <Card.CardImage link={img5} />
              <Card.CardTitle text="3D Art" />
              <Card.CardText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit, nisl in tincidunt aliquet, sapien lacus mollis libero, eget commodo justo velit in dolor." />
            </Card>
            <Card className={style.card}>
              <Card.CardImage link={img6} />
              <Card.CardTitle text="Fine Art" />
              <Card.CardText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit, nisl in tincidunt aliquet, sapien lacus mollis libero, eget commodo justo velit in dolor." />
            </Card>
          </Wrapper>
        </Main>
      </Wrapper>
    </div>
  );
}

export default App;
