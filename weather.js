
            

function getweather() {
    let city = document.getElementById("city").value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8bd991c12ee11646e3b2ed07ee7b03b5`;
            
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            document.getElementById("x1").innerHTML = data.main.temp + " K";
            document.getElementById("x2").innerHTML = data.main.pressure + " mmHg";
            document.getElementById("x3").innerHTML = data.main.humidity;
            document.getElementById("x4").innerHTML = data.wind.speed + " m/s";
            console.log(data);
        }
        );
}
            //    let url=`https://api.openweathermap.org/data/2.5/weather?q=gopalganj&appid=8bd991c12ee11646e3b2ed07ee7b03b5`;
            
            // fetch(url).then((res)=>res.json())
            // .then((data)=>console.log(data));
            
            gsap.from("h2",{
                y:20,
                duration:2,
            })
            gsap.to("#btn",{
                x:10,
                duration: 1,
                scale: 1.3,
            })
            
            // let ball=document.querySelector("#box");
            // ball.addEventListener("mousemove",function(dets){
            //     gsap.to("#box",{
            //         y:dets.y,
            //         x:dets.x,
            //     });
            // })