<script>import { sdk, userStore } from "./stores";
export let auth = $sdk?.auth;
const user = userStore(auth);
</script>

{#if $user}
  <slot user={$user} />
{:else if $user === undefined}
  <slot name="loading" />
{:else}
  <slot name="signedOut" />
{/if}
