<?php
$name = $_GET['name'];
if(unlink($name)){echo "File Deleted.";}
else{echo "Couldn't delete the File.";}
