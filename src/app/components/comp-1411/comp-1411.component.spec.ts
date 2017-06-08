/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1411Component } from './comp-1411.component';

describe('Comp1411Component', () => {
  let component: Comp1411Component;
  let fixture: ComponentFixture<Comp1411Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1411Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1411Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
