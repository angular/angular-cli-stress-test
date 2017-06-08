/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1459Component } from './comp-1459.component';

describe('Comp1459Component', () => {
  let component: Comp1459Component;
  let fixture: ComponentFixture<Comp1459Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1459Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1459Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
