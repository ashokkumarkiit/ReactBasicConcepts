### Learnings

## Input OnChange() -  
    // Uncontrolled Event
    One way is to define separate method and call.

      onInputChange(event) {
        console.log(event.target.value);
      }
      <input type="text" onChange={this.onInputChange} />

    Other way is to use arrow function like below:

        <input type="text" onChange={(event) => console.log(event.target.value)} />

    //Controlled event below :- using state

      <input
        type="text"
        value={this.state.term}
        onChange={(e)=> this.setState({term: e.target,value})}
      />
## Context Issues for onFromSubmit
  1) Defining into the constructor.

      this.onFormSubmit = this.onFormSubmit.bind(this);

  2) Defining the onFormSubmit function as arrow function like below :

      onFormSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.term); // Will not crash for this ref error.
      }

  3) Calling from from using arrow function rather than normal call like below:

      <form onSubmit={(event) => this.onFormSubmit(event)} >
      ...
      </form>

## Axios Call - Handling response
  1) using "then" as below which will return the promise.

        axios.get('https://....',{
          params: {
            query: term
          },
          headers: {
            Authorization: 'Client-ID xyz'
          }
        }).then((response) => {
          console.log(response);
        });

    2) Using Async Await to handle response

        async onSearchSubmit(term) {
          const response = await axios.get('https:....',{
            params: {
              query: term
            },
            headers: {
              Authorization: 'Client-ID xyz'
            }
          });

          console.log(response);
        }

## React Ref - Used for setting client Image height that make the grid looks consistent.
  React Ref is mainly used to interact with the DOM elements inside react components.
  Example -
    - Define in constructor

      this.imageRef = React.createRef();

    - Add it to img element

        <img
          ref={this.imageRef}
          alt={description}
          src={urls.regular}
        />
    - Fetch the client height when the image has been loaded in componentDidMount and set it   to state for providing heights in terms of spans

        componentDidMount(){
          this.imageRef.current.addEventListener('load',this.setSpans);
        }

        setSpans = () => {
          const height = this.imageRef.current.clientHeight;
          const spans = Math.ceil(height/10);
          this.setState({spans});
        }

    - Once the span value is set to state, provide inline style to the container div of the image.

      <div style={{gridRowEnd:`span ${this.state.spans}`}}>
        <img
          ref={this.imageRef}
          ...
        />
      </div>
