const vue_app = Vue.createApp({
    created () {
        fetch('schedule.json').then(response => response.json()).then(json => {
            this.schedules = json
        })
},
data(){
    return {
        schedules :[

            
        ],

        test: "Chris Schedule"
    }
},
methods: {
 toggleA: function(){
    this.schedules[0].isActive = true;
  
    this.schedules[1].isActive = true;
      this.schedules[2].isActive = true;
    this.schedules[3].isActive = true;
  
    this.schedules[4].isActive = true;
    this.schedules[5].isActive = true;
    this.schedules[6].isActive = true;
 },
 toggleB: function(){
    this.schedules.filter((schedule) => schedule.isActive)
 }
 }
})

vue_app.mount("#vue_app")
