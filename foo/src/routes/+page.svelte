<script>
    let { data } = $props();
    const members = data.members;
</script>


<section class="outlay">
    <article class="mycard-front mycard-style">
        <div class="front-wrapper">
            <div class="img-wrapper">
              <img src="{ members?.avatar}" alt="kyan gijtenbeek">
            </div>    
            <h1>{ members?.name }</h1>
            <a href="{ members?.website }">Portfolio</a>
        </div>
    </article>

    <article class="mycard-back mycard-style">
        <p>{ members?.bio}</p>
    </article>
</section>


<style>

@font-face {
    font-family: 'CustomFont';
    src: url('src/lib/assets/CorpoFont.otf') format('opentype');
}
    .outlay {
        display: flex;
        align-items: center;
        /* justify-content: center; */
        flex-direction: column;
        font-family: 'CustomFont', sans-serif;
        height: 200vh;
        gap: 10em;
        padding-top: 2em;
    }

    .mycard-style {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 18.75em;
        height: 28em;
        border: 7.5px solid #7376B4;
        border-radius: 120px 60px 120px 60px;
        background-color: #1E2152;


        @media (min-width: 834px) {
            width: 28.125em;
            height: 42em;
            border: 11.25px solid #7376B4;
            border-radius: 180px 90px 180px 90px;
        }
    }

    .front-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

@supports (animation-timeline: scroll(block nearest)) {

    .outlay {
        display: grid;
        place-items: start center;
        position: relative;
        perspective: 1000px;
        height: 200vh;
    }

    .mycard-style {
        grid-area: 1/1;
        position: sticky;
        top: 20%;
        transform-style: preserve-3d;
        transform-origin: center;
        animation-name: flip;
        animation-duration: 1ms; 
        animation-timeline: scroll(block nearest);

        @media (min-width: 834px) {
            top: 8%;
        }

        @media (min-width: 1024px) {
            top: 6%;
        }
    }

     .front-wrapper {
        transform: rotateY(180deg);
    }

    .mycard-back { 
        backface-visibility: hidden;
        transform: rotateY(180deg);
    } 

    @keyframes flip {
        from { transform: rotateY(180deg); }
        to   { transform: rotateY(0deg); }
     }
}


    img {
        width: 9.531em;
        height: 9.531em;
        border-radius: 38px 76px 38px 76px;

        @media (min-width: 834px) {
            width: 14.25em;
            height: 14.25em;
            border-radius: 55.5px 120px 55.5px 120px;
        }
    }

    .img-wrapper {
        display: flex;
        align-items: flex-end;
        justify-content: center;
        width: 9.531em; 
        height: 14.35em;
        border-radius: 38px 76px 38px 76px;
        background-color: #7376B4;
        margin-top: 48px;

        @media (min-width: 834px) {
            width: 14.25em;
            height: 21.524em;
            border-radius: 55.5px 120px 55.5px 120px;
        }
    }

    h1 {
        font-size: 24px;
        letter-spacing: 2px;
        color: white;

        @media (min-width: 834px) {
            font-size: 36px;
        }
    }

    a {
        font-size: 20px;
        text-decoration: none;
        color: white;
        transition: scale 0.2s ease-out;

        @media (min-width: 834px) {
            font-size: 30px;
        }
    }

    p {
        font-size: 20px;
        color: white;

        @media (min-width: 834px) {
            font-size: 30px;
        }
    }

    /* Animations  */

    a:hover {
        scale: 1.1;
    }

</style>

