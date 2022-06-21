In the project directory, you can run:

### `npm start`

This is for learn, How to connect firebase(firestore) with react application

### add this rule to firebase
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if
          request.time < timestamp.date(2022, 6, 30);
    }
  }
}