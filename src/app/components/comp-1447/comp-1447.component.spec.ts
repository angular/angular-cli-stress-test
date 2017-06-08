/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1447Component } from './comp-1447.component';

describe('Comp1447Component', () => {
  let component: Comp1447Component;
  let fixture: ComponentFixture<Comp1447Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1447Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1447Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
