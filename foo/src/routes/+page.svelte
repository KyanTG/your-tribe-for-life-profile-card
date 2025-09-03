<script>
    let { data } = $props();

    const members = data.members   

</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

{#each members as member}
    <a href="/{member.id}">{member.name}</a><br>
    <img src="{member.avatar}"><br>
{/each}

<style>

    img {
        border-radius: 50px;
        width: 200px;
        height: 200px;
    }

</style>

