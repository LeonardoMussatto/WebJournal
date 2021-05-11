import React from 'react';
import firebase from 'firebase';

export const useGetLatestArticles = () => {
  const [Articles, setArticles] = React.useState([]);
  const database = firebase.firestore();
  React.useEffect(() => {
    database
      .collection('test')
      .get()
      .then((snapshot) => {
        const arr = [];
        snapshot.docs.map((doc) => arr.push({ id: doc.id, ...doc.data() }));
        setArticles(arr);
      })
      .catch((error) => {
        console.log('Error getting document:', error);
        setArticles([{ id: "error" }]);
      });
  }, [database]);
  return [Articles];
};
