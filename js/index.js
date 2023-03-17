"use strict";

$('.details').slideUp()

$('.headerOne').click(()=>{
    
    $('.details').siblings('.details').slideUp()
    $('.detailsOne').slideDown(500)
   
})

$('.headerTwo').click(()=>{
    $('.details').siblings('.details').slideUp()
    $('.detailsTwo').slideDown(500)
  
})

$('.headerThree').click(()=>{
    $('.details').siblings('.details').slideUp()
    $('.detailsThree').slideDown(500)
    
})

$('.headerFour').click(()=>{
    $('.details').siblings('.details').slideUp()
    $('.detailsFour').slideDown(500)
   
})





let switchHome=0

 $('.sectionMenue').css('margin-left', -($('.sectionMenue').width()))
 $('.sectionContent').css('width','85%')





$('.iconMenue').click(()=>{

    if(switchHome==0){
 $('.sectionMenue').css('margin-left', 0)
 $('.sectionContent').css('width','100%')
 switchHome=1
    }

else{
   $('.sectionMenue').css('margin-left', -($('.sectionMenue').width()))
        $('.sectionContent').css('width','85%')
        switchHome=0
}
})




var counterDay=5
var counterHour=24
var counterMinutes=60
var counterSeconds=60

$('.countDownDay').text(counterDay)
$('.countDownHour').text(counterHour)
$('.countDownMinutes').text(counterMinutes)
$('.countDownSeconds').text(counterSeconds)

var ourCounterDown=setInterval(() => {
          //    var counter=parseInt($('.countDown').text());
 //   counterSeconds
if (counterSeconds !==0) {
     counterSeconds--
     $('.countDownSeconds').text(counterSeconds )
}
   else if (counterSeconds ==0)
   {
    counterSeconds=60
    $('.countDownSeconds').text(counterSeconds)

    counterMinutes--
    $('.countDownMinutes').text(counterMinutes )

}

// counterMinutes
   if (counterMinutes !==0 ) {
}
  else if (counterMinutes ==0 && counterHour>0 ){
    counterMinutes=60
   $('.countDownMinutes').text(counterMinutes )
   counterHour--
   $('.countDownHour').text(counterHour )
  }


//   counterHour
  if (counterHour !==0) {
 }
  else if (counterHour ==0 && counterDay>0){

 counterHour=24
   $('.countDownHour').text(counterHour )
   
   counterDay--
   $('.countDownDay').text(counterDay )


  }

//  counterDay=1
//   if (counterDay ==0)  {
  
// }
  if(counterSeconds ==0 && counterMinutes==0 && counterHour==0 &&  counterDay==0)
  {
       clearInterval(ourCounterDown)
    }


}, 1000);



let noteText=""
$('.noteText').keyup(()=>{

    noteText= $('.noteText').val()


if(noteText.length>=10)
{
   
    $('h4').html(`<h6 id="helpId" class="text-muted"><span> your available character finished</span> Characyer Reamining</h6> `) 
}
else if(noteText.length<=10)
{

    $('h4').html(`<h6 id="helpId" class="text-muted"><span>${10-(noteText.length)}</span> Characyer Reamining</h6> `)
}
}

)

