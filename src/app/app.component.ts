import { Component, OnInit, VERSION } from '@angular/core';
import { of, from, map } from 'rxjs';
import { take, tap } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  ngOnInit(): void {
    of(2, 4, 6, 8).subscribe((item) => console.log(item));

    from([20, 15, 10, 5]).subscribe({
      next: (item) => console.log(`resulting item .. ${item}`),
      error: (err) => console.log(`error occured .. ${err}`),
      complete: () => console.log(`complete`),
    });

    of('app1', 'app2', 'app3').subscribe({
      next: (item) => console.log(`resulting item .. ${item}`),
      error: (err) => console.log(`error occured .. ${err}`),
      complete: () => console.log(`complete`),
    });

    of(1, 2, 3)
      .pipe(
        take(1),
        tap((x) => console.log('tab pre', x)),
        map((x) => x * 10),
        tap((x) => console.log('tab aft', x)),
        
      )
      .subscribe((x) => console.log(x));
  }
}
