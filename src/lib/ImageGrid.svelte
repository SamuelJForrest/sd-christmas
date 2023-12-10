<script>
    export let staff;
</script>

<div class="col-lg-9 ps-lg-5 order-first order-lg-last">
    <div class="image-grid-wrap">
        <div class="image-grid">
            {#each staff as person}
            <div class="person">
                <img src={person.image} alt={person.name} />
                <p>{person.name}</p>
            </div>
            {/each}
        </div>
    </div>
</div><!-- col -->

<style>
    .image-grid-wrap {
        overflow-y: hidden;
    }

    .image-grid {
        display: grid;
        grid-template-columns: repeat(31, minmax(100px, 1fr));
        gap: 2.4rem;
    }

    .person {
        text-align: center;
    }

    .person img {
        aspect-ratio: .75;
        width: 100%;
        object-fit: cover;
        border-radius: .8rem;
    }

    @media screen and (min-width: 992px) {
        .image-grid {
            grid-template-columns: repeat(6, minmax(0, 1fr));
        }
    }
</style>