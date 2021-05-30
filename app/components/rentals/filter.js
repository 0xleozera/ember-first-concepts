import Component from '@glimmer/component';

export default class RentalsFilterComponent extends Component {
  get results() {
    const { rentals, query } = this.args;

    if (!query) return rentals;

    const filteredRentals = rentals.filter((rental) =>
      rental.title.includes(query)
    );

    return filteredRentals;
  }
}
