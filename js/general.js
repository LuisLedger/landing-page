var main = {

    ready: function(){

        var t = this.components;
        
        $('.view-portfolio-detail').on('click',function(e){
            e.preventDefault()
            
            t.show_portfolio_items( $(this).attr('data-type') )
        })
    },

    components: {
        /* PORTFOLIO EVENTS*/
        show_portfolio_items(attribute = 'all'){
            if (attribute == 'all') {
                $('.portfolio-item').show()
            } else {
                $('.portfolio-item').hide()
                $('.'+attribute).show()
            }
        }
    }

}
$(document).ready(function(){
    main.ready();
    $('#home').fadeIn(3000)
})
