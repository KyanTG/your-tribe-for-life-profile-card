export async function load({ url }) {

    const membersResponse = await fetch('https://fdnd.directus.app/items/person?filter[squads][squad_id][cohort][_eq]=2526');

    const membersData = await membersResponse.json();

    return {members: membersData.data};

}