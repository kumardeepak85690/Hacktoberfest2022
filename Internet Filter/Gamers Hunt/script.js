const closeUrl = () => {
    var x = window.open("https://www.adultads.com",'toolbar=1,location=1,directories=1,status=1,menubar=1,scrollbars=1,resizable=1');
    setTimeout(function(){
        x.close();
    },500)
    
}