// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-12345-6', 'auto');
ga('send', 'pageview');

function validar(ncampo) {
    if(ncampo == 1){
        ga('send', {
            hitType: 'event',
            eventCategory: 'contato',
            eventAction: "nome",
            eventLabel: 'preencheu'
        });
    } else if(ncampo == 2) {
        ga('send', {
            hitType: 'event',
            eventCategory: 'contato',
            eventAction: 'email',
            eventLabel: 'preencheu'
        });
    } else if (ncampo == 3){
        ga('send', {
            hitType: 'event',
            eventCategory: 'contato',
            eventAction: 'telefone',
            eventLabel: 'preencheu'
        });
    } else if (ncampo == 4){
        if (document.getElementById("aceito").checked){
            ga('send', {
                hitType: 'event',
                eventCategory: 'contato',
                eventAction: 'aceito',
                eventLabel: 'preencheu'
            });
        }
    }
    
}

function eventosPersonalizados(evento) {

    if (evento == 1) {
        ga('send', {
            hitType: 'event',
            eventCategory: 'menu',
            eventAction: 'entre_em_contato',
            eventLabel: 'link_externo'
        });
    } else if (evento == 2) {
        ga('send', {
            hitType: 'event',
            eventCategory: 'menu',
            eventAction: 'download_pdf',
            eventLabel: 'download_pdf'
        });
    } else if (evento == 3) {
        ga('send', {
            hitType: 'event',
            eventCategory: 'analise',
            eventAction: 'ver_mais',
            eventLabel: 'Lorem'
        });
    } else if (evento == 4) {
        ga('send', {
            hitType: 'event',
            eventCategory: 'analise',
            eventAction: 'ver_mais',
            eventLabel: 'Ipsum'
        });
    } else if (evento == 5) {
        ga('send', {
            hitType: 'event',
            eventCategory: 'analise',
            eventAction: 'ver_mais',
            eventLabel: 'Dolor'
        });
    } else if (evento == 6) {
        ga('send', {
            hitType: 'event',
            eventCategory: 'contato',
            eventAction: 'enviado',
            eventLabel: 'enviado'
        });
    }
}