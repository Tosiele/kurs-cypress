# Kurs cypress - automatyzacja testów
## Moduł 1 - *lokatory*
- jeżeli mamy element - < input id="user_email_login" class="user_email_ajax"></ input >to:
- cy.get -> znajduje element
- cy.get('**#**user_email_login') -> wyszukiwanie elementu po id
    - cy.get('input[id="user_email_login"]') -> ten sam efekt w dłuższy sposób
- cy.get('**.**user_email_ajax') -> wyszukiwanie elementu po class
    - cy.get('input[class="user_email_ajax"]') -> ten sam efekt w dłuższy sposób
- cy.get('input') -> wyszukiwanie elementu po tagu
- cy.get('span').contains('log_in').click(**{ force: true }**) -> przechodzenie przez akcję nie zależnie od spełnienia warunków dla użytkownika (np odpowiedni ruch myszą)

---

## Moduł 2 - *podstawy*
### Tworzenie scenariusza
- na pierwszym poziomie tworzymy scenariusz testowy
    - decribe(...)
- pod scenariuszem piszemy przypadki testowe
    - it('*nazwa przypadku testowego*', function(){

        *kroki przypadku testowego*
    
        })
- it.only() -> podczas testowania przechodzi tylko przez ten przypadek testowy
- xit() -> podczas testowania ignoruje ten przypadek testowy
- beforeEach(()=>{}) -> funkcja która wykona się przed każdym przypadkiem testowym, deklarowana między describe a pierwszym item
- decribe('*nazwa scenariusza*', () => {

     *przypadki testowe*   
    });

### Asercja
- .should() -> pobrana wartość powinna być ...
    - ('*eq*', '*warotść prawidłowa*') -> równa danej warości
    - ('have.length, *prawidłowa długość*')
    - ('not.have.class', *jakiej klasy nie powinien posiadać*) -> jeśli element będzie posiadał daną klasę - asercja nie przejdzie
    - ('have.value', *prawidłowa wartość*)
    - ('have.text', *prawidłowy*) -> zawiera sokładnie ten tekst co do jednego znaku
    - ('include.text', *prawidłowy*) -> tekst jest częścią składową sprawdzanego elementu
    - ('contains.text', *prawidłowy*) = include.text
    - ('not.contains', *wartość której nie powinien zawierać*)
    - ('be.visible') -> sprawdzanie czy jest na stronie i czy jest widoczny (odwrotność not.be.visible - występuje ale niewidoczny)
    - ('not.exist') -> element nie może występować
    - ('be.checked') -> dla checkboxów czy jest kliknięty

### Polecenia
- cy.visit('*url*') -> odwiedza podaną stronę
- cy.get('*nazwa elementu*') -> znajduje element na storonie
    - .contains('*co zawiera*') -> znajduje element zawierający dany string
    - .contains().click() -> kilka na znaleziony element
    - .eq('*numer wystąpienia elementu liczony od 0*') -> który element z dostępnych na stronie mam wziąć jeśli jest kilka wystąpień tego samego elementu
    - .first() -> bierze pierwsze wstąpnienie danego elementu
    - .last() -> bierze ostatnie wystąpienie danego elementu
- cy.url -> pobiera url strony na któej się znajduje
- cy.log(*tekst*) -> wypisuje tekst w teście
- cy.request('*url*') -> wykonuje zapytanie pod konkretny adres, defaultowa metoda to get, wyświetla kod HTPP requesta (200, 400, 500)
- cy.wait(*czas w milisekundach*) -> cypress czeka przez określony czas

### Nawigacja miedzy stornami
- cy.go() -> nawiguje między stronami
    - ('back') -> przechodzi na poprzednią odwiedzona stronę  
    - ('forward') -> jeśli już się cofnęliśmy na poprzednia stronę - przechodzi na następną 
    - (-2) -> przechodzi o dwie storny do tyłu, analogicznie dla do przodu

### Pobieranie danych ze strony
- cy.getAllCookies() -> pobiera wszystkie cookisy z przeglądarki
- cy.getCookies() -> pobiera wszystkie cookisy z konkretnej domeny
- cy.getCookie(*nazwa ciastka*) -> pobiera konkretne cookie
- cy.getAllLocalStorage() -> pobiera wszystko co mamy w local storage
- informacje te są wyświetlane w zakładce console

---

## Moduł 3 - *rozszerzenie*
### Testowanie zewnętrznego API
#### Metoda get
- metoda get polega na pobieraniu paczki informacji z pod danego urla
- jeżeli wysyłamy cy.request(), otrzymujemy response
- cy.request(*url*).then((response) => {}) --> po wykonaniu request, na podstawie responsa wykonamy dane czynności
    - => {const body = response.body
    
        cy.log(body) } --> wyświetli response w postaci np array (ale z ilością elementów a nie zawartością) jeśli pod url znajduje się array
- JSON.stringify(*array*) -> zamienia array na stringa
- expect(response.status).to.eq(200) --> spodziewam się że status zapytania będzie 200
#### Metoda post
- metoda post polega na wysylaniu paczki informacji pod dany url
- to samo ce get tylko w drugą stronę
- cy.request({
    method: 'POST',
    url: *url*
    body: JSON.stringify({
        title: 'smf',
        body: 'other words', --> to są wymagania dla danego api, dla innych model posta może wyglądać inaczej
        userID: 1
    })
    headers: {'Content-type': 'application/json'} --> określa typ nagłówków - json
})