// Submodules
import { checkRegisterNoAuth } from './compliance/check-register-no-auth.js';

// Skip TLS if possible
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

// CHECK REGISTER COMPLIANCE
console.log('#########################################################');
console.log('Checking compliance of register endpoints (no-auth)');
console.log('#########################################################');
const { 
    checkRegisterNoAuthSucceeded,
    checkRegisterNoAuthFailed,
    checkRegisterNoAuthCompliant,
    checkRegisterNoAuthNonCompliant
} = await checkRegisterNoAuth();

// DISPLAY REGISTER RESULTS
console.log('#########################################################');
console.log('Compliance results for register');
console.log('#########################################################');
console.log('[SUCCEEDED]: ', checkRegisterNoAuthSucceeded.length);
checkRegisterNoAuthSucceeded.forEach((url) => console.log(url));
console.log('[FAILED]: ', checkRegisterNoAuthFailed.length);
checkRegisterNoAuthFailed.forEach((url) => console.log(url));
console.log('[COMPLIANT]: ', checkRegisterNoAuthCompliant.length);
checkRegisterNoAuthCompliant.forEach((url) => console.log(url));
console.log('[NON-COMPLIANT]: ', checkRegisterNoAuthNonCompliant.length);
checkRegisterNoAuthNonCompliant.forEach((msg) => console.log(msg));


