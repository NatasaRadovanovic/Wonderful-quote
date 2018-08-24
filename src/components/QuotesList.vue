<template>
  <div>
    <h1>Quotes Added {{ quotes.length }} of {{ maxLengthOfQuotes }}</h1>
        <div class="progress">
            <div class="progress-bar progress-bar-striped"
                 :style="{width: (quotes.length * 100 / maxLengthOfQuotes) + '%' }" 
                  role="progressbar" style="width: 10%" aria-valuenow="10" aria-valuemin="0" 
                  aria-valuemax="100"></div>
            </div><br>
    <hr></hr>
    <div v-for="quote in quotes" :key="quote.id" class="quote-box">
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

  data(){
      return{
          quotes: quotesService.list(),
          maxLengthOfQuotes:10
      }
  },
  methods:{
      deleteQuote(quote){
           quotesService.deleteQuote(quote);
      }
   }
}
</script>

<style scoped>
    h1{
        text-align: center;
        margin-bottom:40px;
    }

    .progress{
        height:35px;
    }

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
