/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1492Component } from './comp-1492.component';

describe('Comp1492Component', () => {
  let component: Comp1492Component;
  let fixture: ComponentFixture<Comp1492Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1492Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1492Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
