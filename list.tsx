class listNode <T> {

    public prev? : listNode<T> = undefined;
    public next? : listNode<T> = undefined;

    constructor(public item : T){}

}

class linkedList<T> {

    public length : number;
    private head? : listNode<T>;
    private tail? : listNode<T>;

    constructor() {
        this.length = 0;
    }

    private createList(item : T) {

        let newNode = new listNode(item);

        this.head = newNode;
        this.tail = newNode;
        this.length ++;

    }

    printList(): void{

        let pointer = this.head;

        while(pointer){

            console.log(pointer.item);
            pointer = pointer.next;

        }

    }

    prepend(item : T): void{

        if(!this.head){
            this.createList(item);
            return;
        }

        let newNode = new listNode(item);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = this.head.prev;
        this.length ++;

    }

    append(item : T): void{

        if(!this.tail){
            this.createList(item);
            return;
        }

        let newNode = new listNode(item);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = this.tail.next;
        this.length ++;

    }

    insertAt(item : T, position : number): void{

        if(position > this.length || position < 0){

            console.log("error insert");
            return;

        }

        if(!this.head){
            this.createList(item);
            return;
        }

        let pointer = this.head;

        for(let i = 1; i < position; i++){

            if(pointer.next){
                pointer = pointer.next;
            }

        }

        let newNode = new listNode(item);

        newNode.prev = pointer;
        newNode.next = pointer.next;
        if(pointer.next){
            pointer.next.prev = newNode;
        }
        if(pointer){
            pointer.next = newNode;
        }
        this.length ++;

    }

    remove(item : T): void{

        let pointer = this.head;
        let counter = 0;

        if(!this.head){
            return;
        }

        for(let i = 0; i < this.length; i++){

            if(!pointer){
                break;
            }

            if(pointer.item == item){

                if(i == 0 && this.head){
                    this.head = this.head.next;
                }else if(i == this.length - 1 && this.tail){
                    this.tail = this.tail.prev;
                }

                if(pointer.prev){
                    pointer.prev.next = pointer.next;
                }

                if(pointer.next){
                    pointer.next.prev = pointer.prev;
                }

                counter ++;

            }

            pointer = pointer.next;

        }

        this.length -= counter;

    }

    get(position : number): void{

        if(position >= this.length || position < 0){
            console.log("error get");
            return;
        }

        let pointer = this.head;

        for(let i = 0; i < position; i++){

            if(pointer){

                pointer = pointer.next;

            }

        }

        if(pointer){
            console.log(pointer.item);
        }

    }

    removeAt(position : number): void{

        let pointer = this.head;

        if(position < 0 || position >= this.length){
            console.log("error removeAt");
            return;
        }

        for(let i = 0; i < position; i++){

            if(pointer){
                pointer = pointer.next;
            }

        }

        if(position == 0 && this.head){
            this.head = this.head.next;
        }else if(position == this.length - 1 && this.tail){
            this.tail = this.tail.prev;
        }

        if(pointer){
            if(pointer.prev){
                pointer.prev.next = pointer.next;
            }
            if(pointer.next){
                pointer.next.prev = pointer.prev;
            }
        }

    }

}