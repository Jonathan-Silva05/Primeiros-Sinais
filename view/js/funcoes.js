


  /* =================== MENU RESPONSIVO ================== */
    var ul = document.querySelector('nav ul');
    var menuBtn = document.querySelector('.menu-btn i');

    function menuShow() {
        if (ul.classList.contains('open')) {
            ul.classList.remove('open');
        }else{
            ul.classList.add('open');
        }
    }
  /* ================= FIM MENU RESPONSIVO ================ */



  /* ============= SCRIPT FIXAR TELA AO CLICAR ============ */
      var overflowFixed = document.getElementById('overflowFixed');
      var fixo = false;           // variavel de controle de clique no botao

      function action() {
        fixo = !fixo;            // nega o valor conforme o clique no botao
          
        if(fixo) overflowFixed.classList.toggle('fixando');
        else overflowFixed.classList.remove('fixando');
        }
  /* ======================= FIM SCRIPT ======================= */