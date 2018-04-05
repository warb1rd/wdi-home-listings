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

  compare(key) {
    return function (a, b) {
      if (a[key] < b[key]){ 
        return -1                               
      }
      if (a[key] > b[key]){
        return 1                                
      }
      return 0
    }
  }

  handleClick(key) {
    let arrayCopy = [...this.state.listings]
    arrayCopy.sort(this.compare(key))
    // console.log(arrayCopy.sort())
    this.setState({
      listings: arrayCopy,
      sortBy: this.state.listings.key,
      sortAscending: !this.state.sortAscending
    })
  }

  render() {
    const { headings, listings } = this.state
    
    return (
      <div className="App">
        <Container>
          <h1>Home Listings</h1>
          <Table striped bordered>
            <thead>
            <tr>
            {headings.map((h, i) => {
                return(
                  <th onClick={()=>this.handleClick(h.field)}key={i}>{h.field}<span>&darr;</span></th>
                )
            })}
            </tr>
            </thead>

            {listings.map((l) => {
              return (
                <tbody key={l._id}>
                <tr>
                  <td>{l._id}</td>
                  <td>{l.address}</td>
                  <td>{l.city}</td>
                  <td>{l.homeType}</td>
                  <td>{l.bedrooms}</td>
                  <td>{l.bathrooms}</td>
                  <td>{l.floorType}</td>
                  <td>{l.rent}</td>
                </tr>
              </tbody>
              )
            })}
           
          </Table>
        </Container>
      </div>
    );
  }
}

export default App;
