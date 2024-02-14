let follower = document.getElementById("follower");

document.addEventListener("mousemove", e => {
      follower.style.left = (e.x-8)+"px";
      follower.style.top = (e.y-5)+"px";
})