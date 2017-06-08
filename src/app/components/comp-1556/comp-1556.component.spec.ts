/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1556Component } from './comp-1556.component';

describe('Comp1556Component', () => {
  let component: Comp1556Component;
  let fixture: ComponentFixture<Comp1556Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1556Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1556Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
