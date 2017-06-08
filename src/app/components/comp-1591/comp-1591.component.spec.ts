/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1591Component } from './comp-1591.component';

describe('Comp1591Component', () => {
  let component: Comp1591Component;
  let fixture: ComponentFixture<Comp1591Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1591Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1591Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
