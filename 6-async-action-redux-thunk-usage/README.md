### Learnings

## Application Cycle with Middleware -

  ![React Redux Cycle](React-Redux-Cycle.png)

## Redux-Thunk - Middleware

  - It is a middleware that helps in making network request from the redux side of the application
  - It is a function that gets called every time we dispatch an action.
  - It can Modify, Stop, etc to actions.
  - Mostly Middleware generally used for handling async actions.
  - Redux Thunk - Allows to return a function from an action creator and redux thunk internally calls that function automatically with dispatch and getState arguments.
  - With this options, we have power to change or modify or read any data. Means, using "dispatch" we can change any data and through "getState" we can read/access any data we want. 
  - With Redux Thunk we can use Async Await.

  ![Redux Thunk](Redux-Thunk.png)

  - For wiring the middleware we need to write below snippet in srs/index.js:
  ```
    const store = createStore(reducers, applyMiddleware(thunk));

    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.querySelector('#root')
    );
  ```

##  Data Loading with Redux - Application Flow

  - ******** Components Responsible for fetching data by invoking Action Creator.
    - Initially the component is rendered on the screen.
    - To fetch the data on the Application start, component life cycle method is used.
    - 'componentDidMount' life-cycle method used which calls action creator.
  - ******** Action Creator making API calls.
    - Action creator runs to make an API request
    - On Successful call of API, data is returned as response.
    - Action creator dispatched the data returned with type and payload containing the response data.
  - ******** Reducers handle the request and component is re-rendered when state is updated.
    - Reducers defined specifically to handle the type of action, catches the request and store the payload data as state.
    - As new state was generated using react-redux, it makes the application re-render with the new data using mapStateToProps method.

## Error While calling API from action Creator - "Actions must be plain objects. Use custom middleware for async actions."

  - The above error is because when we use async await it does not remain the plain javascript objects. To Check we can use online Babel Transpiler to check the JS object.
  - Also we just returned the jsonPlaceholder.get('/posts') rather than actually returning the response using the below code:-

  ```
    export const fetchPosts = async () => {

      const response = await jsonPlaceholder.get('/posts');

      return({
        type: 'FETCH_POSTS',
        payload: response
      });
    }

  ```
  - Note: We can use promise to handle this issue but it will also not work.

  ```
    ***** Promise is not the data. It is just something that notifies when data is available for access post API call.
    ***** For the same reason we use ".then()" with promise when the data is available for access.
    export const fetchPosts = () => {

      const promise = await jsonPlaceholder.get('/posts');

      return({
        type: 'FETCH_POSTS',
        payload: promise
      });
    }
  ```
  - The above resolution using promise is also not acceptable. Because till the data is received from the API, the actions would have been already processed by the reducers and we wont received any data as the request was incomplete. So for the same reason we use Async action creators. And to use Async action creators we have to use middleware.

## Action Creators -

  - Synchronous action creator - Instantly runs and returns data without any delay.
  - Asynchronous action creator - Require some time to complete the API request and once the data is available, it returns the data.

  ***** Action Creator Functionality
  - Action creator always returns action object.
  - Action must have a type property.
  - Action can optionally have a 'payload'.

## Rules for Reducers -

  - Reducer must not return an undefined value. The return can return any type of value.
  - Reducers are Pure and simple  - means we do-not do any tasks like API Call or reading file , etc.
  - Never mutate(change) the state object argument inside reducer.
    It means for an object like state, address ref is used to match and not the actual content. If the actual content is changes inside the state, reducer won't find any change as the address location is same and thus return the previous state that is unchanged. So changing the existing state is not at all meaningful.
  - [Note - in Javascript, strings and numbers are not mutable but arrays are]
