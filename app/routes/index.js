import Route from '@ember/routing/route';

const COMMUNITY_CATEGORIES = ['Condo', 'Townhouse', 'Apartment'];

export default class IndexRoute extends Route {
  async model() {
    const response = await fetch('api/rentals.json');
    const { data } = await response.json();

    const mappedData = data.map((model) => {
      const { attributes } = model;
      const type = COMMUNITY_CATEGORIES.includes(attributes.category)
        ? 'Community'
        : 'Standalone';

      return { type, ...attributes };
    });

    return mappedData;
  }
}
