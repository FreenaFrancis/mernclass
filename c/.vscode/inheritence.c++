#include <iostream>
#include <string>
using namespace std;

class Vehicle {
public:
    string name;
    int price;

    void showDetails() {
        cout << "Name: " << name << endl;
        cout << "Price: " << price << endl;
    }
};

class Bus : public Vehicle {
    // You can add additional members or methods specific to Bus here
};

class Car : public Vehicle {
    // You can add additional members or methods specific to Car here
};

int main() {
    Bus B1;
    Car c1;

    B1.name = "kstrc";
    B1.price = 100000;
    B1.showDetails();


c1.name = "swift";
c1.price=123455;
c1.showDetails();

    return 0;
}
