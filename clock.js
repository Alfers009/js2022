var hour = new Date().getHours()


//year = document.getElementById("year").value
if (hour == 22 ) {
    document.write("Inca esti la curs")
    
}
if (hour < 12 && hour > 1) { 
    document.write("Good morning")
    
} else if(hour >= 12 && hour < 18) {
    document.write("Have a good day sir")
   
} else if (hour >= 18 && hour < 23) {
    document.write("Good evening")
    
}else {
    document.write("Good night sir")
    
}
    
