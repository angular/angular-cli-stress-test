/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp151Component } from './comp-151.component';

describe('Comp151Component', () => {
  let component: Comp151Component;
  let fixture: ComponentFixture<Comp151Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp151Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp151Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
