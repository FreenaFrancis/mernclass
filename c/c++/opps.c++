
// #include <iostream>
// #include <string>  // Include the necessary header for string
// using namespace std;

// class SmartPhone {
// public:
//     string modelname;  // Use string for modelname
//     int price;
// };

// int main() {
//     SmartPhone phone1, phone2;

//     phone1.modelname = "vivo";
//     phone1.price = 10000;  // Correct assignment for phone1

//     phone2.modelname = "realme";
//     phone2.price = 12000;  // Correct assignment for phone2

//     cout << "Phone 1:" << phone1.modelname << endl;
//     cout << "Phone 1 Price:" << phone1.price << endl;  // Access price for phone1

//     cout << "Phone 2:" << phone2.modelname << endl;
//     cout << "Phone 2 Price:" << phone2.price << endl;  // Access price for phone2

//     return 0;
// }

////////////////////////////////////////////////////////////methods///////////////////////////////////


// #include <iostream>
// #include <string>  // Include the necessary header for string
// using namespace std;

// class SmartPhone {
// public:
//     string modelname;  // Use string for modelname
//     int price;

//     void showDetails(){
//    cout << "Phone 1:" << modelname << endl;
//     cout << "Phone 1 Price:" << price << endl;  // Access price for phone1

//     cout << "Phone 2:" << modelname << endl;
//     cout << "Phone 2 Price:" << price << endl;
//     }
// };

// int main() {
//     SmartPhone phone1, phone2;

//     phone1.modelname = "vivo";
//     phone1.price = 10000;  // Correct assignment for phone1

//     phone2.modelname = "realme";
//     phone2.price = 12000;  

   
// phone1.showDetails();
// phone2.showDetails();
//     return 0;
// }



// ///////////////////////////////////////call function////////////////////////////


#include <iostream>
#include <string>  // Include the necessary header for string
using namespace std;

class SmartPhone {
public:
    string modelname;  // Use string for modelname
    int price;

    void showDetails(){
   cout << "Phone 1:" <<modelname << endl;
    cout << "Phone 1 Price:" << price << endl;  // Access price for phone1

    cout << "Phone 2:" << modelname << endl;
    cout << "Phone 2 Price:" <<price << endl;
    }
// call 
    void call(){
        cout<<modelname<<" "<<"callling"<<endl;

    }

     void callDisconnect(){
        cout<<modelname<<" "<<"call disconnect"<<endl;
        
    }
};

int main() {
    SmartPhone phone1, phone2;

    phone1.modelname = "vivo";
    phone1.price = 10000;  // Correct assignment for phone1

    phone2.modelname = "realme";
    phone2.price = 12000;  // Correct assignment for phone2

   // Access price for phone2
// phone1.showDetails();
// phone2.showDetails();

phone1.call();
phone1.callDisconnect();
    return 0;
}
