/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1313Component } from './comp-1313.component';

describe('Comp1313Component', () => {
  let component: Comp1313Component;
  let fixture: ComponentFixture<Comp1313Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1313Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1313Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
