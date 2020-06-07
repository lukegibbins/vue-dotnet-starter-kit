import Vue from "vue"
import PetStore from "../Components/PetStore/PetStore.vue"
import Store from "../Stores/PetStore"

new Vue({
    el: "#app",
    Store,
    render: p => p(PetStore)
})