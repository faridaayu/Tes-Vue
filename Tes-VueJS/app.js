'use strict';

new Vue({
  el: '#belajar',
  data: function() {
    return {
      dataTugas: [],
      inputDataTugas: {},
      enable: false
    }
  },
  methods: {
    generateUUID: function() {
      var d = new Date().getTime();
      if (window.performance && typeof window.performance.now === "function") {
        d += performance.now();
      }
      var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
      });
      return uuid;
    },
    tambahTugas: function() {
      this.enable = true;
      this.inputDataTugas = {};
    },
    simpanTugas: function(tugas) {
      this.dataTugas.push({
        'kodeTugas': this.generateUUID(),
        'mataKuliah': tugas.mataKuliah,
        'tugasKuliah': tugas.jenisKuliah,
      });
    },
    editTugas: function(tugas) {
      this.enable = false;
      this.index = this.dataTugas.indexOf(tugas);
      this.inputDataTugas.kodeTugas = tugas.kodeTugas;
      this.inputDataTugas.mataKuliah = tugas.mataKuliah;
      this.inputDataTugas.tugasKuliah = tugas.tugasKuliah;
      
    },
    updateTugas: function(tugas) {
      this.dataTugas[this.index].kodeTugas = tugas.kodetugas;
      this.dataTugas[this.index].mataKuliah = tugas.mataKuliah;
      this.dataTugas[this.index].tugasKuliah = tugas.tugasKuliah;
      this.inputDataTugas = {};
    },
    hapusTugas: function(tugas) {
      var result = confirm('Anda ingin menghapus data tugas ?');
      if (result) {
        this.index = this.dataTugas.indexOf(tugas);
        this.dataTugas.splice(this.index, 1);
      }
    }
  }
});