/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1374Component } from './comp-1374.component';

describe('Comp1374Component', () => {
  let component: Comp1374Component;
  let fixture: ComponentFixture<Comp1374Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1374Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1374Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
