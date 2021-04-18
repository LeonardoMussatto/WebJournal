import React from 'react';
import firebase from 'firebase';

export const useGetLatestArticles = () => {
  const [Articles, setArticles] = React.useState([]);
  const database = firebase.firestore();
  React.useEffect(() => {
    database
      .collection('articles')
      .get()
      .then((snapshot) => {
        if (snapshot.exists) {
          const arr = [];
          snapshot.docs.map((doc) => arr.push({ id: doc.id, ...doc.data() }));
          setArticles(arr);
        } else {
          console.log('No such document!');
          setArticles([]);
        }
      })
      .catch((error) => {
        console.log('Error getting document:', error);
        setArticles([]);
      });
  }, [database]);
  return [Articles];
};
