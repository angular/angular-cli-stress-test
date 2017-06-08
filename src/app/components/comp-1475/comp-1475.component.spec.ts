/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1475Component } from './comp-1475.component';

describe('Comp1475Component', () => {
  let component: Comp1475Component;
  let fixture: ComponentFixture<Comp1475Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1475Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1475Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
