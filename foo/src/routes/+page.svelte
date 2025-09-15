<script>
    let { data } = $props();
    const members = data.members;
    import { Logo } from '$lib';   
</script>

<Logo></Logo>

<section class="outlay">
    <article class="mycard-front mycard-style">
        <div>
           <img src="{ members?.avatar}" alt="kyan gijtenbeek">
        </div>    
        <h1>{ members?.name }</h1>
        <a href="{ members?.website }">Portfolio</a>
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
    }

    .mycard-style {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        position: sticky;
        transform-style: preserve-3d;
        top: 5em;
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

@supports (animation-timeline: scroll(block nearest)) {

    .mycard-front {
        animation-name: rotateAnimation;
    }


    .mycard-back {
        animation-name: rotateBackAnimation;
    }

    .mycard-style {
        animation-duration: 1ms; /* Firefox requires this to apply the animation */
        animation-direction: alternate;
        animation-timeline: scroll(block nearest);
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

    @keyframes rotateBackAnimation {
        0% {
            transform: rotateX(0deg);
            opacity: 0%;
        }

        80% {
            opacity: 100%;
        }
        100% {
            transform: rotateY(360deg);
        }
    }

    @keyframes rotateAnimation {
        0% {
            transform: rotateX(0deg);
            opacity: 100%;
        }

        80% {
            opacity: 0%;
        }

        100% {
            transform: rotateY(360deg);
            opacity: 0%;

        }
    }
</style>

