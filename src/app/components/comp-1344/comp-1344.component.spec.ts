/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1344Component } from './comp-1344.component';

describe('Comp1344Component', () => {
  let component: Comp1344Component;
  let fixture: ComponentFixture<Comp1344Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1344Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1344Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
