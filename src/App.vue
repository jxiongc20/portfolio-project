<template> 
  <div>
    <main>
      <HomeSection/>
      <ProjectSection/>
      <AboutSection/>
      
    </main>
  </div>
  
</template>

<script>  
  import HomeSection from './components/HomeSection.vue'
  import ProjectSection from './components/ProjectSection.vue'
  import AboutSection from './components/AboutSection.vue'


export default {
  name: "App",
  components: {
    HomeSection,
    ProjectSection,
    AboutSection
  }
}
</script>

<style> 
</style>