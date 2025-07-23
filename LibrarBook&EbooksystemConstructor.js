function Book (title,author){
    this.title=title;
    this.author=author;
}

Book.prototype.getSummary=function(){
    return `${this.title} ${this.author}`;
}

function Ebook(fileSize,format,title,author){
    this.fileSize=fileSize;
    this.format=format;
    Book.call(this,title,author);
}

Ebook.prototype=Object.create(Book.prototype);
Ebook.prototype.constructor=Ebook;

Ebook.prototype.getDownloadInfo=function(){
    return `File size: ${this.fileSize}, Format:${this.format}, ${this.title} ${this.author}`;
}