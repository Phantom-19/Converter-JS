
<form action="connexion.php" method="post" id="conn_post" name="conn_post">
    <table >
        <tr>
            <td>Nom d'utilisateur :</td>
            <td><input type="text" name="nom" required="required"/></td>
        </tr>
        <tr>
            <td>Mot de passe :</td>
            <td><input type="password" name="mdp" required="required" /></td>
        </tr>
        <tr><tdcolspan="2"><input type="submit" value="Connexion" /></td></tr>
    </table>
</form>

<!--Récupérer ensuite les valeurs avec les variables
Code PHP :-->
$_POST['nom'];
$_POST['mdp'];


<!--Formulaire avec une liste déroulante
Code HTML -->
<form action="tournee.php" method="post" id="tournee_post" name="tournee_post">
    <table>
        <tr><td>Tournée :</td>
            <td>
            <select name="id">
                <option></option>
            <?php $tournees = $conn->query("SELECT * FROM tournee;"); ?>
            <?php while ( $tournee = mysqli_fetch_array($tournees)) { ?>
              <option value="<?php echo $tournee['id']; ?>"><?php echo $tournee['nom']; ?></option>
            <?php } //Fin while SELECT tournee ?>
            </select>
            </td>
        </tr>
        <tr>
            <td colspan="2"><input type="submit" value="Sélectionner" /></td>
        </tr>
    </table>
</form>

<!--Code PHP :-->
$_POST['id'];
