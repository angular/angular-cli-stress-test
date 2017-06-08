/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1127Component } from './comp-1127.component';

describe('Comp1127Component', () => {
  let component: Comp1127Component;
  let fixture: ComponentFixture<Comp1127Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1127Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1127Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
