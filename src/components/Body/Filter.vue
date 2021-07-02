<template>
  <div>
    <div class="hideFil text-right">
      <a class="btn " data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false"
        aria-controls="collapseExample">
        <i class="fa fa-filter" aria-hidden="true"></i> Filters
      </a>
    </div>
    <div class="collapse" id="collapseExample">
      <div class="filter mt-3">
        <div>
          <div class="form-group">
            <label for="inputGroupSelect04"><small>Category</small></label>
            <select class="custom-select" id="inputGroupSelect04" aria-label="Example select with button addon">
              <option selected>Choose...</option>
              <option value="Electronics">Electronics</option>
              <option value="Clothing">Clothing</option>
              <option value="Cosmetics">Cosmetics</option>
              <option value="Computing">Computers And Accessories</option>
              <option value="Food">Food Items</option>
            </select>
          </div>
        </div>

        <div>
          <div class="form-group">
            <label for="inputGroupSelect04"><small>Ratings</small></label>
            <select class="custom-select" id="inputGroupSelect04" aria-label="Example select with button addon">
              <option selected>Choose...</option>
              <option value="5">5 Stars</option>
              <option value="4">4 stars & UP</option>
              <option value="3">3 stars & UP</option>
              <option value="2">2 stars & UP</option>
            </select>
          </div>
        </div>
        <div>
                  <div class="form-group">
            <label for="inputGroupSelect04"><small>Brands</small></label>
            <select class="custom-select" id="inputGroupSelect04" aria-label="Example select with button addon">
              <option selected>Choose...</option>
              <option value="Electronics">Electronics</option>
              <option value="Clothing">Clothing</option>
              <option value="Cosmetics">Cosmetics</option>
              <option value="Computing">Computers And Accessories</option>
              <option value="Food">Food Items</option>
            </select>
          </div>
        </div>
                <div>
                  <div class="form-group">
            <label for="inputGroupSelect04"><small>Brands</small></label>
            <select class="custom-select" id="inputGroupSelect04" aria-label="Example select with button addon">
              <option selected>Choose...</option>
              <option value="Electronics">Electronics</option>
              <option value="Clothing">Clothing</option>
              <option value="Cosmetics">Cosmetics</option>
              <option value="Computing">Computers And Accessories</option>
              <option value="Food">Food Items</option>
            </select>
          </div>
        </div>
        <div>
          <div class="form-group">
            <div class="form-row">
              <div class="col">
                <div class="form-group">
                  <label for="minPrice"><small>Min Price</small></label>
                  <input type="number" class="form-control" id="minPrice" placeholder="$ Min Price">
                </div>
              </div>
              <div class="col">
                  <div class="form-group">
                  <label for="maxPrice"><small>Max Price</small></label>
                  <input type="number" class="form-control" id="maxPrice" placeholder="$ Max Price">
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="">
          <label for="maxPrice"><small class="text-white">Apply</small></label>
          <br>
          <button class="btn">Apply</button>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  .filter {
    width: 100%;
    display: flex;
    gap: 1em;
    padding: 0px 50px;
    margin-top: 30px;
  }

  .filter>* {
    width: 100%;
  }


  .hideFil a {
    margin-right: 40px;
    color: rgba(79, 70, 229, 1);
    border: solid 1px rgba(79, 70, 229, 1);
    ;
  }

</style>