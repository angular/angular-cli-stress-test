/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1235Component } from './comp-1235.component';

describe('Comp1235Component', () => {
  let component: Comp1235Component;
  let fixture: ComponentFixture<Comp1235Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1235Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1235Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
