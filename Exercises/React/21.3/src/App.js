import React, { Component } from "react";
import axios from "axios";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countries: [],
      filteredCountries: [],
      inputValue: "",
      show: false,
      abortController: new AbortController(),
    };
  }

  async fetchApi() {
    let signal = this.state.abortController.signal;
    const { data } = await axios.get("https://restcountries.com/v2/all", {
      signal: signal,
    });
    this.setState({ countries: data, filteredCountries: data });
    console.log(this.state);
  }

  onChange(event) {
    const inputData = event.target.value;
    console.log(inputData);
    this.setState({ inputValue: inputData });
    const filteredData = this.state.countries.filter((country) =>
      country.name.toLowerCase().includes(inputData.toLowerCase())
    );
    this.setState({ filteredCountries: filteredData });
    console.log(filteredData);
  }

  componentDidMount() {
    console.log("inside mount");
    this.fetchApi();
  }

  onClick() {
    this.setState((prevState) => {
      return { show: !prevState.show };
    });
  }

  componentWillUnmount() {
    console.log("inside unmount");
    this.state.abortController.abort();
  }

  render() {
    return (
      <div>
        <button onClick={()=>this.onClick()}>toggle</button>
        <input onChange={(e) => this.onChange(e)} type="text" />
        {this.state.show &&
          this.state.filteredCountries.map((country) => {
            return (
              <ul>
                <li>{country.name}</li>
              </ul>
            );
          })}
      </div>
    );
  }
}

// import axios from "axios";
// import { Component } from "react";

// export class Countries extends Component {
//   state = {
//     data: null,
//     error: null,
//     inputValue: "",
//     filterdData: null,
//     isLoading: false,
//     show: false,
//     abortController: new AbortController(),
//   };
//   componentDidMount() {
//     console.log("DidMount");
//     const fetchData = async () => {
//       this.setState({ isLoading: true });
//       try {
//         let signal = this.state.abortController.signal;
//         const { data } = await axios.get("https://restcountries.com/v2/all", {
//           signal: signal,
//         });
//         this.setState({ data: data });
//         this.setState({ filterdData: data });
//       } catch (err) {
//         this.setState({ error: err });
//       }
//       this.setState({ isLoading: false });
//     };
//     console.log(this.state.data);
//     fetchData();
//   }
//   componentDidUpdate(prevProps, prevState) {
//     setTimeout(() => {
//       if (prevState.inputValue !== this.state.inputValue) {
//         this.setState({
//           filterdData: this.state.filterdData.filter((country) =>
//             country.name
//               .toLowerCase()
//               .includes(this.state.inputValue.toLowerCase())
//           ),
//         });
//       } else if (!this.state.inputValue) {
//         return this.setState({ filterdData: this.state.data });
//       }
//     }, 500);
//   }
//   componentWillUnmount() {
//     console.log("WillUnmount");
//     this.state.abortController.abort();
//   }
//   render() {
//     return (
//       <div>
//         Countries
//         <input
//           value={this.state.inputValue}
//           type="text"
//           onChange={({ target: { value } }) =>
//             this.setState({ inputValue: value })
//           }
//         />
//         <button onClick={() => this.setState({ inputValue: "" })}>
//           Empty Input
//         </button>
//         <button
//           onClick={() =>
//             this.setState((prev) => {
//               return { show: !prev.show };
//             })
//           }
//         >
//           show
//         </button>
//         {this.state.show && (
//           <ul>
//             {this.state.data &&
//               this.state.filterdData.map(({ name }) => {
//                 return <li key={name}>{name}</li>;
//               })}
//           </ul>
//         )}
//         {this.state.isLoading && <h2>Spinner</h2>}
//       </div>
//     );
//   }
// }

// export default Countries;
