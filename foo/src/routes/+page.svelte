<script>
    let { data } = $props();

    const members = data.members   

</script>

<section class="outlay">
    <section class="mycard">
        <div>
           <img src="{ members?.avatar}" alt="kyan gijtenbeek">
        </div>    
        <h1>{ members?.name }</h1>
        <p>{ members?.bio }</p>
        <a href="{ members?.website }">dwd</a>
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
        justify-content: center;
        height: 100vh;
        font-family: 'CustomFont', sans-serif;
    }

    .mycard {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 18.75em;
        height: 28em;
        border: 7.5px solid #7376B4;
        border-radius:  120px 60px 120px 60px;
        background-color: #1E2152;
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
    }

    h1 {
        font-size: 24px;
        letter-spacing: 2px;
        color: white;
    }

    p {
        text-align: center;
        color: white;
        font-size: 16px;
    }

    a {
        text-decoration: none;
        color: white;
        border: 2px solid white;
        border-radius: 15px 7.5px 15px 7.5px;
        padding: 0.3rem;
    }
</style>

