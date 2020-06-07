<template>
    <div>
        <h3>Dog Collection: {{user}}</h3>
         <table-view :dogs="dogs"></table-view>  
    </div>
</template>


<script>
    import TableView from "./Components/TableView.vue" 
    import { mapGetters } from "vuex";

    export default {
        name: "PetStore",

        components: {
            "table-view": TableView
        },

        computed: {
            ...mapGetters({
                user: "getUser",
                dogs: "getDogs"
            })
        }
    }
</script>

<style>

</style>