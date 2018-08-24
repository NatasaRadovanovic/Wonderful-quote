<template>
  <div class="wrapp">
    <quotes-form 
        :newQuote="newQuote"
        @addQuote="addQuote"/>
    
    <h1>Quotes Added {{ quotes.length }} of {{ maxLengthOfQuotes }}</h1>
        <div class="progress">
            <div class="progress-bar progress-bar-striped"
                 :style="{width: (quotes.length * 100 / maxLengthOfQuotes) + '%' }" 
                  role="progressbar" style="width: 10%" aria-valuenow="10" aria-valuemin="0" 
                  aria-valuemax="100"></div>
            </div><br>
        
    <quotes-list v-for="quote in quotes" :key="quote.id"
                :quote="quote"
                @deleteQuote="deleteQuote"/>
 </div>
</template>

<script>

import { quotesService } from '../services/Quotes'
import QuotesList from '../components/QuotesList'
import QuotesForm from '../components/QuotesForm'


export default {
  name: 'AppQuotes',
  components:{
      QuotesList,
      QuotesForm
  },
  data(){
      return{
          newQuote:{
              quote:'',
              author:''
          },
           quotes: quotesService.list(),
            maxLengthOfQuotes:10
        }
  },

  methods:{
      addQuote(){
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
        },
        deleteQuote(quote){
          quotesService.deleteQuote(quote);
        }
    }
}
</script>

<style>
.wrapp{
    width:90%;
    margin:0 auto;
    display: block;
}
 h1{
        text-align: center;
        margin-bottom:40px;
    }

    .progress{
        height:35px;
    }
</style>
