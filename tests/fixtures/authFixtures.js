export const initialState = {
  status: "checking", // checking - not-authenticated - authenticated
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
};

export const authenticatedState = {
  status: "authenticated", // checking - not-authenticated - authenticated
  uid: "123ABC",
  email: "test@test.com",
  displayName: "Testico Testeo",
  photoURL: "https://foto.jpg",
  errorMessage: null,
};

export const notAuthenticatedState = {
  status: "not-authenticated", // checking - not-authenticated - authenticated
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
};

export const demoUser = {
  uid: "ABC123",
  email: "demo@demo.com",
  displayName: "Demo Testing",
  photoURL: "https://demo.jpg",
};