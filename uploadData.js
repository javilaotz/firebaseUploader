const firestoreService = require('firestore-export-import')
const serviceAccount = require('./key.json')

const databaseURL = 'https://example-23abc.firebaseio.com'

firestoreService.initializeApp(serviceAccount, databaseURL)
firestoreService.restore('data.json')