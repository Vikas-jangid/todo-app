export default {
    computed:{
        filterItem : function() {
            return this.TodoItems.filter((item) =>{
                return [ item.task_title.match(this.search) , item.added_on.match(this.searchDate) , item.task_status.match(this.searchStatus) ]
            });
        }

    }
}