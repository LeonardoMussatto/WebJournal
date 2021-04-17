import React from 'react';
import Card from './Card';

const Preview = (props) => {
  let central = {
    width: '90%',
    height: '95%',
    paddingTop: '5vh',
    paddingBottom: '5vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderLeft: '0.5px solid #000000',
    borderRight: '0.5px solid #000000',
    rowGap: '5%',
  };
  let centralSingle = {
    width: '90%',
    height: '95%',
    paddingTop: '5vh',
    paddingBottom: '5vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    borderLeft: '0.5px solid #000000',
    borderRight: '0.5px solid #000000',
  };
  let columnFull = {
    width: '80%',
    height: '97%',
    paddingTop: '5vh',
    paddingBottom: '5vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  };
  let columnPartial = {
    width: '80%',
    paddingTop: '5vh',
    paddingBottom: '5vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    rowGap: '2%',
  };
  
  if (props.articles.length === 1) {
    return (
      <>
        <div style={columnFull}></div>
        <div style={centralSingle}>
          <Card
            key={props.articles[0].id}
            target={props.articles[0]}
            column={false}
            img={true}
            remLine={true}
          />
        </div>
        <div style={columnFull}></div>
      </>
    );
  } else if (props.articles.length === 2) {
    return (
      <>
        <div style={columnFull}>
          <Card
            key={props.articles[1].id}
            target={props.articles[1]}
            column={true}
          />
        </div>
        <div style={centralSingle}>
          <Card
            key={props.articles[0].id}
            target={props.articles[0]}
            column={false}
            img={true}
            remLine={true}
          />
        </div>
        <div style={columnFull}></div>
      </>
    );
  } else if (props.articles.length === 3) {
    return (
      <>
        <div style={columnFull}>
          <Card
            key={props.articles[1].id}
            target={props.articles[1]}
            column={true}
          />
        </div>
        <div style={centralSingle}>
          <Card
            key={props.articles[0].id}
            target={props.articles[0]}
            column={false}
            img={true}
            remLine={true}
          />
        </div>
        <div style={columnFull}>
          <Card
            key={props.articles[2].id}
            target={props.articles[2]}
            column={true}
          />
        </div>
      </>
    );
  } else if (props.articles.length === 4) {
    return (
      <>
        <div style={columnFull}>
          {props.articles.slice(1, 3).map((article) => (
            <Card key={article.id} target={article} column={true} />
          ))}
        </div>
        <div style={centralSingle}>
          <Card
            key={props.articles[0].id}
            target={props.articles[0]}
            column={false}
            img={true}
            remLine={true}
          />
        </div>
        <div style={columnPartial}>
          <Card
            key={props.articles[3].id}
            target={props.articles[3]}
            column={true}
          />
        </div>
      </>
    );
  } else if (props.articles.length === 5) {
    return (
      <>
        <div style={columnFull}>
          {props.articles.slice(1, 3).map((article) => (
            <Card key={article.id} target={article} column={true} />
          ))}
        </div>
        <div style={centralSingle}>
          <Card
            key={props.articles[0].id}
            target={props.articles[0]}
            column={false}
            img={true}
            remLine={true}
          />
        </div>
        <div style={columnFull}>
          {props.articles.slice(3, 5).map((article) => (
            <Card key={article.id} target={article} column={true} />
          ))}
        </div>
      </>
    );
  } else if (props.articles.length === 6) {
    return (
      <>
        <div style={columnPartial}>
          {props.articles.slice(2, 4).map((article) => (
            <Card key={article.id} target={article} column={true} />
          ))}
        </div>
        <div style={central}>
          <Card
            key={props.articles[0].id}
            target={props.articles[0]}
            column={false}
            img={true}
          />
          <Card
            key={props.articles[1].id}
            target={props.articles[1]}
            column={false}
          />
        </div>
        <div style={columnPartial}>
          {props.articles.slice(4, 6).map((article) => (
            <Card key={article.id} target={article} column={true} />
          ))}
        </div>
      </>
    );
  } else if (props.articles.length === 7) {
    return (
      <>
        <div style={columnFull}>
          {props.articles.slice(2, 5).map((article) => (
            <Card key={article.id} target={article} column={true} />
          ))}
        </div>
        <div style={central}>
          <Card
            key={props.articles[0].id}
            target={props.articles[0]}
            column={false}
            img={true}
          />
          <Card
            key={props.articles[1].id}
            target={props.articles[1]}
            column={false}
          />
        </div>
        <div style={columnPartial}>
          {props.articles.slice(5, 7).map((article) => (
            <Card key={article.id} target={article} column={true} />
          ))}
        </div>
      </>
    );
  } else if (props.articles.length === 8) {
    return (
      <>
        <div style={columnFull}>
          {props.articles.slice(2, 5).map((article) => (
            <Card key={article.id} target={article} column={true} />
          ))}
        </div>
        <div style={central}>
          <Card
            key={props.articles[0].id}
            target={props.articles[0]}
            column={false}
            img={true}
          />
          <Card
            key={props.articles[1].id}
            target={props.articles[1]}
            column={false}
          />
        </div>
        <div style={columnFull}>
          {props.articles.slice(5, 8).map((article) => (
            <Card key={article.id} target={article} column={true} />
          ))}
        </div>
      </>
    );
  } else if (props.articles.length === 9) {
    return (
      <>
        <div style={columnFull}>
          {props.articles.slice(2, 6).map((article) => (
            <Card key={article.id} target={article} column={true} />
          ))}
        </div>
        <div style={central}>
          {props.articles.slice(0, 2).map((article) => (
            <Card key={article.id} target={article} column={false} img={true} />
          ))}
        </div>
        <div style={columnPartial}>
          {props.articles.slice(6, 9).map((article) => (
            <Card key={article.id} target={article} column={true} />
          ))}
        </div>
      </>
    );
  } else if (props.articles.length >= 10) {
    return (
      <>
        <div style={columnFull}>
          {props.articles.slice(2, 6).map((article) => (
            <Card key={article.id} target={article} column={true} />
          ))}
        </div>
        <div style={central}>
          {props.articles.slice(0, 2).map((article) => (
            <Card key={article.id} target={article} column={false} img={true} />
          ))}
        </div>
        <div style={columnFull}>
          {props.articles.slice(6, 10).map((article) => (
            <Card key={article.id} target={article} column={true} />
          ))}
        </div>
      </>
    );
  }
};

export default Preview;
