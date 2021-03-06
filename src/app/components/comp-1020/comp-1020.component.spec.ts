/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1020Component } from './comp-1020.component';

describe('Comp1020Component', () => {
  let component: Comp1020Component;
  let fixture: ComponentFixture<Comp1020Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1020Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
