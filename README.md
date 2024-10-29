# comnica_assignment

## 2. Adott egy gomb. Elvileg minden rendben kód szinten, mégsem csinál semmit se hover, se egyéb eseményre (nem disabled). Mi lehet a probléma, mi okozhat ilyen jelenséget?

### Egy a gombtól független komponens stílusbeni problémájára tudok gondolni. A kérdésben megnevezett gombra rálóg azt "eltakarva" a position és inset kombinációja miatt. 

## 3. Írj egy tetszőleges JS funkciót, ami lekér egy felhasználó listát egy képzeletbeli API-ról, majd miután ezt sikerrel megtette, lekér egy szín listát, majd miután ez is sikerült, egy tetszőleges színt rendel a 1-1 felhasználóhoz és így adja vissza a felhasználók listáját. Hiba esetén a console-ra ír illetve eredménytől függetlenül a console-ra írja, ha végzett.

### async function pairUsersWithColor() {
###     const users = fetch("userUrl")
###         .then(response => {
###             if (!response.ok) {
###                 console.log(new Error("Response failed"));
###             }
###         }).then(response.json())
###         
###     const colors = fetch("colorUrl")
###         .then(response => {
###             if (!response.ok) {
###                 console.log(new Error("Response failed"));
###             }
###         }).then(response.json())
###    
###    let result = []
###    let usersLength = users.length;
###    let colorsLength = users.length;
###    for (let i = 0; i < usersLength; i++) {
###         let randomNumber = Math.floor(Math.random() * (colorsLength));
###         result.push(users[i] + ", " + colors[randomNumber]);
###    }
###    console.log("Task finished!")
### }

## 4. A designer a következőképpen álmodja meg a beviteli mező működését:

### form tagen belül a text típusú input mezőben nem tud szerepelni a value attribútum és a felhasználó által beírt érték