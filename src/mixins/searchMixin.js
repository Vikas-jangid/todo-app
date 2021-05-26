export default {
    computed:{
        filterItem : function() {
            return this.TodoItems.filter((item) =>{
                if(!this.searchTitle && !this.searchDate && !this.searchStatus)
                {
                    return item
                }
                else if (this.searchTitle == item.task_title  || this.searchDate + "T18:30:00.000Z" == item.added_on || this.searchStatus == item.task_status){
                    return item
                } 
            });
        },
    }
}  