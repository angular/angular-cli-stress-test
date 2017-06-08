/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1449Component } from './comp-1449.component';

describe('Comp1449Component', () => {
  let component: Comp1449Component;
  let fixture: ComponentFixture<Comp1449Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1449Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1449Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
