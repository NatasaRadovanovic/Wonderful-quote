<template>
  <div>
    <div class="quote-box">
        <h3>"{{ quote.quote }}"</h3>
        <span>- {{ quote.author }}</span>
        <button @click="deleteQuote(quote)" class="btn btn-danger btn-sm">delete</button>
    </div>    
  </div>
</template>

<script>

import { quotesService } from '../services/Quotes'

export default {
  name: 'QuoteList',
 props:{
     quote:Object
 },
  methods:{
      deleteQuote(){
          this.$emit('deleteQuote', this.quote)
        }
    }
}
</script>

<style scoped>
    .quote-box{
         border: 1px solid #d3d3d3;
        padding: 20px;
        margin: 20px;
        box-shadow: 1px 1px 5px #232323;
        background-color: #fff;
        float: left;
        width: 20%;
        height:30%;
    }

    .quote-box h3{
        font-family: 'Playfair Display', serif;
        font-weight:bold;
        height:150px;
    }

    .quote-box span{
        float: right;
        font-size: 20px;
        font-family: 'Playfair Display', serif;
    }
</style>
