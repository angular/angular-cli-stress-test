/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1341Component } from './comp-1341.component';

describe('Comp1341Component', () => {
  let component: Comp1341Component;
  let fixture: ComponentFixture<Comp1341Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1341Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1341Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
