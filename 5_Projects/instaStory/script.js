var arr = [
    {
        dp: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        story: "https://images.unsplash.com/photo-1542691457-cbe4df041eb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnJlYWtmYXN0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    },
    {
        dp: "https://images.unsplash.com/photo-1542691457-cbe4df041eb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnJlYWtmYXN0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        story: "https://images.unsplash.com/photo-1542691457-cbe4df041eb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnJlYWtmYXN0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    },
    {
        dp: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        story: "https://images.unsplash.com/photo-1556191041-c2401936d851?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJyZWFrZmFzdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        dp: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        story: "https://images.unsplash.com/photo-1563722897-e6dac3cec340?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdHVhcmFudHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        dp: "https://images.unsplash.com/photo-1541544348958-c19138585962?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJlc3R1YXJhbnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        story: "https://images.unsplash.com/photo-1541544348958-c19138585962?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJlc3R1YXJhbnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    },
    {
        dp: "https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW5kaWFuJTIwbW9kZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        story: "https://images.unsplash.com/photo-1634913174448-f2932ddfe4a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJlc3R1YXJhbnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    },
    {
        dp: "https://images.unsplash.com/photo-1622782262245-bfb660f4ff93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW5kaWFuJTIwbW9kZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        story: "https://images.unsplash.com/photo-1622782262245-bfb660f4ff93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW5kaWFuJTIwbW9kZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        dp: "https://images.unsplash.com/photo-1689800226628-5d5a8a83093b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
        story: "https://images.unsplash.com/photo-1693040516624-a22f0906faab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        dp: "https://images.unsplash.com/photo-1610047614256-023d7c028d0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGluZGlhbiUyMG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        story: "https://images.unsplash.com/photo-1610202631408-fa6ba0f39ca3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGluZGlhbiUyMG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    }
]
var clutter = ""
arr.forEach(function (elem, gem) {
    clutter += `<div class="story">
    <img id ="${gem}"src="${elem.dp}" alt="">
</div>`
})
// console.log(clutter )
document.querySelector(".story-template").innerHTML = clutter

document.querySelector(".story-template").addEventListener("click", function (dets) {
    document.querySelector(".full-screen").style.display = "block"
    document.querySelector(".full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`
    
    setTimeout(function () {
        document.querySelector(".full-screen").style.display = "none"
    },2000)
})