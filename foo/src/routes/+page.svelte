<script>
    let { data } = $props();

    const members = data.members   

</script>

<section class="outlay">
    
    <h2>scroll!</h2>

    <section class="mycard-front mycard-style">
        <div>
           <img src="{ members?.avatar}" alt="kyan gijtenbeek">
        </div>    
        <h1>{ members?.name }</h1>
        <a href="{ members?.website }">Portfolio</a>
    </section>

    <section class="mycard-back mycard-style">
        <p>{ members?.bio}</p>
    </section>
</section>


<style>

@font-face {
    font-family: 'CustomFont';
    src: url('src/lib/assets/CorpoFont.otf') format('opentype');
}
    .outlay {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
        height: 200vh;
        font-family: 'CustomFont', sans-serif;
    }

    .mycard-style {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 18.75em;
        height: 28em;
        border: 7.5px solid #7376B4;
        border-radius: 120px 60px 120px 60px;
        background-color: #1E2152;
    }

    .mycard-back {
        display: none;
    }

    img {
        width: 9.531em;
        height: 9.531em;
        border-radius: 76px 38px 76px 38px;
    }

    div {
        display: flex;
        align-items: flex-end;
        justify-content: center;
        width: 9.531em; 
        height: 14.35em;
        border-radius: 76px 38px 76px 38px;
        background-color: #7376B4;
        margin-top: 48px;
    }

    h1 {
        font-size: 24px;
        letter-spacing: 2px;
        color: white;
    }

    a {
        font-size: 20px;
        text-decoration: none;
        color: white;
        /* border: 2px solid white;
        border-radius: 25px 12.5px 25px 12.5px; */
        padding: 0.5rem;
    }

    p {
        color: white;
    }

    a:hover {
        scale: 1.1;
    }
</style>

