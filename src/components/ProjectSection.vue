<template>
  <section> 
    <h1> Projects </h1>
    <p> A few things I've built while learning</p>
    <ul>  
      <li
        v-for="project in Projects"
        :key="project.id"

        >
        <div class="project-item">{{ project.name }}</div>
        <div class="project-list">{{ project.desc }}</div>
        <div class="project-item">{{ project.tag}}</div>
      </li>
      
    </ul>
  </section>
</template>

<script setup>
const Projects=[
  { id: 1,
    name: "lorem",
    desc: "desc",
    tag: "vue 3"
  },
  { id: 2,
    name: "lorem",
    desc: "desc",
    tag: "vue 3"
  },
  { id: 3,
    name: "lorem",
    desc: "desc",
    tag: "vue 3"
  }
]
</script>

<style> 
.project-list{
  list-style: none;
  display: flex;
  gap: 1rem; /*find more info on rem */
  max-width: 560px;

}
.project-item{
  background-color: burlywood;
  border: 1px solid;
  border-radius: 8px;
}

</style>