
// inside class 
// outside class

#include <iostream>
using namespace std;


class MyClass {        
  public:              
    void Hello() {  
      cout << "Hello World!";
    }
};

int main() {
  MyClass myObj;     
  myObj.Hello(); 
  return 0;
}