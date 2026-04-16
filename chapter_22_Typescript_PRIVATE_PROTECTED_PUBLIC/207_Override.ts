class Father {
    home(): void {
        console.log("2BHK");
    }
}

class Pramod extends Father {
    home(): void {
        console.log("3BHK");
    }
}

let pramod = new Pramod(); // home method of Father class is overridden by Pramod class, so it will print "3BHK"
pramod.home();