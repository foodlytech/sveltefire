import { writable } from 'svelte/store';
import { doc, collection, collectionGroup, onSnapshot } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
/**
 * @param  {Firestore} firestore firebase firestore instance
 * @param  {string|DocumentReference} ref document path or reference
 * @param  {any} startWith optional default data
 * @returns a store with realtime updates on document data
 */
export function docStore(firestore, ref, startWith) {
    let unsubscribe;
    // Fallback for SSR
    if (!firestore || !globalThis.window) {
        console.warn('Firestore is not initialized or not in browser');
        const { subscribe } = writable(startWith);
        return {
            subscribe,
            ref: null,
            id: '',
        };
    }
    const docRef = typeof ref === 'string' ? doc(firestore, ref) : ref;
    const { subscribe } = writable(startWith, (set) => {
        unsubscribe = onSnapshot(docRef, (snapshot) => {
            set(snapshot.data() ?? null);
        });
        return () => unsubscribe();
    });
    return {
        subscribe,
        ref: docRef,
        id: docRef.id,
    };
}
/**
 * @param  {Firestore} firestore firebase firestore instance
 * @param  {string|Query} ref collectionGroup ID, or a query
 * @param  {[]} startWith optional default data
 * @returns a store with realtime updates on collection group data
 */
export function collectionGroupStore(firestore, ref, startWith = []) {
    let unsubscribe;
    // Fallback for SSR
    if (!firestore || !globalThis.window) {
        console.warn('Firestore is not initialized or not in browser');
        const { subscribe } = writable(startWith);
        return {
            subscribe,
            ref: null,
        };
    }
    const colRef = typeof ref === 'string' ? collectionGroup(firestore, ref) : ref;
    const { subscribe } = writable(startWith, (set) => {
        unsubscribe = onSnapshot(colRef, (snapshot) => {
            const data = snapshot.docs.map((s) => {
                return { id: s.id, ref: s.ref, ...s.data() };
            });
            set(data);
        });
        return () => unsubscribe();
    });
    return {
        subscribe,
        ref: colRef,
    };
}
/**
 * @param  {Firestore} firestore firebase firestore instance
 * @param  {string|Query|CollectionReference} ref collection path, reference, or query
 * @param  {[]} startWith optional default data
 * @returns a store with realtime updates on collection data
 */
export function collectionStore(firestore, ref, startWith = []) {
    let unsubscribe;
    // Fallback for SSR
    if (!firestore || !globalThis.window) {
        console.warn('Firestore is not initialized or not in browser');
        const { subscribe } = writable(startWith);
        return {
            subscribe,
            ref: null,
        };
    }
    const colRef = typeof ref === 'string' ? collection(firestore, ref) : ref;
    const { subscribe } = writable(startWith, (set) => {
        unsubscribe = onSnapshot(colRef, (snapshot) => {
            const data = snapshot.docs.map((s) => {
                return { id: s.id, ref: s.ref, ...s.data() };
            });
            set(data);
        });
        return () => unsubscribe();
    });
    return {
        subscribe,
        ref: colRef,
    };
}
/**
 * @param  {Auth} auth firebase auth instance
 * @returns a store with the current firebase user
 */
export function userStore(auth) {
    let unsubscribe;
    if (!auth || !globalThis.window) {
        console.warn('Auth is not initialized or not in browser');
        const { subscribe } = writable(null);
        return {
            subscribe,
        };
    }
    const { subscribe } = writable(auth?.currentUser ?? undefined, (set) => {
        unsubscribe = onAuthStateChanged(auth, (user) => {
            set(user);
        });
        return () => unsubscribe();
    });
    return {
        subscribe,
    };
}
// SDK store for FirebaseApp comopnent
export const sdk = writable();
