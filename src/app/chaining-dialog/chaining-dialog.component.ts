import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { fromEvent, merge, Observable, of, Subject } from 'rxjs';
import { MatSnackBar } from '@angular/material';
import { debounceTime, delay, filter, switchMap, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-chaining-dialog',
  templateUrl: './chaining-dialog.component.html',
  styleUrls: ['./chaining-dialog.component.scss']
})
export class ChainingDialogComponent implements AfterViewInit, OnDestroy {
  @ViewChild('button1', { read: ElementRef }) okButton: ElementRef;

  shouldAskReason = false;
  private clicks$: Observable<any>;
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(public snackBar: MatSnackBar) {
  }

  ngAfterViewInit(): void {
    this.clicks$ = fromEvent(this.okButton.nativeElement, 'click').pipe(
      debounceTime(500));

    const ordersWithDialog$ = this.clicks$.pipe(
      filter(value => this.shouldAskReason),
      switchMap(click => this.snackBar
        .open('Are you sure? (5 sec auto cancel)', 'Confirm', { duration: 5000 })
        .onAction())
    );

    const ordersWithoutDialog$ = this.clicks$.pipe(
      filter(value => !this.shouldAskReason)
    );

    const allOrders$ = merge(ordersWithDialog$, ordersWithoutDialog$).pipe(
      switchMap(() => this.process()),
      takeUntil(this.destroy$)
    );


    allOrders$.subscribe(console.log, console.warn, () => {
      console.log('unsubscribed');
    });
  }

  /**
   * demo service call
   */
  process(): Observable<string> {
    console.log('processing');
    return of('Success').pipe(
      delay(1000),
      tap(() => console.log('.')),
      delay(1000),
      tap(() => console.log('.')),
      delay(1000),
      tap(() => console.log('.'))
    );
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }
}
