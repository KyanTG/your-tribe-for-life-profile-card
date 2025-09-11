<script>
    let { data } = $props();

    const members = data.members   

</script>

<section class="mycard">
    <h1>{ members?.name }</h1>
    <img src="{ members?.avatar}" alt="kyan gijtenbeek">
    <p>{ members?.bio }</p>
    <a href="{ members?.website }">dwd</a>
</section>


<style>
    .mycard {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        /* width: 60em;
        height: 30em;
        border-radius: 20px 0px 20px 0px;
        background-color: aqua; */
    }
</style>

