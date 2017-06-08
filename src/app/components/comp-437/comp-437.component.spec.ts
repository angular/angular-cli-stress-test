/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp437Component } from './comp-437.component';

describe('Comp437Component', () => {
  let component: Comp437Component;
  let fixture: ComponentFixture<Comp437Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp437Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp437Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
