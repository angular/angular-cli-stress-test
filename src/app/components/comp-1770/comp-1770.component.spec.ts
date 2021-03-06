/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1770Component } from './comp-1770.component';

describe('Comp1770Component', () => {
  let component: Comp1770Component;
  let fixture: ComponentFixture<Comp1770Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1770Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1770Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
