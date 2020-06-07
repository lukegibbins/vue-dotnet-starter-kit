import Vue from "vue"
import store from "../Stores/PetStore"

import PetStore from "../Components/PetStore/PetStore.vue"

new Vue({
    el: "#app",
    store,
    render: h => h(PetStore)
})