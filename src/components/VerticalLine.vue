<template>
    <div class="sec-lines">
        <div class="container full-height">
            <div class="line-item"></div>
            <div class="line-item"></div>
            <div class="line-item"></div>
			<div class="line-item"></div>
			<div class="line-item"></div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style  scoped>
.sec-lines {
	pointer-events: none;
	position: absolute;
	top: 0;
    left: 0;
    bottom: 0;
	width: 100%;
	height: 100vh;
	z-index: 0;
	opacity: 1;
}
.line-item {
	float: left;
	width: calc(100%/5);
	height: 100%;
	box-sizing: border-box;
	border-right: 1px solid rgba(153, 153, 153, 0.1);
	height: 100%;
	position: relative;
}
.line-item:first-child:before {
	content: '';
	position: absolute;
	top: 0;
	right: -2px;
	width: 4px;
    height: 30px;
    background: #fff;
	animation: scroll3 8s ease-out infinite;
}
.line-item:last-child:before {
	content: '';
    position: absolute;
    background: #fff;
	bottom: 0;
	right: -2px;
	width: 4px;
	height: 30px;
	animation: scroll2 6s ease-out infinite;
}
.sec-lines .container {
	width:100%;
}
@keyframes scroll3 {
	0% {
		opacity: 1;
		top: 0
	}
	50% {
		top: 50%
	}
	100% {
		top: 100%;
		opacity: 0.5;
	}
}
@keyframes scroll2 {
	0% {
		opacity: 1;
		bottom: 0
	}
	50% {
		bottom: 50%
	}
	100% {
		bottom: 100%;
		opacity: 0.5;
	}
}
.line-item:first-child {
	border-left: 1px solid rgba(153, 153, 153, 0.09);
}

.sec-lines .container {
    width: 100%;
}
.full-height {
    height: 100%;
}
.container {
    max-width: 1224px;
    width: 92%;
    margin: 0 auto;
    position: relative;
    z-index: 5;
}

div {
    display: block;
}

.container:after{
    content: " ";
    display: table;
}

.container:after, .container-fluid:after, .row:after {
    clear: both;
}
</style>