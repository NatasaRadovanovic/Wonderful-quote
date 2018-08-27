<template>
  <div>
    <div class="quote-box">
        <button  @click="deleteQuote(quote)">
            <h3>"{{ quote.quote }}"</h3>
            <span>- {{ quote.author }}</span>
        </button>    
    </div>    
  </div>
</template>

<script>

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
    }

    .quote-box h3{
        font-family: 'Playfair Display', serif;
        font-weight:bold;
    }

    .quote-box span{
        float: right;
        font-size: 20px;
        font-family: 'Playfair Display', serif;
    }

    .quote-box button{
        width:100%;
    }
</style>
