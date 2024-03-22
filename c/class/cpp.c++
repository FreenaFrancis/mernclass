#include <iostream>
#include <string>
using namespace std;
class GoogleSearch{
    private:
    string searchText;
    string searchResult;

    void searchProcess(){
        searchResult="Resultabout"+searchText;
        cout<<searchResult<<endl;
    }
    public:
    void search(string text){      //here it is called as abastraction because here we provide the functionality but not details
        searchText=text;
        searchProcess();
    }
};
int main(){
    GoogleSearch gs;
    gs.search("india");
    return 0;
}