<script>
    import "../app.css";
    import "../layouts/Header.svelte"
    import Header from "../layouts/Header.svelte";
    import Footer from "../layouts/Footer.svelte";
    import '@fontsource/black-ops-one';
    import "@fontsource/josefin-sans";

  </script>
  

<div class="bg-bgPrimary h-full">
  <Header />
  <slot />
  <Footer />
</div>
