/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1473Component } from './comp-1473.component';

describe('Comp1473Component', () => {
  let component: Comp1473Component;
  let fixture: ComponentFixture<Comp1473Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1473Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1473Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
