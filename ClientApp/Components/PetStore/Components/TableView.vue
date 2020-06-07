<template>
    <div>
        <hr />
        <table class="table">
            <thead>
                <tr>
                    <th></th>
                    <th scope="col">Breed</th>
                    <th scope="col">Age</th>
                    <th scope="col">Name</th>
                    <th scope="col">Colour</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(dog, index) in dogs" :key="dog">
                    <td>{{index+1}}</td>
                    <td>{{dog.breed}}</td>
                    <td>{{dog.age}}</td>
                    <td>{{dog.name}}</td>
                    <td>{{dog.colour}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>


<script>
    export default {
        name: "TableView",

        props: [
            'dogs'
        ]
    }

</script>


<style>
</style>