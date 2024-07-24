<script>
    import "../app.css";
    import "../layouts/Header.svelte"
    import Header from "../layouts/Header.svelte";
    import Footer from "../layouts/Footer.svelte";
  </script>
  

<div class="bg-bgPrimary h-full">
  <Header />
  <slot />
  <Footer />
</div>
