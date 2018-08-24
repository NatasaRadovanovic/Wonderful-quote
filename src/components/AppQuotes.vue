<template>
  <div class="wrapp">
    <quotes-form/>
    <quotes-list/>
 </div>
</template>

<script>

import QuotesList from '../components/QuotesList'
import QuotesForm from '../components/QuotesForm'

export default {
  name: 'AppQuotes',
  components:{
      QuotesList,
      QuotesForm
  }
}
</script>

<style>
.wrapp{
    width:90%;
    margin:0 auto;
    display: block;
}
</style>
