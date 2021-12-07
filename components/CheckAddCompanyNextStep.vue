<template>
  <div>
    <vs-dialog
      class="company-available"
      prevent-close
      not-close
      v-model="available"
    >
 

      <div class="form-body">
        <div class="mt-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="45"
            viewBox="0 0 45 45"
          >
            <g id="noun-availability-2263783" transform="translate(-70 0.004)">
              <path
                id="Path_6"
                data-name="Path 6"
                d="M72.778,22.5A19.722,19.722,0,1,1,92.5,42.218V45A22.5,22.5,0,1,0,70,22.5Z"
                fill="#0ad819"
              />
              <path
                id="Path_7"
                data-name="Path 7"
                d="M204.13,117.919l-12.9,12.9-1.491-1.491-5.68-5.681,2.611-2.611,4.745,4.745,10.714-10.714a14.15,14.15,0,0,0-10.121-4.451,13.705,13.705,0,1,0,12.119,7.307Z"
                transform="translate(-99.605 -101.727)"
                fill="#0ad819"
              />
            </g>
          </svg>

          <h6 class="text-center mt-3">available Company</h6>

          <p class="text-center">
            This company is in the sales list, you can fill in the data and add
            it
          </p>
        </div>
      </div>

      <template #footer>
        <div class="footer-dialog mb-4">
          <el-button type="primary" @click="goNextStep()"> Next </el-button>
          <el-button type="text" @click="closePopup()"> Close </el-button>
        </div>
      </template>
    </vs-dialog>

    <vs-dialog
      v-model="notAvailable"
      prevent-close
      not-close
      class="company-not-available"
    >
     <div class="form-body">
        <div class="mt-5">
          <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45">
                <g id="Group_47" data-name="Group 47" transform="translate(-661 -264)">
                    <g id="noun-availability-2263783" transform="translate(591 264.004)">
                    <path id="Path_6" data-name="Path 6" d="M72.778,22.5A19.722,19.722,0,1,1,92.5,42.218V45A22.5,22.5,0,1,0,70,22.5Z" fill="#ea0552"/>
                    </g>
                    <circle id="Ellipse_1" data-name="Ellipse 1" cx="14" cy="14" r="14" transform="translate(670 273)" fill="#ea0552"/>
                    <path id="Path_8" data-name="Path 8" d="M10.175-7.5,6.713-2.241,10.134,2.9H7.4L5.576-.323Q5.4-.617,5.17-1.074H5.129q-.041.091-.426.751L2.845,2.9H.125L3.657-2.2.307-7.5H3.048l1.8,3.381q.2.376.4.772h.03L7.6-7.5Z" transform="translate(678.851 289.302)" fill="#fff"/>
                </g>
            </svg>

          <h6 class="text-center mt-3">not available Company</h6>

          <p class="text-center">
            This company is in the sales list, you can fill in the data and add
            it
          </p>
        </div>
      </div>

      <template #footer>
        <div class="footer-dialog mb-4">
          <el-button @click="closePopup()" type="primary"> Close </el-button>
        </div>
      </template>
    </vs-dialog>
  </div>
</template>

<script>
export default {
  props: ["status"],
  data() {
    return {
      available: false,
      notAvailable: false,
    };
  },
  methods: {
    closePopup() {
      this.available = false;
      (this.notAvailable = false), this.$emit("close");
    },
    goNextStep() {
      this.available = false;
      this.$emit("nextStep");
    },
  },
  created() {
    if (this.status) {
      this.available = true;
    } else {
      this.notAvailable = true;
    }
  },
};
</script>

<style lang="scss">
.company-available , .company-not-available {
  .footer-dialog {
    .el-button {
      width: 250px;
      display: block;
      margin-bottom: 20px;
      margin: auto;
      border-radius: 10px;
    }
  }
  .form-body {
    svg {
      text-align: center;
      margin: auto;
      display: block;
    }

    h6{
        font-weight: bold;
        text-transform: capitalize;
    }

    p{

        width: 300px;
        text-align: center;
        margin: 20px auto;
    }
  }
}
</style>