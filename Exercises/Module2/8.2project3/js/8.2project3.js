let classObject = {
  Lena: "Lena is my roommate and she loves fashion and to make crafts!",
  Emily:
    "Emily is my suitemate and she listens to Tyler the Creator and likes to watch sitcoms!",
  Eylul:
    "Eylul is my suitemate (Emily's roommate) and she is really good at drawing and she also loves Snoopy!",
  Andrew:
    "Andrew is my friend who is also in my Discrete Math class and he loves Minions and playing basketball!",
  Tuan: "Tuan is my lactose intolerant friend who is good at graphic design and likes to sing!",
  Jin: "Jin is my friend who is majoring in CompSci like me, and he is really into film and editing!",
  Emmanuel:
    "Emmanuel is my friend who is very funny and enjoys computer engineering!",
  Tobi: "Tobi is my friend who is majoring in MIS and is really good at producing music!",
};

function quote(name) {
  document.querySelector("#aboutme").innerHTML = ``;
  document.querySelector("#image-container").innerHTML = "";
  document.querySelector("#output").innerHTML = classObject[name];
  document.querySelector("#image").innerHTML = `<img src="pix/${name}.jpg">`;
}
