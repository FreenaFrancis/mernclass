# include <iostream>
using namespace std;

class Sum{
    public:
    void Add(int a,int b){
cout<<a+b<<endl;
    }
    void Add(int a,int b,int c){
        cout<<a+b+c<<endl;
    }
};
int main(){
    Sum f;
    f.Add(10,20);
    f.Add(10,20,20);
}