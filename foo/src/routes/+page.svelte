<script>
    let { data } = $props();

    const members = data.members   

</script>

<section class="outlay">
    
    <!-- <h2>scroll!</h2> -->

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
        justify-content: center;
        flex-direction: column;
        font-family: 'CustomFont', sans-serif;
        height: 200vh;
    }

    .mycard-style {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: relative;
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

    /* @supports (animation-timeline: scroll) { */

.mycard-front {
    animation-name: rotateAnimation;
    animation-duration: 1ms; /* Firefox requires this to apply the animation */
    animation-direction: alternate;
    animation-timeline: scroll(block nearest);
}

@keyframes rotateAnimation {
    0% {
        transform: rotate(0deg);
        opacity: 100%;
    }

    80% {
        opacity: 0%;
    }

    100% {
        transform: rotate(360deg);
        opacity: 0%;

    }
}

.mycard-back {

    animation-name: rotateBackAnimation;
    animation-duration: 1ms; /* Firefox requires this to apply the animation */
    animation-direction: alternate;
    animation-timeline: scroll(block nearest);
    margin-top: 200px ;
    position: absolute;

}

@keyframes rotateBackAnimation {
    0% {
        transform: rotate(0deg);
        opacity: 0%;
    }

    80% {
        opacity: 100%;
    }
    100% {
        transform: rotate(360deg);
    }
}


    img {
        width: 9.531em;
        height: 9.531em;
        border-radius: 76px 38px 76px 38px;

        @media (min-width: 834px) {
            width: 14.25em;
            height: 14.25em;
            border-radius: 120px 55.5px 120px 55.5px;
        }
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

        @media (min-width: 834px) {
            width: 14.25em;
            height: 21.524em;
            border-radius: 120px 55.5px 120px 55.5px;
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
        /* border: 2px solid white;
        border-radius: 25px 12.5px 25px 12.5px; */
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

    a:hover {
        scale: 1.1;
    }
</style>

