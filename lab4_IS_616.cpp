
// #include <iostream>
// #include <string>
// #include <algorithm>

// using namespace std;

// // Function to compute determinant of a 3x3 matrix modulo 26
// int determinant(int matrix[3][3]) {
//     int det = (
//         matrix[0][0] * (matrix[1][1] * matrix[2][2] - matrix[1][2] * matrix[2][1]) -
//         matrix[0][1] * (matrix[1][0] * matrix[2][2] - matrix[1][2] * matrix[2][0]) +
//         matrix[0][2] * (matrix[1][0] * matrix[2][1] - matrix[1][1] * matrix[2][0])
//         ) % 26;

//     return (det + 26) % 26; // Ensure positive determinant
// }

// // Function to compute modular inverse of a number modulo 26
// int modInverse(int det, int mod) {
//     det = det % mod;
//     for (int x = 1; x < mod; x++) {
//         if ((det * x) % mod == 1) {
//             return x;
//         }
//     }
//     return -1;
// }

// // Function to compute the inverse of a 3x3 matrix modulo 26
// bool inverseMatrix(int matrix[3][3], int invMatrix[3][3]) {
//     int det = determinant(matrix);
//     int detInv = modInverse(det, 26);

//     if (detInv == -1) {
//         return false; // No inverse exists
//     }

//     // Compute adjugate matrix
//     int adj[3][3] = {
//         {
//             (matrix[1][1] * matrix[2][2] - matrix[1][2] * matrix[2][1]) % 26,
//             (-1 * (matrix[0][1] * matrix[2][2] - matrix[0][2] * matrix[2][1])) % 26,
//             (matrix[0][1] * matrix[1][2] - matrix[0][2] * matrix[1][1]) % 26
//         },
//         {
//             (-1 * (matrix[1][0] * matrix[2][2] - matrix[1][2] * matrix[2][0])) % 26,
//             (matrix[0][0] * matrix[2][2] - matrix[0][2] * matrix[2][0]) % 26,
//             (-1 * (matrix[0][0] * matrix[1][2] - matrix[0][2] * matrix[1][0])) % 26
//         },
//         {
//             (matrix[1][0] * matrix[2][1] - matrix[1][1] * matrix[2][0]) % 26,
//             (-1 * (matrix[0][0] * matrix[2][1] - matrix[0][1] * matrix[2][0])) % 26,
//             (matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0]) % 26
//         }
//     };

//     // Apply modular inverse to get inverse matrix
//     for (int i = 0; i < 3; i++) {
//         for (int j = 0; j < 3; j++) {
//             invMatrix[i][j] = (adj[i][j] * detInv) % 26;
//             if (invMatrix[i][j] < 0) {
//                 invMatrix[i][j] += 26; // Ensure positive values
//             }
//         }
//     }

//     return true;
// }

// // Function to encrypt a message using Hill Cipher
// string hillCipherEncrypt(string message, string key) {
//     int keySize = 3;
//     int n = message.length();
//     string encryptedMessage = "";

//     transform(message.begin(), message.end(), message.begin(), ::toupper);
//     transform(key.begin(), key.end(), key.begin(), ::.toupper);

//     if (key.length() != keySize * keySize) {
//         cout << "Error: Key length should be " << keySize * keySize << " characters!" << endl;
//         return "";
//     }

//     // Padding message if needed
//     while (message.length() % keySize != 0) {
//         message += 'X';
//     }
//     n = message.length();

//     // Convert key into a 3x3 matrix
//     int keyMatrix[3][3];
//     for (int i = 0; i < keySize; i++) {
//         for (int j = 0; j < keySize; j++) {
//             keyMatrix[i][j] = key[i * keySize + j] - 'A';
//         }
//     }

//     for (int i = 0; i < n; i += keySize) {
//         int row[3] = { message[i] - 'A', message[i + 1] - 'A', message[i + 2] - 'A' };
//         int encryptedRow[3] = { 0 };

//         for (int j = 0; j < keySize; j++) {
//             for (int k = 0; k < keySize; k++) {
//                 encryptedRow[j] += keyMatrix[j][k] * row[k];
//             }
//             encryptedRow[j] %= 26;
//         }

//         for (int j = 0; j < keySize; j++) {
//             encryptedMessage += char(encryptedRow[j] + 'A');
//         }
//     }

//     return encryptedMessage;
// }

// // Function to decrypt a message using Hill Cipher
// string hillCipherDecrypt(string encryptedMessage, string key) {
//     int keySize = 3;
//     int n = encryptedMessage.length();

//     transform(key.begin(), key.end(), key.begin(), ::toupper);

//     if (key.length() != keySize * keySize) {
//         cout << "Error: Key length should be " << keySize * keySize << " characters!" << endl;
//         return "";
//     }

//     // Convert key into a 3x3 matrix
//     int keyMatrix[3][3];
//     for (int i = 0; i < keySize; i++) {
//         for (int j = 0; j < keySize; j++) {
//             keyMatrix[i][j] = key[i * keySize + j] - 'A';
//         }
//     }

//     // Find inverse of the key matrix
//     int inverseKey[3][3];
//     if (!inverseMatrix(keyMatrix, inverseKey)) {
//         cout << "Error: Key is not invertible!" << endl;
//         return "";
//     }

//     string decryptedMessage = "";
//     for (int i = 0; i < n; i += keySize) {
//         int row[3] = { encryptedMessage[i] - 'A', encryptedMessage[i + 1] - 'A', encryptedMessage[i + 2] - 'A' };
//         int decryptedRow[3] = { 0 };

//         for (int j = 0; j < keySize; j++) {
//             for (int k = 0; k < keySize; k++) {
//                 decryptedRow[j] += inverseKey[j][k] * row[k];
//             }
//             decryptedRow[j] = (decryptedRow[j] + 26) % 26;
//         }

//         for (int j = 0; j < keySize; j++) {
//             decryptedMessage += char(decryptedRow[j] + 'A');
//         }
//     }

//     return decryptedMessage;
// }

// int main() {
//     string message = "sh";
//     string key = "raomateen";  

//     string encryptedMessage = hillCipherEncrypt(message, key);
//     cout << "Encrypted Message: " << encryptedMessage << endl;

//     string decryptedMessage = hillCipherDecrypt(encryptedMessage, key);
//     cout << "Decrypted Message: " << decryptedMessage << endl;

//     return 0;
// }


#include <iostream>
// #include <string>
// #include <algorithm>

// using namespace std;

// int determinant(int matrix[2][2]) {
//     int det = (matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0]) % 26;
//     return (det + 26) % 26; // Ensure positive determinant
// }

// int modInverse(int det, int mod) {
//     det = det % mod;
//     for (int x = 1; x < mod; x++) {
//         if ((det * x) % mod == 1) {
//             return x;
//         }
//     }
//     return -1;
// }

// bool inverseMatrix(int matrix[2][2], int invMatrix[2][2]) {
//     int det = determinant(matrix);
//     int detInv = modInverse(det, 26);

//     if (detInv == -1) {
//         return false; 
//     }

//     invMatrix[0][0] = matrix[1][1] % 26;
//     invMatrix[0][1] = (-1 * matrix[0][1]) % 26;
//     invMatrix[1][0] = (-1 * matrix[1][0]) % 26;
//     invMatrix[1][1] = matrix[0][0] % 26;

//     for (int i = 0; i < 2; i++) {
//         for (int j = 0; j < 2; j++) {
//             invMatrix[i][j] = (invMatrix[i][j] * detInv) % 26;
//             if (invMatrix[i][j] < 0) {
//                 invMatrix[i][j] += 26; 
//             }
//         }
//     }

//     return true;
// }

// string hillCipherEncrypt(string message, string key) {
//     int keySize = 2;
//     int n = message.length();
//     string encryptedMessage = "";

//     transform(message.begin(), message.end(), message.begin(), ::toupper);
//     transform(key.begin(), key.end(), key.begin(), ::toupper);

//     if (key.length() != keySize * keySize) {
//         cout << "Error: Key length should be " << keySize * keySize << " characters!" << endl;
//         return "";
//     }

//     if (n % keySize != 0) {
//         message += 'X'; 
//         n++;
//     }

//     int keyMatrix[2][2];
//     for (int i = 0; i < keySize; i++) {
//         for (int j = 0; j < keySize; j++) {
//             keyMatrix[i][j] = key[i * keySize + j] - 'A';
//         }
//     }

//     for (int i = 0; i < n; i += keySize) {
//         int row[2] = { message[i] - 'A', message[i + 1] - 'A' };
//         int encryptedRow[2] = { 0 };

//         for (int j = 0; j < keySize; j++) {
//             for (int k = 0; k < keySize; k++) {
//                 encryptedRow[j] += keyMatrix[j][k] * row[k];
//             }
//             encryptedRow[j] %= 26;
//         }

//         for (int j = 0; j < keySize; j++) {
//             encryptedMessage += char(encryptedRow[j] + 'A');
//         }
//     }

//     return encryptedMessage;
// }

// string hillCipherDecrypt(string encryptedMessage, string key) {
//     int keySize = 2;
//     int n = encryptedMessage.length();

//     transform(key.begin(), key.end(), key.begin(), ::toupper);

//     if (key.length() != keySize * keySize) {
//         cout << "Error: Key length should be " << keySize * keySize << " characters!" << endl;
//         return "";
//     }

//     // Convert key into a 2x2 matrix
//     int keyMatrix[2][2];
//     for (int i = 0; i < keySize; i++) {
//         for (int j = 0; j < keySize; j++) {
//             keyMatrix[i][j] = key[i * keySize + j] - 'A';
//         }
//     }

//     // Find inverse of the key matrix
//     int inverseKey[2][2];
//     if (!inverseMatrix(keyMatrix, inverseKey)) {
//         cout << "Error: Key is not invertible!" << endl;
//         return "";
//     }

//     string decryptedMessage = "";
//     for (int i = 0; i < n; i += keySize) {
//         int row[2] = { encryptedMessage[i] - 'A', encryptedMessage[i + 1] - 'A' };
//         int decryptedRow[2] = { 0 };

//         for (int j = 0; j < keySize; j++) {
//             for (int k = 0; k < keySize; k++) {
//                 decryptedRow[j] += inverseKey[j][k] * row[k];
//             }
//             decryptedRow[j] = (decryptedRow[j] + 26) % 26;
//         }

//         for (int j = 0; j < keySize; j++) {
//             decryptedMessage += char(decryptedRow[j] + 'A');
//         }
//     }

//     return decryptedMessage;
// }

// int main() {
//     string message = "sh";
//     string key = "hill"; 

//     string encryptedMessage = hillCipherEncrypt(message, key);
//     cout << "Encrypted Message: " << encryptedMessage << endl;

//     string decryptedMessage = hillCipherDecrypt(encryptedMessage, key);
//     cout << "Decrypted Message: " << decryptedMessage << endl;

//     return 0;
// }


#include <iostream>
#include <vector>
#include <string>
#include <algorithm>

using namespace std;

int determinant(vector<vector<int>> matrix, int n) {
    if (n == 1)
        return matrix[0][0];
    
    int det = 0;
    int sign = 1;
    for (int f = 0; f < n; f++) {
        vector<vector<int>> subMatrix(n - 1, vector<int>(n - 1));
        for (int i = 1; i < n; i++) {
            int sub_j = 0;
            for (int j = 0; j < n; j++) {
                if (j == f) continue;
                subMatrix[i - 1][sub_j] = matrix[i][j];
                sub_j++;
            }
        }
        det = (det + sign * matrix[0][f] * determinant(subMatrix, n - 1)) % 26;
        sign = -sign;
    }
    return (det + 26) % 26;
}

int modInverse(int det, int mod) {
    det = det % mod;
    for (int x = 1; x < mod; x++) {
        if ((det * x) % mod == 1)
            return x;
    }
    return -1;
}

bool inverseMatrix(vector<vector<int>> matrix, vector<vector<int>> &invMatrix, int n) {
    int det = determinant(matrix, n);
    int detInv = modInverse(det, 26);

    if (detInv == -1) return false;

    invMatrix = vector<vector<int>>(n, vector<int>(n));
    
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            vector<vector<int>> subMatrix(n - 1, vector<int>(n - 1));
            int sub_i = 0;
            for (int r = 0; r < n; r++) {
                if (r == i) continue;
                int sub_j = 0;
                for (int c = 0; c < n; c++) {
                    if (c == j) continue;
                    subMatrix[sub_i][sub_j] = matrix[r][c];
                    sub_j++;
                }
                sub_i++;
            }
            int cofactor = ((i + j) % 2 == 0 ? 1 : -1) * determinant(subMatrix, n);
            invMatrix[j][i] = ((cofactor * detInv) % 26 + 26) % 26;
        }
    }
    return true;
}

string hillCipherEncrypt(string message, string key, int n) {
    while (message.length() % n != 0)
        message += 'X';

    string encryptedMessage = "";
    vector<vector<int>> keyMatrix(n, vector<int>(n));
    for (int i = 0; i < n * n; i++)
        keyMatrix[i / n][i % n] = key[i] - 'A';

    for (int i = 0; i < message.length(); i += n) {
        vector<int> row(n, 0), encryptedRow(n, 0);
        for (int j = 0; j < n; j++)
            row[j] = message[i + j] - 'A';

        for (int j = 0; j < n; j++)
            for (int k = 0; k < n; k++)
                encryptedRow[j] = (encryptedRow[j] + keyMatrix[j][k] * row[k]) % 26;

        for (int j = 0; j < n; j++)
            encryptedMessage += char(encryptedRow[j] + 'A');
    }
    return encryptedMessage;
}

string hillCipherDecrypt(string encryptedMessage, string key, int n) {
    vector<vector<int>> keyMatrix(n, vector<int>(n)), inverseKey;
    for (int i = 0; i < n * n; i++)
        keyMatrix[i / n][i % n] = key[i] - 'A';

    if (!inverseMatrix(keyMatrix, inverseKey, n)) {
        cout << "Error: Key is not invertible!" << endl;
        return "";
    }

    string decryptedMessage = "";
    for (int i = 0; i < encryptedMessage.length(); i += n) {
        vector<int> row(n, 0), decryptedRow(n, 0);
        for (int j = 0; j < n; j++)
            row[j] = encryptedMessage[i + j] - 'A';

        for (int j = 0; j < n; j++)
            for (int k = 0; k < n; k++)
                decryptedRow[j] = (decryptedRow[j] + inverseKey[j][k] * row[k]) % 26;

        for (int j = 0; j < n; j++)
            decryptedMessage += char((decryptedRow[j] + 26) % 26 + 'A');
    }
    return decryptedMessage;
}

int main() {
    string message = "HELLO";
    string key = "raom"; 
    int n = 3;
    
    string encryptedMessage = hillCipherEncrypt(message, key, n);
    cout << "Encrypted Message: " << encryptedMessage << endl;

    string decryptedMessage = hillCipherDecrypt(encryptedMessage, key, n);
    cout << "Decrypted Message: " << decryptedMessage << endl;
    return 0;
}