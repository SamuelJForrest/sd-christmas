<script>
    export let inputHandler; // Exporting the function as a prop

    const handleInput = (e) => {
    // Call the inputHandler function passed as a prop
    if (inputHandler) {
        inputHandler(e);
    }
    };
</script>

<div class="col-lg-3">
    <div class="sidebar">
        <h2 class="sidebar-title">Options</h2>
        <form>
            <div class="accordion">
                <button type="button" class="accordion-trigger">Hair colour</button>
                <div class="accordion-content">
                    <fieldset class="field-wrap">
                        <div class="label-wrap">
                            <legend>Hair colour</legend>
                        </div>
                        <label class="input-wrap">
                            <input type="checkbox" name="brownHair" id="brownHair" on:change={handleInput}>
                            Brown
                        </label>
                        <label class="input-wrap">
                            <input type="checkbox" name="blondeHair" id="blondeHair" on:change={handleInput}>
                            Blonde
                        </label>
                        <label class="input-wrap">
                            <input type="checkbox" name="gingerHair" id="gingerHair" on:change={handleInput}>
                            Ginger
                        </label>
                        <label class="input-wrap">
                            <input type="checkbox" name="otherHair" id="otherHair" on:change={handleInput}>
                            Other
                        </label>  
                    </fieldset>
                </div>
            </div>
        </form>
    </div>
</div><!-- col -->