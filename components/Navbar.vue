<template>
  <section class="navbar-component">
      <div class="container">
            <div class="d-flex flex-wrap justify-content-between">
                <div>
                    <img class=" navbar-component__logo" src="@/assets/imgs/hive-logo.png" alt="">
                </div>

                <div class="navbar-component__large-screen ">

                    <div class="navbar-component__search"> 
                        <el-input
                            placeholder="Search"
                            prefix-icon="el-icon-search"
                            @keyup.enter.native="searchInCompanies"
                            v-model="navbarSearch">
                        </el-input>
                    </div>

                    <!-- <div class="navbar-component__icons">
                        <div class="d-flex">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 18 18">
                                    <g id="Icon" transform="translate(-0.143 -0.347)">
                                        <rect id="Area" width="18" height="18" transform="translate(0.143 0.347)" fill="#fcfcfc" opacity="0"/>
                                        <g id="Icon-2" data-name="Icon" transform="translate(2.268 1.512)">
                                        <rect id="Rect" width="13.606" height="13.606" rx="2" transform="translate(0 1.512)" fill="none" stroke="#ffcb05" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.667"/>
                                        <line id="Line" y2="3.023" transform="translate(9.826)" fill="none" stroke="#ffcb05" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.667"/>
                                        <line id="Line-2" data-name="Line" y2="3.023" transform="translate(3.78)" fill="none" stroke="#ffcb05" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.667"/>
                                        <line id="Line-3" data-name="Line" x2="13.606" transform="translate(0 6.047)" fill="none" stroke="#ffcb05" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.667"/>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 18 18">
                                    <g id="Icon" transform="translate(-0.047 -0.347)">
                                        <rect id="Area" width="18" height="18" transform="translate(0.048 0.347)" fill="#fcfcfc" opacity="0"/>
                                        <g id="Icon-2" data-name="Icon" transform="translate(2.192 1.512)">
                                        <path id="Path" d="M13.838,6.2a4.535,4.535,0,1,0-9.07,0C4.768,11.493,2.5,13,2.5,13H16.106s-2.268-1.512-2.268-6.8" transform="translate(-2.5 -1.667)" fill="none" stroke="#ffcb05" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.667"/>
                                        <path id="Path-2" data-name="Path" d="M11.174,17.5a1.513,1.513,0,0,1-2.616,0" transform="translate(-3.063 -3.139)" fill="none" stroke="#ffcb05" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.667"/>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </div> -->
                    <div class="navbar-component__user">
                        <div class="d-flex justify-content-arround">
                            <div>
                                <img :src="user.profile" alt="">
                            </div>
                            <div>
                                <h6> {{ user.name }} </h6>
                                <span> {{user.role}} </span>
                            </div>
                        </div>
                    </div>
                    <!-- <div> 4 </div> -->
                </div>


                <div class="navbar-component__small-screen">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="20" height="20" x="0" y="0" viewBox="0 0 464.205 464.205" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><g xmlns="http://www.w3.org/2000/svg"><g id="grip-solid-horizontal_1_"><path d="m435.192 406.18h-406.179c-16.024 0-29.013-12.99-29.013-29.013s12.989-29.013 29.013-29.013h406.18c16.023 0 29.013 12.99 29.013 29.013-.001 16.023-12.99 29.013-29.014 29.013z" fill="#000000" data-original="#000000" class=""/><path d="m435.192 261.115h-406.179c-16.024 0-29.013-12.989-29.013-29.012s12.989-29.013 29.013-29.013h406.18c16.023 0 29.013 12.989 29.013 29.013s-12.99 29.012-29.014 29.012z" fill="#000000" data-original="#000000" class=""/><path d="m435.192 116.051h-406.179c-16.024 0-29.013-12.989-29.013-29.013s12.989-29.013 29.013-29.013h406.18c16.023 0 29.013 12.989 29.013 29.013s-12.99 29.013-29.014 29.013z" fill="#000000" data-original="#000000" class=""/></g></g></g></svg>
                    </div>
                </div>
                
            </div>
      </div>
  </section>
</template>

<script>
export default {
    mounted(){
        this.getUserProfile();
    },
    methods:{
        getUserProfile(){
            if(localStorage.getItem('CRMDashboardUser')){
                this.user = JSON.parse(localStorage.getItem('CRMDashboardUser'));
            }
        },
        searchInCompanies(){

            this.$router.push(`/?company=${this.navbarSearch}`); 
        },
    },
    data(){
        return{
            navbarSearch: "",
            user: {}
        }
    }
}
</script>

<style lang="scss">
.navbar-component{
    padding-top: 25px;
    margin-bottom: 30px;
    &__logo{
        width: 150px;
    }
    &__large-screen{
        gap: 15px;
        padding-top: 0;
        display: flex;
        @media screen and (max-width: 765px) {
            display: none !important;
        }
    }
    &__small-screen{
        padding-top: 15px;
        cursor: pointer;
        display: none;
        @media screen and (max-width: 765px) {
            display: block;
        }
    }

    &__icons{
        >div{
            grid-gap: 15px;
            grid-gap: 15px;
            gap: 15px;
            padding: 12px 22px;
            border-radius: 30px;
            box-shadow: 0 4px 25px 0 #726e6e1a;
        }
    }

    &__search{
        .el-input--prefix .el-input__inner{
            padding-left: 30px;
            box-shadow: 0 4px 25px 0 #726e6e1a;
            border-radius: 30px;
            border: none;
            padding: 24px 34px;
            color: #919191;
            &::placeholder{
                color: #919191;
            }
        }
    }

    &__user{
        >div{
            grid-gap: 8px;
            gap: 8px;
            padding: 2px 15px;
            border-radius: 30px;
            box-shadow: 0 4px 25px 0 #726e6e1a;
            h6{
                margin-bottom: 0;
                padding-top: 4px;
            }
            span{
                font-size:13px
            }
        }
        img{
            border-radius: 50%;
            width: 50px;
            border: 1px solid #ffcb0538;
            height: 50px;
            padding: 4px;
        }
    }
}
</style>