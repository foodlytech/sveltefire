<script>import { collectionStore, sdk } from "./stores";
export let ref;
export let firestore = $sdk?.firestore;
export let startWith = void 0;
let store = collectionStore(firestore, ref, startWith);
</script>

{#if $store !== undefined}
  <slot data={$store} ref={store.ref} count={$store?.length ?? 0} />
{:else}
  <slot name="loading" />
{/if}
