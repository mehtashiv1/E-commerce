<?php
    $conn = mysqli_connect("localhost","root","");
    if(isset($_POST['login_Btn'])){
        $username=$_POST['email'];
        $password=$_POST['password'];
        $sql = "SELECT * FROM signup-page.user-data WHERE email = '$username'";
        $result = mysqli_query($conn,$sql);
        while($row = mysqli_fetch_assoc($result)){
            $resultPassword = $row['password'];
            if($password == $resultPassword){
                header('Location:index.html');
            }else{
                echo "<script>
                alert ('Incorrect username or password');
                </script>";
            }
        }
    }
?>    