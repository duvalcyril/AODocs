package apitesting.googledrive;

import com.intuit.karate.junit5.Karate;

class PermissionsRunner {
    
    @Karate.Test
    Karate testPermissions() {
        return Karate.run("permissions").relativeTo(getClass());
    }    

}
