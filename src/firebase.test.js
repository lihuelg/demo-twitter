import Firebase from './firebase';

it('add a post', () => {
  const firebaseInstance = new Firebase();

  return firebaseInstance.db.collection('posts')
  .add({ message: 'This is add post test', createdBy: 'bGF5359vgNFpaQBS4ORG' })
  .then(docRef => {
    console.log(docRef.id)
    return !!docRef.id
  })
  .catch(error => {
    console.error(error);
    throw new Error(error)
  });
});
