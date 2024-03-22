// encapsulation-binding attributes and methods into single unit
// to acheieve encapsulation we do followings:
// declare variables as private
// view and modify variable values 
//  data hide, security purpose

# include <iostream>
using namespace std;

class employee{
  private:
  int salary;

  public:
  // sett
  void setSalary(int s){
    salary = s;
  }

  int getSalary(){
    // get
    return salary;
  }
};

int main(){
employee o;
o.setSalary(5000);
cout<<o.getSalary();
return 0;
}