import React from 'react';
import ReactDOM from 'react-dom';
import PivotTableUI from 'react-pivottable/PivotTableUI';
import 'react-pivottable/pivottable.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch('http://localhost:8000/api/ventas')
      .then(response => response.json())
      .then(data => {
        this.setState({ data: data });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  render() {
    return (
      <PivotTableUI
        data={this.state.data}
        onChange={s => this.setState(s)}
        {...this.state}
      />
    );
  }
}


ReactDOM.render(<App />, document.body);






















