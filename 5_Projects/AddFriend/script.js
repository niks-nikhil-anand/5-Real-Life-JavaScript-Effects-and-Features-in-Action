let live = document.querySelector("h5")
let btn = document.querySelector("button")
let check = 0

btn.addEventListener("click", function () {
    if (check == 0) {
        live.innerHTML = "Friend Request Sent"
        live.style.color = "green"
        btn.innerHTML = "Cancel Friend Request"
        check = 1
    }else{
        live.innerHTML = "2 Mutual Friends"
        live.style.color = "red"
        btn.innerHTML = "Add Friend"
        check = 0
    }

})
