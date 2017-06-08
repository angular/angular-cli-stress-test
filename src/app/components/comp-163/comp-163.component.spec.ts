/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp163Component } from './comp-163.component';

describe('Comp163Component', () => {
  let component: Comp163Component;
  let fixture: ComponentFixture<Comp163Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp163Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp163Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
