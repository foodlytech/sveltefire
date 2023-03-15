<script>import { sdk } from "./stores";
export let firestore;
export let auth;
sdk.set({ firestore, auth });
</script>

<slot />
