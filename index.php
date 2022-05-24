<?php 
// Start session 
session_start(); 
 
// Get data from session 
$sessData = !empty($_SESSION['sessData'])?$_SESSION['sessData']:''; 
 
// Get status from session 
if(!empty($sessData['status']['msg'])){ 
    $statusMsg = $sessData['status']['msg']; 
    $status = $sessData['status']['type']; 
    unset($_SESSION['sessData']['status']); 
} 
 
$postData = array(); 
if(!empty($sessData['postData'])){ 
    $postData = $sessData['postData']; 
    unset($_SESSION['postData']); 
} 
 
// If the user already logged in 
if(!empty($sessData['userLoggedIn']) && !empty($sessData['userID'])){ 
    include_once 'User.class.php'; 
    $user = new User(); 
    $conditions['where'] = array( 
        'id' => $sessData['userID'] 
    ); 
    $conditions['return_type'] = 'single'; 
    $userData = $user->getRows($conditions); 
} 
?>

<?php if(!empty($userData)){ ?>
    <h2>Welcome <?php echo $userData['first_name']; ?>!</h2>
    <a href="userAccount.php?logoutSubmit=1" class="logout">Logout</a>
    <div class="regisFrm">
        <p><b>Name: </b><?php echo $userData['first_name'].' '.$userData['last_name']; ?></p>
        <p><b>Email: </b><?php echo $userData['email']; ?></p>
        <p><b>Phone: </b><?php echo $userData['phone']; ?></p>
    </div>
<?php }else{ ?>
    <h2>Login to Your Account</h2>
    
    <!-- Status message -->
    <?php if(!empty($statusMsg)){ ?>
        <div class="status-msg <?php echo $status; ?>"><?php echo $statusMsg; ?></div>
    <?php } ?>
    
    <div class="regisFrm">
        <form action="userAccount.php" method="post">
            <input type="email" name="email" placeholder="EMAIL" value="<?php echo !empty($postData['email'])?$postData['email']:''; ?>" required="">
            <input type="password" name="password" placeholder="PASSWORD" required="">
            <div class="send-button">
                <input type="submit" name="loginSubmit" value="LOGIN">
            </div>
        </form>
        <p>Don't have an account? <a href="registration.php">Register</a></p>
    </div>
<?php } ?>