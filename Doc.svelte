<script>import { docStore, sdk } from "./stores";
export let ref;
export let firestore = $sdk?.firestore;
export let startWith = void 0;
let store = docStore(firestore, ref, startWith);
</script>

{#if $store !== undefined}
  <slot data={$store} ref={store.ref} />
{:else}
  <slot name="loading" />
{/if}
