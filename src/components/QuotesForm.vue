<template>
    <div>
        <form @submit.prevent="onSubmit" class="wrappForm">
            <div class="form-group">
                <label for="quote">Quote:</label>
                <input v-model="newQuote.quote" type="text" class="form-control" id="quote" aria-describedby="quote">
            </div>
            <div class="form-group">
                <label for="author">Author:</label>
                <input v-model="newQuote.author" type="text" class="form-control" id="author" aria-describedby="author">
            </div>
                <button type="submit" class="btn btn-secondary btn-sm">Add Quote</button>
        </form><br>
        <hr></hr>
    </div>
</template>

<script>

import { quotesService } from '../services/Quotes'

export default {
  name: 'QuoteForm',
  props:{
      newQuote:Object
 },

  methods:{
      onSubmit(){
          this.$emit('addQuote')
    }
  }
}
</script>

<style scoped>
.wrappForm{
    width: 25%;
    padding: 20px;
    margin: 0 auto;
}

</style>
