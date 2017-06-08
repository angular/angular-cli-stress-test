/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1562Component } from './comp-1562.component';

describe('Comp1562Component', () => {
  let component: Comp1562Component;
  let fixture: ComponentFixture<Comp1562Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1562Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1562Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
