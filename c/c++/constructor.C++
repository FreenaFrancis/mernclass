# include<iostream>
using namespace std;
class Electronics{
    public:
    string item;
    string brand;
    Electronics(string i, string b){
        cout<<"This is constructor"<<endl;
    }
};
int main(){
    Electronics e1("Tv","sony");
  
    return 0;
}