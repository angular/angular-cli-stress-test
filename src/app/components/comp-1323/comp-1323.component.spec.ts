/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1323Component } from './comp-1323.component';

describe('Comp1323Component', () => {
  let component: Comp1323Component;
  let fixture: ComponentFixture<Comp1323Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1323Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1323Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
