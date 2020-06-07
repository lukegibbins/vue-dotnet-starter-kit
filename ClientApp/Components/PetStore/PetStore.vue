<template>
    <div>
        <h1>Webpack Testing</h1>
        <p>This is purely a test to see if we can get webpack working.</p>
    </div>
</template>


<script>
    export default {
        name: "PetStore",

        computed: {
            dogs() {
                return this.$store.getters.dogs
            }
        }
    }
</script>