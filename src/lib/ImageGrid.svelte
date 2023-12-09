<script>
    export let staff;
</script>

<div class="col-lg-9">
    <div class="image-grid">
        {#each staff as person}
        <div class="person">
            <img src={person.image} alt={person.name} />
            <p>{person.name}</p>
        </div>
        {/each}
    </div>
</div><!-- col -->

<style>
    .image-grid {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        gap: 2.4rem;
    }

    .person {
        /* max-width: 150px; */
    }

    .person img {
        aspect-ratio: 1;
        width: 100%;
        height: calc(100% - 2.4rem);
        object-fit: cover;
    }
</style>