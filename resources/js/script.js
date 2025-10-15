// Quando o documento html tiver carregado e pronto para uso
$(document).ready(
    function(){
        // quando o elemento com a classe js--mobile-nav-icon for clicado,
        // vai executar uma função que oculta ou mostra o elemento
        // com a classe js--main-nav
        $('.js--mobile-nav-icon').click(
            function(){
                var nav = $('.js--main-nav');
                nav.slideToggle(200);
            }
        );
    }
);