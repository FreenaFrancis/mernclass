# include <iostream>
using namespace std;

class India{
    public:
    void speak(){
        cout<<"can speak indian lan";
    }
};

class Delhi:public India{
public:
void speak(){
    cout<<"can speack hindi";

}
};

int main(){
    India i;
    Delhi d;
    i.speak();
    d.speak();
}
