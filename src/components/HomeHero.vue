<template>
  <div class="container">
        <div class="text-content with-image">
            <h1>{{ headline }}</h1>
            <p>Variate makes it super easy for developers to enable components for A/B testing in Vuejs and React applications.</p> <p>Get started in less than 5 minutes:</p>
            <div class="home-actions">
                <pre>npm install variate-vue</pre>
                <span class="m-1"> OR </span>
                <pre>npm install variate-react</pre>
            </div>
            <div>
                <a href="#" @click="trackEvent('custom', 'Read the Docs')" class="button" :class="buttonColor">Read the Docs</a>
            </div>
        </div>
    </div>
</template>

<script>
import { mapVariables } from '@variate/vue';

export default {
    computed: {
        ...mapVariables({
            headline: 'The developer-friendly a/b testing tool',
            buttonColor: 'white'
        }),
    },
    methods: {
        trackEvent(type, name, value) {
            value = value ? value : 0;
            this.$variate.track({
                name: name, 
                type: type, 
                value: value
            });
        }
    }
}

</script>

<style>

.button.green {
    @apply bg-green-400
}
.button.blue {
    @apply bg-blue-400 text-white
}

</style>