/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3909Component } from './comp-3909.component';

describe('Comp3909Component', () => {
  let component: Comp3909Component;
  let fixture: ComponentFixture<Comp3909Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3909Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3909Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
