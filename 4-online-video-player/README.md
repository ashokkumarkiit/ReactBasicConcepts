### Configure Project
  - To start the project just visit to "https://console.cloud.google.com/apis"
  - Click on Enable API and Service.
  - Search for "YouTube Data API v3" and enable.
  - Generate API key for the same that will be used in the application.
  - Once API key is configured we need to perform "npm install" and then to launch "npm start".

### Learnings -

## De-structuring Props
  In case we not want to use this.props keyword again and again inside the block we can de-structure props while receiving it as below:

    //Normal Props
    const VideoItem = (props) => {
      ...
    }

    //De-structuring props what needs to be used inside.
    const VideoItem = ({ video, onVideoSelect }) => {
      ....
    }

## Calling a callback function with params
  If one need to pass a param to callback function, it must be called as arrow function as below:

    <div
      className="video-item item"
      onClick={() => onVideoSelect(video)}
    >
      ...
    </div>

    In case, the callback function is called normally like "this.onVideoSelect(video)", it wont pass the para to the callback function.
