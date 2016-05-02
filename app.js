Vue.filter('filtroData', function(valor, formato){

    if(formato != undefined) {
        return moment(valor).format(formato);
    }

    return moment(valor).format('DD/MM/YYYY');
});


new Vue({

    el: '#App',

    data: {
        pessoas: [
            { id: 1, name: 'Sergio', city: 'Cacoal', state: 'Rondonia', country: 'Brasil', datebirth: '1985-11-25', descript: 'Um cara muito bonito e lindão'},
            { id: 2, name: 'João', city: 'Cidade de Deus', state: 'Rio de Janeiro', country: 'Brasil', datebirth: '1980-04-10', descript: 'Não sei quem é, só coloquei pra completar'},
            { id: 3, name: 'Marcia', city: 'Cacoal', state: 'Rondonia', country: 'Brasil', datebirth: '1957-10-20', descript: ''},
            { id: 4, name: 'Robson', city: 'Cacoal', state: 'Rondonia', country: 'Brasil', datebirth: '1986-11-05', descript: ''},
            { id: 5, name: 'Glaubert', city: 'Cacoal', state: 'Rondonia', country: 'Brasil', datebirth: '1984-11-27', descript: 'Um cara que trabalha comigo'},
            { id: 6, name: 'Lauriana', city: 'Cacoal', state: 'Rondonia', country: 'Brasil', datebirth: '1991-05-08', descript: 'Minha esposa lindona'},
            { id: 7, name: 'Yasmin', city: 'Cacoal', state: 'Rondonia', country: 'Brasil', datebirth: '2009-06-06', descript: 'MInha primogênita'},
            { id: 8, name: 'Estela', city: 'Cacoal', state: 'Rondonia', country: 'Brasil', datebirth: '2014-10-21', descript: 'Minha caçulinha'},
            { id: 9, name: 'Ana Maria', city: 'Cacoal', state: 'Rondonia', country: 'Brasil', datebirth: '1962-07-20', descript: ''},
            { id: 10, name: 'Robert', city: 'Nova Iorque do Sul', state: 'Nova Jersey', country: 'EUA', datebirth: '1988-02-12', descript: 'Doidera que aparece sempre nas fotos sem ser convidado!'},
            { id: 11, name: 'Sergio', city: 'Cacoal', state: 'Rondonia', country: 'Brasil', datebirth: '1985-11-25', descript: 'Um cara muito bonito e lindão'},
            { id: 12, name: 'João', city: 'Cidade de Deus', state: 'Rio de Janeiro', country: 'Brasil', datebirth: '1980-04-10', descript: 'Não sei quem é, só coloquei pra completar'},
            { id: 13, name: 'Marcia', city: 'Cacoal', state: 'Rondonia', country: 'Brasil', datebirth: '1957-10-20', descript: ''},
            { id: 14, name: 'Robson', city: 'Cacoal', state: 'Rondonia', country: 'Brasil', datebirth: '1986-11-05', descript: ''},
            { id: 15, name: 'Glaubert', city: 'Cacoal', state: 'Rondonia', country: 'Brasil', datebirth: '1984-11-27', descript: 'Um cara que trabalha comigo'},
            { id: 16, name: 'Lauriana', city: 'Cacoal', state: 'Rondonia', country: 'Brasil', datebirth: '1991-05-08', descript: 'Minha esposa lindona'},
            { id: 17, name: 'Yasmin', city: 'Cacoal', state: 'Rondonia', country: 'Brasil', datebirth: '2009-06-06', descript: 'MInha primogênita'},
            { id: 18, name: 'Estela', city: 'Cacoal', state: 'Rondonia', country: 'Brasil', datebirth: '2014-10-21', descript: 'Minha caçulinha'},
            { id: 19, name: 'Ana Maria', city: 'Cacoal', state: 'Rondonia', country: 'Brasil', datebirth: '1962-07-20', descript: ''},
            { id: 20, name: 'Robert', city: 'Nova Iorque do Sul', state: 'Nova Jersey', country: 'EUA', datebirth: '1988-02-12', descript: 'Doidera que aparece sempre nas fotos sem ser convidado!'}
        ],
        all: [
            { id: 1, name: 'Sergio', city: 'Cacoal', state: 'Rondonia', country: 'Brasil', datebirth: '1985-11-25', descript: 'Um cara muito bonito e lindão'},
            { id: 2, name: 'João', city: 'Cidade de Deus', state: 'Rio de Janeiro', country: 'Brasil', datebirth: '1980-04-10', descript: 'Não sei quem é, só coloquei pra completar'},
            { id: 3, name: 'Marcia', city: 'Cacoal', state: 'Rondonia', country: 'Brasil', datebirth: '1957-10-20', descript: ''},
            { id: 4, name: 'Robson', city: 'Cacoal', state: 'Rondonia', country: 'Brasil', datebirth: '1986-11-05', descript: ''},
            { id: 5, name: 'Glaubert', city: 'Cacoal', state: 'Rondonia', country: 'Brasil', datebirth: '1984-11-27', descript: 'Um cara que trabalha comigo'},
            { id: 6, name: 'Lauriana', city: 'Cacoal', state: 'Rondonia', country: 'Brasil', datebirth: '1991-05-08', descript: 'Minha esposa lindona'},
            { id: 7, name: 'Yasmin', city: 'Cacoal', state: 'Rondonia', country: 'Brasil', datebirth: '2009-06-06', descript: 'MInha primogênita'},
            { id: 8, name: 'Estela', city: 'Cacoal', state: 'Rondonia', country: 'Brasil', datebirth: '2014-10-21', descript: 'Minha caçulinha'},
            { id: 9, name: 'Ana Maria', city: 'Cacoal', state: 'Rondonia', country: 'Brasil', datebirth: '1962-07-20', descript: ''},
            { id: 10, name: 'Robert', city: 'Nova Iorque do Sul', state: 'Nova Jersey', country: 'EUA', datebirth: '1988-02-12', descript: 'Doidera que aparece sempre nas fotos sem ser convidado!'},
            { id: 11, name: 'Sergio', city: 'Cacoal', state: 'Rondonia', country: 'Brasil', datebirth: '1985-11-25', descript: 'Um cara muito bonito e lindão'},
            { id: 12, name: 'João', city: 'Cidade de Deus', state: 'Rio de Janeiro', country: 'Brasil', datebirth: '1980-04-10', descript: 'Não sei quem é, só coloquei pra completar'},
            { id: 13, name: 'Marcia', city: 'Cacoal', state: 'Rondonia', country: 'Brasil', datebirth: '1957-10-20', descript: ''},
            { id: 14, name: 'Robson', city: 'Cacoal', state: 'Rondonia', country: 'Brasil', datebirth: '1986-11-05', descript: ''},
            { id: 15, name: 'Glaubert', city: 'Cacoal', state: 'Rondonia', country: 'Brasil', datebirth: '1984-11-27', descript: 'Um cara que trabalha comigo'},
            { id: 16, name: 'Lauriana', city: 'Cacoal', state: 'Rondonia', country: 'Brasil', datebirth: '1991-05-08', descript: 'Minha esposa lindona'},
            { id: 17, name: 'Yasmin', city: 'Cacoal', state: 'Rondonia', country: 'Brasil', datebirth: '2009-06-06', descript: 'MInha primogênita'},
            { id: 18, name: 'Estela', city: 'Cacoal', state: 'Rondonia', country: 'Brasil', datebirth: '2014-10-21', descript: 'Minha caçulinha'},
            { id: 19, name: 'Ana Maria', city: 'Cacoal', state: 'Rondonia', country: 'Brasil', datebirth: '1962-07-20', descript: ''},
            { id: 20, name: 'Robert', city: 'Nova Iorque do Sul', state: 'Nova Jersey', country: 'EUA', datebirth: '1988-02-12', descript: 'Doidera que aparece sempre nas fotos sem ser convidado!'}
        ],
        abrirDetalhes: [],
        colunaOrdenada: 'id',
        ordenaDesc: 1,
        busca: '',
        colunasFiltro: []
    },

    methods: {
        onAbrirDetalhes: function(ev, id) {

            var self = this;

            ev.preventDefault();

            if(self.abrirDetalhes.indexOf(id) > -1) {
                self.abrirDetalhes.splice(self.abrirDetalhes.indexOf(id), 1);
            } else {
                self.abrirDetalhes.push(id);
            }
        },

        onAbrirTodosDetalhes: function(ev) {

            var self = this;

            ev.preventDefault();

            var ids = _.pluck(self.pessoas, 'id');

            if(self.abrirDetalhes.length > 0) {
                self.$set('abrirDetalhes', []);
            } else {
                self.$set('abrirDetalhes', ids);
            }
        },

        onOrdenar: function(ev, coluna) {

            var self = this;

            ev.preventDefault();

            self.colunaOrdenada = coluna;
            self.$set('ordenaDesc', self.ordenaDesc * -1);
        },

        onBuscar: function() {

            var self = this,
                filtered = self.all;

            if (self.busca != '' && self.colunasFiltro.length > 0) {
                filtered = _.filter(self.pessoas, function (pessoa) {
                    return self.colunasFiltro.some(function(coluna){
                        return pessoa[coluna].toLowerCase().indexOf(self.busca.toLowerCase()) > -1;
                    });
                });
            }

            self.$set('pessoas', filtered);
        }
    },

    ready: function() {

        var self = this;

        jQuery('select').select2({
            placeholder: 'Selecione uma ou mais colunas para filtrar!'
        }).on('change', function(){
            self.$set('colunasFiltro', jQuery(this).val());
        });
    }
});