function Playlist() {
    // Initialize songs property
    this.playlist = [];
    this.song = [];
}
    Playlist.prototype.addSong = function(song){
      this.song.push(song);
      this.playlist.push(song);
      return this.playlist;
    }

const p1 = new Playlist();
console.log(p1.addSong("Tum hi ho"));