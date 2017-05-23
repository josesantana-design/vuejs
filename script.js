new Vue({
    el: "#app",
    data: {
        name: "",
        gender: 'f',
        years_php: 0
    },
    methods: {
    	signUp: function(event) {

    		alert('Signing up..')
    	},
    	addYear: function() {
    		this.years_php++;
    	},    	
    	subYear: function() {
    		this.years_php--;
    	}
    }
});