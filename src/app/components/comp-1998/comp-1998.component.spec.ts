/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1998Component } from './comp-1998.component';

describe('Comp1998Component', () => {
  let component: Comp1998Component;
  let fixture: ComponentFixture<Comp1998Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1998Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1998Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
