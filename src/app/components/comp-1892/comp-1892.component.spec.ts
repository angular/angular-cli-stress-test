/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1892Component } from './comp-1892.component';

describe('Comp1892Component', () => {
  let component: Comp1892Component;
  let fixture: ComponentFixture<Comp1892Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1892Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1892Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
