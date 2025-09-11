export async function load({ url }) {

    // const id = 175
    // const membersResponse = await fetch(`https://fdnd.directus.app/items/person?filter[squads][squad_id][cohort][_eq]=2526${id}`);


    const membersResponse = await fetch(`https://fdnd.directus.app/items/person?filter[id]=175`);
    const membersData = await membersResponse.json();

    return {members: membersData.data[0] };

}   