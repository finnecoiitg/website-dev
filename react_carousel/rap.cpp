#include <iostream>
#include <cmath>
#include <bits/stdc++.h>
#include<vector>
using namespace std;

int main()
{
    long long t;
    cin >> t;
    vector <int> ar;
    while (t--)
    {
      long long n;
      cin >> n;
      long long ar[n];
      for(int i = 0 ; i < n; i++){
        cin >> ar[i];
      }
      for(int i = 0; i < n-1; i++){
        if(ar[i+1] < ar[i]){
            long long k = ar[i]/ar[i+1];

            if(ar[i]%ar[i+1] == 0){
                
            }
        }
      }
    }

    return 0;
}