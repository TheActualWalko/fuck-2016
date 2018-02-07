const DIE_TIME = 5000;
const FLASH_TIME = 600;
const LIVE_TIME = 1000;

let events = [
  [
    "January 14",
    "Alan Rickman",
    "http://vignette4.wikia.nocookie.net/harrypotter/images/6/63/SnapeSeverus.jpg/revision/latest?cb=20160103201919" 
  ],
  [
    "April 21", 
    "Prince",
    "http://cdn2-www.musicfeeds.com.au/assets/uploads/prince-1-671x377.jpg"
  ],
  [
    "June 19", 
    "Anton Yelchin (Chekov in Star Trek)",
    "http://www.thewrap.com/wp-content/uploads/2016/06/chekov.jpg"
  ],
  [
    "September 21", 
    "Leonard Cohen",
    "http://media.treehugger.com/assets/images/2016/11/leonard-2_cohen.jpg"
  ],
  [
    "December 27", 
    "Carrie Fisher",
    "https://peopledotcom.files.wordpress.com/2016/08/star-wars-leia-435.jpg?w=435&h=580"
  ],
  [ 
    "Jan 6", 
    "Nuclear tests in North-Korea", 
    "http://www.nationalww2museum.org/media/ph-war-and-conflict.jpg" 
  ],
  [ 
    "Jan 23", 
    "Zika outbreak in South and Central America", 
    "https://www.ecosia.org/images?q=red+cross"
  ],
  [ 
    "March 13", 
    "Suicide bombing in Ankara, Turkey", 
    "http://www.nationalww2museum.org/media/ph-war-and-conflict.jpg" 
  ],
  [ 
    "March 14", 
    "February 2016 warmest month ever recorded",  
    "https://www.ecosia.org/images?addon=chrome&q=planet"
  ],
  [ 
    "March 23", 
    "Terrorist attack in Brussels", 
    "http://www.nationalww2museum.org/media/ph-war-and-conflict.jpg" 
  ],
  [ 
    "May 3", 
    "Ted Cruz & John Kasich suspend Presidental runs",  
    "https://www.ecosia.org/images?addon=chrome&q=trump"
  ],
  [ 
    "June 12", 
    "Terrorist attack in Orlando", 
    "http://www.nationalww2museum.org/media/ph-war-and-conflict.jpg" 
  ],
  [ 
    "June 14", 
    "1st mammal goes extinct because of climate change", 
    "https://www.ecosia.org/images?addon=chrome&q=planet" 
  ],
  [ 
    "June 16", 
    "Joe Cox (Britain labor MP) murdered", 
    "https://www.ecosia.org/images?q=joe+cox+britain" 
  ],
  [ 
    "June 23", 
    "Europe prema-death by Brexit", 
    "https://www.ecosia.org/images?addon=chrome&q=europe" 
  ],
  [ 
    "June 28", 
    "suicide bombings in Turkey’s airport", 
    "http://www.nationalww2museum.org/media/ph-war-and-conflict.jpg"
  ],
  [ 
    "July 1", 
    "Superdelegates elect Hilary Clinton as candidate", 
    "https://www.ecosia.org/images?addon=chrome&q=trump"
  ],
  [ 
    "July 6", 
    "African-American man Alton Sterling killed by white police in Louisiana while restrained", 
    "http://www.nationalww2museum.org/media/ph-war-and-conflict.jpg" 
  ],
  [ 
    "July 7", 
    "Aleppo under siege", 
    "http://www.nationalww2museum.org/media/ph-war-and-conflict.jpg" 
  ],
  [ 
    "July 12", 
    "Bernie Sanders endorses Hillary Cliton",  
    "https://www.ecosia.org/images?addon=chrome&q=trump"
  ],
  [ 
    "July 14", 
    "Terrorist attack in Nice", 
    "http://www.nationalww2museum.org/media/ph-war-and-conflict.jpg" 
  ],
  [ 
    "July 16", 
    "Mike Pence announced as VP", 
    "https://www.ecosia.org/images?addon=chrome&q=trump"
  ],
  [ 
    "August 24", 
    "Earthquake in Italy", 
    "https://www.ecosia.org/images?addon=chrome&q=planet" 
  ],
  [ 
    "September 1", 
    "Highest Carbon dioxide milestone month",  
    "https://www.ecosia.org/images?addon=chrome&q=planet"
  ],
  [ 
    "Sept 28", 
    "Hurricane Matthew blows through Haiti", 
    "https://www.ecosia.org/images?addon=chrome&q=planet" 
  ],
  [ 
    "Oct 7", 
    "Donald Trump … gropes women in videos", 
    "https://www.ecosia.org/images?addon=chrome&q=trump" 
  ],
  [ 
    "Oct 15", 
    "Great barrier reef declared dead", 
    "https://www.ecosia.org/images?addon=chrome&q=planet"
  ],
  [ 
    "November 1", 
    "2016 declared hottest year in 137 years",  
    "https://www.ecosia.org/images?addon=chrome&q=planet"
  ],
  [ 
    "November 15", 
    "Lowest artic sea-ice extent", 
    "https://www.ecosia.org/images?addon=chrome&q=planet" 
  ],
  [ 
    "Nov 8", 
    "Donald Trump elected 45th President of the United States", 
  ],
  [ 
    "Dec 16", 
    "5-day pollution red alert delcared in China", 
    "https://www.ecosia.org/images?addon=chrome&q=planet"
  ]
];

const getNowIn2016 = (now = new Date().getTime())=>{
  const nowRatioInHour = ((now - 1483243200000) / (1483246800000 - 1483243200000));
  if( nowRatioInHour > 1 ){
    setTimeout(()=>window.location.href="you-survived.html", DIE_TIME);
  }
  const nowIn2016 = (nowRatioInHour * 31554000000) + 1451624400000;
  return nowIn2016;
}

const update = (currentTime = new Date().getTime())=>{
  const now = getNowIn2016(currentTime);
  const dateString = new Date(now).toLocaleTimeString("en-US", {
    year: "numeric", month: "short", day : "numeric"
  });
  $("#current-date").text(dateString.split(":").slice(0,1) + (dateString.slice(-2)));
  eventsToAnimate = events.filter(x=>(new Date(x[0] + ", 2016").getTime() <= now));
  events = events.filter(x=>(new Date(x[0] + ", 2016").getTime() > now));
  eventsToAnimate.forEach(([date, name, image])=>{
    let left = Math.random() * 25;
    if( Math.random() > 0.5 ){
      left = 100 - left;
    }
    const targetLeft = left + "%";
    const imgElement = $(`
      <figure class='image-wrap' style='top:100%;'>
        <div class='image-frame' style='background-image:url(${image});'></div>
        <figcaption class='caption'>${name} <br /><em>${date}</em></figcaption>
      </figure>
    `);
    imgElement.appendTo($("#images"));
    const flashElement = $("<img class='flash' src='flash.png' />");
    $(flashElement).appendTo($("#images"))
    $(flashElement).css({
      left: targetLeft,
      transform : "scale(0)"
    });

      
    setTimeout(()=>{
      imgElement.css({top: "0%"});
      setTimeout(()=>{
        imgElement.css({left: targetLeft, transform : "scale(0)"});
        setTimeout(()=>{
          $(imgElement).remove();
          flashElement.css({
            transform : "scale(1)"
          });
          setTimeout(()=>{
            flashElement.css({
              transform : "scale(0)"
            });
            setTimeout(()=>{
              flashElement.remove();
            }, FLASH_TIME);
          }, FLASH_TIME);
        }, DIE_TIME);
      }, LIVE_TIME);
    }, 5);
  });
};

events = events.filter(x=>(new Date(x[0] + ", 2016").getTime() > getNowIn2016()));
setInterval(update, (3600/365));