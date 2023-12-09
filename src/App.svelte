<script>
	import ImageGrid from "./lib/ImageGrid.svelte";
  import Sidebar from "./lib/Sidebar.svelte";
  import data from './data/data.json';
  const {staff} = data;

  const inputHandler = (e) => {
    console.log(e.target);
  }
</script>


<header>
  <div class="container">
    <div class="row">
      <div class="col-lg-6 col-xl-4 mx-lg-auto">
        <h1>Who stole Spindogs' Christmas?</h1>
      </div>
    </div>
  </div>
</header>
<main>
  <div class="game">
    <div class="container">
      <div class="row">
        <Sidebar inputHandler={inputHandler} />
        <ImageGrid staff={staff} />
      </div>
    </div><!-- row -->
  </div><!-- container -->
</main>

<style>
  .game {
    padding: 8rem 0;
  }
</style>
