import { of, interval } from 'rxjs';
import { switchMap, debounceTime } from 'rxjs/operators';

function login(username: string, password: string) {
  return of(true).pipe(
    // Simulate server call with delay based on username validity
    debounceTime(username === 'valid_user' ? 500 : 2000),
    switchMap(() => {
      if (password === 'correct_password') {
        return of('Login successful!');
      } else {
        return of('Invalid password.');
      }
    })
  );
}

// Usage
login('attacker_username', 'invalid_password')
  .subscribe((message) => console.log(message));

// Attacker can analyze response times to guess valid usernames.
