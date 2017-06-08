/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1307Component } from './comp-1307.component';

describe('Comp1307Component', () => {
  let component: Comp1307Component;
  let fixture: ComponentFixture<Comp1307Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1307Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1307Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
