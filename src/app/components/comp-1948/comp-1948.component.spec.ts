/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1948Component } from './comp-1948.component';

describe('Comp1948Component', () => {
  let component: Comp1948Component;
  let fixture: ComponentFixture<Comp1948Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1948Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1948Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
