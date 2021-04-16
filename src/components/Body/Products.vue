<template>
    <div class="items">
      <ul class="row">
        <router-link v-for="item in products" v-bind:key="item._id" :to="{name:'Preview',params:{id :item._id}}" class="col-md-2">
          <div class="item">
            <div class="image-container">
              <img v-bind:src="item.image">
            </div>
                <p><small>{{item.category}}</small></p>
              <p>{{item.name}}</p>
              <h4>GHs {{item.price}}</h4>
          </div>

        </router-link>
      </ul>
    </div>
</template>

<script>
export default {
  props:['products'],
    
      data(){
    return{
      title:'Commerce',
    }
  },
  methods:{

  }

}
</script>

<style scoped>
    .items{
      margin-top: 10px;
    }

    ul{
      list-style: none;
      margin: 0px;
    }

    .item{
      padding: 20px;
      border-radius: 5px;
      box-shadow: 0px 20px 40px rgba(0,0,0,0.05);
    }
    small{
      color: #7e7e7e;
    }
    .item h4,p{
      margin: 0;
      white-space: nowrap;
      overflow:hidden;
      text-overflow: ellipsis;
    }
    .item p{
      font-size: 18px;
    }
     .item h4{
       font-size: 18px;
       font-weight: bold;
     }
     .image-container{
        height: 150px;
        width: 80%;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow:hidden
     }
    img{
      display: block;
      width:100%;
      margin: 0 auto;
      margin-bottom: 10px;  

    }


</style>