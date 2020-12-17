import React from "react";

export class FetchData extends React.Component {

  _isMounted = false;

  state = {
    loading: true,
    animals: [],
    animal: '',
    breed: '',
    age: ''
  };

  async componentDidMount() {
    // TODO: Figure out how to set this based on user form input
    // Case conversion and space elimination done automatically

    const animal = this.props.obj.animal;
    const breed = this.props.obj.breed;
    const age = this.props.obj.age;

    this._isMounted = true;
    // TODO: Figure out how to set token automatically
    const token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJaRGY4MzdlUjhTZEo5c0g0cVh3Zzl0ekw1ODJrcXNFSW5zeE9wRThFZE5DQk9CR0hQWiIsImp0aSI6ImI5NjA0NGViOTVhYWRjZTM2Y2YxZTNmYWU0MWEyMGFhZTkxZmY3NjJjNjFmZThkMWI0YWQzYjVlYmVlOTQzMGQxZGUzYTI4Nzc3NWQwMjEyIiwiaWF0IjoxNjA4MjEwODgyLCJuYmYiOjE2MDgyMTA4ODIsImV4cCI6MTYwODIxNDQ4Miwic3ViIjoiIiwic2NvcGVzIjpbXX0.QNu3oglyY2nvyT3_AXn1C61JaW-gHdWPfsEWDWh0K0AGCs0HjRCXqS-BT6LPrXQ9qMLidYvkbfsZfV6MKbTDFTvp4pfIX2qfjS93p6Q6P7wvWMx-cjNEgSJMvv55Yx6tllXr1maV2oXvqBD8RDJmZ2qP2faG-WrEar7a0fHnxWyNq_zgH6OCMuhxk23J6AvbB4XHxkxa-jzkEw08JBw3YmJ0xi3JFeHE3H1Ew_5RbS7w3WEBxtadlC8jVCRoV9BWpXnvHJgMKEWvu4k7XW3yT7zO6V8er3ft0MzX8EPeNZYzczstlJRpQFg1K_hoSh4TN3TL4wTxozvK8Xw31B7WkQ'
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      }
    };
    const url = `https://api.petfinder.com/v2/animals?type=${animal}&&breed=${breed}&&age=${age}&&page=1`;
    const response = await fetch(url, requestOptions);
    const data = await response.json();

    // Filter to avoid errors caused by accessing animals without images
    var filtered = [];
    var animal_instance;
    for (animal_instance of data.animals) {
      if (animal_instance.photos[0] && animal_instance.photos[0].medium) {
        filtered.push(animal_instance);
      }
    }
    data.animals = filtered;
    this.setState({ animals: data.animals, loading: false });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {

    if (this.state.loading) { return <div>...Loading...</div>; }
    if (!this.state.animals.length) { return <div>Sorry, we did not get any animal_instance data.</div>; }
    return (

      <div>
        {this.state.animals.map(animal_instance => (
          <div key={animal_instance.id}>
            <div>Name: {animal_instance.name}</div>
            <div>Breed: {animal_instance.breeds.primary}</div>
            <div>Age: {animal_instance.age}</div>
            <div>
              <a href={animal_instance.url}>
                Click to view details!
              </a>
            </div>
            <img src={animal_instance.photos[0].medium} alt='picture of this animal'/>
          </div>
        ))}
      </div>
    );

  }

}
