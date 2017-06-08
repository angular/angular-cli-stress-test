/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp600Component } from './comp-600.component';

describe('Comp600Component', () => {
  let component: Comp600Component;
  let fixture: ComponentFixture<Comp600Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp600Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp600Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
