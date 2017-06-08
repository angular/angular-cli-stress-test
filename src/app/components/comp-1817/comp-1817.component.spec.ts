/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1817Component } from './comp-1817.component';

describe('Comp1817Component', () => {
  let component: Comp1817Component;
  let fixture: ComponentFixture<Comp1817Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1817Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1817Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
