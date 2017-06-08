/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1199Component } from './comp-1199.component';

describe('Comp1199Component', () => {
  let component: Comp1199Component;
  let fixture: ComponentFixture<Comp1199Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1199Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1199Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
