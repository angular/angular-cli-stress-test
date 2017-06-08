/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1395Component } from './comp-1395.component';

describe('Comp1395Component', () => {
  let component: Comp1395Component;
  let fixture: ComponentFixture<Comp1395Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1395Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1395Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
