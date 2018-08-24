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
  data(){
      return{
          newQuote:{
              quote:'',
              author:''
          }
      }
  },

  methods:{
      onSubmit(){
           if(quotesService.list().length >= 10){
              alert("Maximum number reached, remove one to add another");
              return;
          } 
          
          if(this.newQuote.quote === '' || this.newQuote.author === '' ){
              alert("Quote & Author can't be empty");
              return;
          }

            quotesService.addNewQuote(this.newQuote);
            this.newQuote = {
                quote:'',
              author:''
            };
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
