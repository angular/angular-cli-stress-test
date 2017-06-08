/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp95Component } from './comp-95.component';

describe('Comp95Component', () => {
  let component: Comp95Component;
  let fixture: ComponentFixture<Comp95Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp95Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp95Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
