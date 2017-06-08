/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2084Component } from './comp-2084.component';

describe('Comp2084Component', () => {
  let component: Comp2084Component;
  let fixture: ComponentFixture<Comp2084Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2084Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2084Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
