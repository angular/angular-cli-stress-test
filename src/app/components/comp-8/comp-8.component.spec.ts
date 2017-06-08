/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp8Component } from './comp-8.component';

describe('Comp8Component', () => {
  let component: Comp8Component;
  let fixture: ComponentFixture<Comp8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
