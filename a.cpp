#include<bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(0);
    int n,q;
    cin >> n >> q;
    vector<int> s0,s1;
    int temp,x,y,seq,la=0,index;
    for(int i=0; i<q; i++){
        cin >> temp >> x >> y;
        seq = (x^la)%n ;
        if(temp==1){
            if(seq==0)
                s0.push_back(y);
            else if(seq==1)
                s1.push_back(y);
        }
        else if(temp==2){
            if(seq==0){
                index = y % s0.size();
                la = s0[index];
                cout << la << "\n";
            }
            else if(seq==1) {
                index = y % s1.size();
                la = s1[index];
                cout << la << "\n";
            }
        }
    }
}

