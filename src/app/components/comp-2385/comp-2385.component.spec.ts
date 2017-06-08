/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2385Component } from './comp-2385.component';

describe('Comp2385Component', () => {
  let component: Comp2385Component;
  let fixture: ComponentFixture<Comp2385Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2385Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2385Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
