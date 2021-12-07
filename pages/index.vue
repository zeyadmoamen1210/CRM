<template>
  <div class="home-page">
    <div class="container">
      <div>
        <div class="home-page__header">
          <h3>Home</h3>
        </div>

        <div class="home-page__tabs">
          <b-tabs pills>
            <b-tab title="Companies" active>
              <div class="d-flex justify-content-end">
                <button @click="$router.push(`/new-company`)" class="home-page__add-new-company">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xmlns:svgjs="http://svgjs.com/svgjs"
                    version="1.1"
                    width="15"
                    height="15"
                    x="0"
                    y="0"
                    viewBox="0 0 426.66667 426.66667"
                    style="enable-background: new 0 0 512 512"
                    xml:space="preserve"
                    class=""
                  >
                    <g>
                      <path
                        xmlns="http://www.w3.org/2000/svg"
                        d="m405.332031 192h-170.664062v-170.667969c0-11.773437-9.558594-21.332031-21.335938-21.332031-11.773437 0-21.332031 9.558594-21.332031 21.332031v170.667969h-170.667969c-11.773437 0-21.332031 9.558594-21.332031 21.332031 0 11.777344 9.558594 21.335938 21.332031 21.335938h170.667969v170.664062c0 11.777344 9.558594 21.335938 21.332031 21.335938 11.777344 0 21.335938-9.558594 21.335938-21.335938v-170.664062h170.664062c11.777344 0 21.335938-9.558594 21.335938-21.335938 0-11.773437-9.558594-21.332031-21.335938-21.332031zm0 0"
                        fill="#FFFFFF"
                        data-original="#000000"
                        class=""
                      />
                    </g>
                  </svg>
                  Add New Company
                </button>
              </div>

              <div class="home-page__companies-note">
                <p>List of Companies available for you.</p>
              </div>


              <div class="row">
                <div class="col-md-4" v-for="i in 30" :key="i">
                    <section @click="$router.push(`/company/${i}`)" class="company-card d-flex flex-wrap">
                      <div class="company-card__flex-item-img">
                        <img class="company-card__icon" src="@/assets/imgs/cib-icon.png" alt="">
                      </div>
                      <div>
                        <h6> Company name </h6>
                        <span class="company-card__date"> 
                          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 13.57 15.689">
                            <g id="noun-date-1076224" transform="translate(-98.651 -80.081)">
                              <path id="Path_9" data-name="Path 9" d="M174.777,81.553h-.551V80.52a.409.409,0,1,0-.816,0v1.033h-5.1V80.52a.409.409,0,1,0-.816,0v1.033h-.551a2.981,2.981,0,0,0-2.857,3.076v8.064a2.981,2.981,0,0,0,2.857,3.076H174.8a2.981,2.981,0,0,0,2.857-3.076V84.629a3,3,0,0,0-2.877-3.076Zm0,13.338h-7.836a2.13,2.13,0,0,1-2.041-2.2V86.607h11.938v6.087a2.16,2.16,0,0,1-2.061,2.2Zm2.041-9.163H164.9v-1.1a2.13,2.13,0,0,1,2.041-2.2h.551v1.033a.409.409,0,1,0,.816,0V82.432h5.1v1.033a.409.409,0,1,0,.816,0V82.432h.551a2.13,2.13,0,0,1,2.041,2.2Z" transform="translate(-65.433 0)" fill="#707070"/>
                              <path id="Path_10" data-name="Path 10" d="M249.448,369.6h-4.992c-.162,0-.3.25-.3.556s.133.556.3.556h4.977c.162,0,.3-.25.3-.556s-.118-.556-.281-.556Z" transform="translate(-141.537 -278.337)" fill="#707070"/>
                              <path id="Path_11" data-name="Path 11" d="M276.637,307.433h6.252a.556.556,0,1,0,0-1.111h-6.252a.556.556,0,1,0,0,1.111Z" transform="translate(-174.327 -217.503)" fill="#707070"/>
                            </g>
                          </svg>
                          Date created : 18/9/2022</span>
                      </div>
                    </section>
                </div>
              </div>

            </b-tab>
            <b-tab title="Current deals"> </b-tab>
          </b-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">

:root {
  --primary: #ffcb05;
  --secondary: #f1f1f1;
}

.home-page {

  &__header {
    margin-bottom: 30px;
    h3 {
      font-weight: bold;
      color: #3d3d3d;
    }
  }

  &__tabs {
    .nav {
      gap: 15px;
    }
    .nav-pills .nav-link.active,
    .nav-pills .show > .nav-link {
      background: var(--primary);
      border-radius: 7px;
      color: #fff;
      padding: 10px 20px;
    }
    .nav-pills .nav-link {
      background: var(--secondary);
      border-radius: 7px;
      color: #707070;
      padding: 10px 20px;
    }
  }

  &__add-new-company {
    border: none;
    border-radius: 7px;
    background: none;
    background-color: #0ad819;
    color: #fff;
    padding: 13px 15px;
    font-size: 16px;
    margin-top: 15px;
    margin-bottom: 10px;
  }

  &__companies-note {
    p {
      color: #707070;
    }
  }

  .company-card{
    padding: 15px;
    grid-gap: 15px;
    gap: 15px;
    padding: 25px 15px;
    margin-bottom: 27px;
    box-shadow: 0 4px 25px 0 #0000000d;
    border-radius: 10px;

    transition: all .1s linear;
    cursor: pointer;
    &:hover{
      transform: translateY(-5px);
    }
    
    &__icon{
      margin-top: 5px;
    }

    &__flex-item-img{
      align-self: center;
    }

    &__date{
      color: #707070;
      margin-top: 15px;
      display: block;
      svg{
        background: #efefef;
        padding: 4px;
        border-radius: 8px;
      }
    }
  }
}
</style>


