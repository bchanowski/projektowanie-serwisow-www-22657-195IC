# Laboratorium 2 - "Praca z elementami DOM z wykorzystaniem Javascript"

Na każdej ze stron dodałem zegar pokazujący lokalną datę oraz czas, za pomocą funkcji która pobiera obecną datę i za pomocą getMonth(), getDate(), getHours(), getMinutes() oraz getSeconds() daję nam odpowiednie wartości. Dane są wprowadzone w lewym górnym rogu w miejscu gdzie w lab1 były tytuły stron.

### Strona główna

Na stronie głównej zmieniłem wartości getElementById("autor"), zmieniając borderStyle, marginTop i backgroundColor wszystkich divów oraz całego body, następnie zrobiłem funkcję która poprzez document.createElement stworzyła zdjęcie oraz hiperłącze, zmieniłem ich podstawowe atrybuty, takie jak height, width czy display, tak aby pokazały się zaraz za informacjami o autorze i po kliknięciu w link przeniosło użytkownika do mojego konta github'a. Do samego html'a zostały dodane za pomocą appendChild do div'a z id "autor".

![Zdjęcie strony głównej](/lab2/assets/strona-glowna2.png "Strona główna")

### List

Na podstronie list za pomocą createElement stworzyłem przycisk, który po kliknięciu wykonuję funkcję, która zwiększa czionkę tekstu listu. Przycisk jest dodwany do strony poprzez appendChild, poza tym do div'a z id "list" dodaje backgroundImage, który pozycjonuje na jego środku i zmieniam mu wartość backgroundRepeat na "no-repeat", tak aby pokazał się tylko raz, aby wyglądał tak jak znak wodny.

![Zdjęcie listu](/lab2/assets/list2.png "List")

### Podręcznik

W podstronie podręcznik dodałem funkcję pokazOdp, która po wydarzeniu onclick w zdjęcie "zdjecie7" zmienia je na inny obrazek, który ma zaznaczone poprawne odpowiedzi do zadania. Poza tym zmieniłem backgroundImage body całej strony z odpowiednimi wartościami repeat i size na zdjęcie przypominające biurko i to samo na div'ie z danym strony podręcznika na tło przypominające papierową kartkę.

![Zdjęcie strony z podręcznika](/lab2/assets/podrecznik2.png "Podręcznik")

### Formularz

W formularzu dodałem funkcję komunikat, która wyświetla alert, dziękujący użytkownikowi za przesłanie formularzu, oraz zmieniłem backgroundColor oraz borderRadius div'a "form", w którym znajduję się nasz formularz, jak i backgroundColor całej strony.

![Zdjęcie formularza](/lab2/assets/formularz2.png "Formularz")

