// name: ESP_W
<script>
var value = "http://192.168.1.68/?cmd=reboot";
// or overwrite value in your callback function ...
this.scope.action = function() { return value; }
</script>
<md-button ng-click="send({payload:action()})">
    espW
</md-button>