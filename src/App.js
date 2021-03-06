import React, { Component } from 'react';
import { Container, Table } from 'reactstrap'
import './App.css';

// look at homeData.json to see how the data is structured
import homeData from './homeData.json'
console.log(homeData)

class App extends Component {

  state = {
    headings: homeData.headings,
    listings: homeData.listings,
    sortBy: null,
    sortAscending: true
  }

  render() {
    return (
      <div className="App">
        <Container>
          <h1>Home Listings</h1>
          <Table striped bordered>
            {/* table headers */}
            <thead>
              <tr>
                <th>Heading 1 <span>&darr;</span></th>
                <th>Heading 2 <span>&uarr;</span></th>
                <th>Heading 3</th>
                <th>Heading 4</th>
                <th>Heading 5</th>
              </tr>
            </thead>

            {/* table rows */}
            <tbody>
              <tr>
                <td>Lorem ipsum</td>
                <td>2</td>
                <td>Dolor sit amet</td>
                <td>21</td>
                <td>342</td>
              </tr>

              <tr>
                <td>Lorem ipsum</td>
                <td>2</td>
                <td>Dolor sit amet</td>
                <td>21</td>
                <td>342</td>
              </tr>

              <tr>
                <td>Lorem ipsum</td>
                <td>2</td>
                <td>Dolor sit amet</td>
                <td>21</td>
                <td>342</td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}

export default App;
