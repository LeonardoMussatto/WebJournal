import React from 'react';
import firebase from 'firebase';

export const useGetArticle = (id) => {
  const [Article, setArticle] = React.useState();
  const database = firebase.firestore();
  React.useEffect(() => {
    database
      .collection('articles')
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setArticle(doc.data());
        } else {
          console.log('No such document!');
          setArticle(undefined);
        }
      })
      .catch((error) => {
        console.log('Error getting document:', error);
        setArticle(undefined);
      });
  }, [database, id]);

  return Article;
};

// export const useGetArticle = () => {
//   const [Article, setArticle] = React.useState([]);
//   const database = firebase.firestore();
//   React.useEffect(() => {
//     database
//       .collection('articles')
//       .doc('IqKj9IZ1u03caRsD0ZPx')
//       .get()
//       .then((doc) => {
//         if (doc.exists) {
//           setArticle([{id: "1", ...doc.data()}]);
//         } else {
//           console.log('No such document!');
//           setArticle([{id: "2"}]);
//         }
//       })
//       .catch((error) => {
//         console.log('Error getting document:', error);
//         setArticle([{id: "3"}]);
//       });
//   }, [database]);

//   return [Article];
// };
