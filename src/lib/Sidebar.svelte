<script>
    export let inputHandler; // Exporting the function as a prop
    const accordionStates = [false, false, false];

    const handleInput = (e) => {
        // Call the inputHandler function passed as a prop
        if (inputHandler) {
            inputHandler(e);
        }
    };

    const toggleAccordion = (index) => {
        accordionStates[index] = !accordionStates[index];
    };
</script>

<div class="col-lg-3 order-last order-lg-first mt-4 mt-lg-0">
    <div class="sidebar">
        <h2 class="sidebar-title">Options</h2>
        <form>
            <div class={`accordion ${accordionStates[0] ? '__active' : ''}`}>
                <button type="button" class="accordion-trigger" on:click={() => toggleAccordion(0)}>Hair colour</button>
                <div class="accordion-content">
                    <fieldset class="field-wrap">
                        <div class="label-wrap">
                            <legend>Hair colour</legend>
                        </div>
                        <label class="input-wrap">
                            Brown
                            <input type="checkbox" name="brownHair" id="brownHair" on:change={handleInput}>
                        </label>
                        <label class="input-wrap">
                            Blonde
                            <input type="checkbox" name="blondeHair" id="blondeHair" on:change={handleInput}>
                        </label>
                        <label class="input-wrap">
                            Ginger
                            <input type="checkbox" name="gingerHair" id="gingerHair" on:change={handleInput}>
                        </label>
                        <label class="input-wrap">
                            Other
                            <input type="checkbox" name="otherHair" id="otherHair" on:change={handleInput}>
                        </label>  
                    </fieldset>
                </div>
            </div>
        </form>
    </div>
</div><!-- col -->

<style>
    .sidebar-title {
        padding: 1.8rem;
        text-align: center;
        background: var(--color-red-100);
        border-radius: .8rem .8rem 0 0;
        font-size: 2rem;
        color: var(--color-white);
        font-weight: 700;
    }

    .accordion-trigger {
        padding: 1.8rem 2.4rem;
        background: var(--color-red-80);
        width: 100%;
        border: none;
        text-align: left;
        color: var(--color-white);
        font-size: 2rem;
        border-bottom: 1px solid var(--color-red-80);
        transition: background 0.3s border 0.3s;
    }

    .accordion-content {
        background: var(--color-red-100);
        padding: 0 2.4rem;
        overflow: hidden;
        max-height: 0;
    }

    .accordion-content > .field-wrap {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }

    .accordion-content .label-wrap legend,
    .accordion-content .label-wrap label {
        position: absolute;
        width: 1px;
        height: 1px;
        margin: -1px;
        padding: 0;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        border: 0;
        font-size: 0;
    }

    .accordion-content .input-wrap {
        cursor: pointer;
        color: var(--color-white);
        font-weight: 500;
        padding: 1.2rem 0;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 2.4rem;
        flex-wrap: wrap;
    }

    .accordion-content .input-wrap + .input-wrap {
        border-top: 1px solid rgba(255, 255, 255, 0.25);
    }

    .accordion-content .input-wrap:first-of-type {
        margin-top: 1.2rem;
    }

    .accordion-content .input-wrap:last-of-type {
        margin-bottom: 1.2rem;
    }

    .accordion.__active .accordion-trigger {
        background: var(--color-red-100);
        border-color: var(--color-red-120);
    }

    .accordion.__active .accordion-content {
        overflow: visible;
        max-height: none;
    }
</style>