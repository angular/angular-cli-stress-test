/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp199Component } from './comp-199.component';

describe('Comp199Component', () => {
  let component: Comp199Component;
  let fixture: ComponentFixture<Comp199Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp199Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp199Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
