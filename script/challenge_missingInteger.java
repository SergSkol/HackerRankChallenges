import java.util.*;

class test {
    public static void main(String[] args) throws Exception {
        System.out.println("Hello!");

        int[] myNum = {1, 3, 4, 1, 4};
        int res = MissingInteger(myNum);
        System.out.println(res);
    }

    public static int MissingInteger(int[] A) {
        // write your code in Java SE 8
        Arrays.sort(A);

        //for (int i: A) System.out.print(A[i]+", ");

        int miss = 1, i = 0;
        boolean run = true;
        do{   
            if (i == A.length-1) {
                miss = A[i]+1;
                run = false;
                //System.out.println(i+": " + A[i] +" last ");
            }
            else{
                if (A[i]==A[i+1]){
                    //System.out.println(i+": " + A[i] +" eq " +A[i+1]);
                }
                else if (A[i]+1 == A[i+1]){
                    //System.out.println(i+": " + A[i] +" next " +A[i+1]);
                }
                else{
                    miss = A[i]+1;
                    run = false;
                    //System.out.println(i+": " + A[i] +" missed ");
                } 
            }
            i++;    
        } while (run);
        return Math.max(1, miss);
    }
}
