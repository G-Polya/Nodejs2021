var relationship1 = {
    name : 'zero',
    friends : ['nero','hero','xero'],
    logFriends : function(){
        var that = this
        this.friends.forEach(function(friend){
            console.log(this, friend);
        })
    }
}

relationship1.logFriends()