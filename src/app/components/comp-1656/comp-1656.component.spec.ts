/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1656Component } from './comp-1656.component';

describe('Comp1656Component', () => {
  let component: Comp1656Component;
  let fixture: ComponentFixture<Comp1656Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1656Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1656Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
