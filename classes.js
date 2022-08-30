<!DOCTYPE html>
<html>
<head>
<title>Fuchsia X</title>
<script type="text/javascript" src="classes.js"></script>
<script type="text/javascript">
window.addEventListener("load", function(){
window.minecraftOpts = [
"game_frame","assets.epk",
"CgAACQAHc2VydmVycwoAAAACCAAKZm9yY2VkTU9URAAJbGVnZW5kU01QAQALaGlkZUFkZHJlc3MBCAACaXAAI3dzczovL2Jsb2JjcmFmdHN1cnZpdmFsLmR1Y2tkbnMub3JnCAAEbmFtZQAJTGVnZW5kU01QAAgACmZvcmNlZE1PVEQACWJsb2JjcmFmdAEAC2hpZGVBZGRyZXNzAQgAAmlwABt3c3M6Ly9ibG9iY3JhZnQuZHVja2Rucy5vcmcIAARuYW1lAAZLaXRQdlAAAA=="
];
(function(){
var q = window.location.search;
if(typeof q === 'string' && q.startsWith("?")) {
	q = new URLSearchParams(q);
	var s = q.get("server");
	if(s) window.minecraftOpts.push(s);
}
})();
main();
});
</script>
</head>
<body style="margin:0px;width:100vw;height:100vh;" id="game_frame">
</body>
</html>