<template>
  <nav-bar />
  <div>
    <h1>the first page </h1>
    <h4>hover for animations</h4>
    <h4>feel free to use any of these buttons</h4>
    <div class="wrapper">
        <div class="btn-1">
            <button>send</button>
        </div>
        <div class="btn-2">
            <button>continue</button>
            <img src="../assets/icons/person-walking-arrow-right-solid.svg">
        </div>
        <div class="btn-3">
            <button>
                <img src="../assets/icons/download-svgrepo-com.svg">
                <span>download</span>
            </button>
        </div>
        <div class="btn-4">
            <button>
                <img src="../icons/help-svgrepo-com.svg">
                <span>help</span>
            </button>
        </div>
    </div>
  </div>
  <a href="/landing">landing pages</a>
</template>

<style>
button:hover{
    cursor: pointer;
}
.btn-1 > button{
    background-color: cyan;
    padding:7px 15px;
    border: 1px solid #333;
    border-radius:105px;
    transition: background-color 0.3s ease-in-out;
    transition: color 0.3s ease-in-out;
    transition: bottom 0.5s ease-in-out;
    position: relative;
}
.btn-1 > button:hover{
    background-color: rgba(0, 0, 128, 0.445);
    color: #fff;
    bottom: 5px;
}
.btn-2{
    display: flex;
    align-items: center;
}
.btn-2 > button{
    position: relative;
    padding: 7px 15px;
    border: 1px solid #333;
    border-radius: 105px;
    transition: padding .2s ease-in-out;
    background: #E8442A;
}
.btn-2 button:hover{
    padding: 7px 39px 7px 15px;
}
.btn-2 > img{
    height: 20px;
    width: auto;
    position: relative;
    left: 10px;
    opacity: 0;
    transition: left .2s ease-in-out;
}
.btn-2 > button:hover ~ img{
    opacity: 1;
    left: -33px;
}
.btn-3 > button{
    display: flex;
    padding: 7px 7px;
    border: 1px solid #333;
    align-items: center;
    border-radius: 50%;
    background-color: #6B9BD2;
    transition: border-radius .3s ease-in-out;
}
.btn-3 > button:hover{
    border-radius: 20px;
}
.btn-3 > button span{
    display: none;
    transition:display .3s ease-in-out;
}
.btn-3 > button img{ 
    height: 20px;
    width: auto;
}
.btn-3 > button img:hover ~ span{
    display: block;
}
.btn-3 > button span:hover{
    display: block;
}

.btn-4 button img{
    height: 20px;
    width: auto;
}
</style>
