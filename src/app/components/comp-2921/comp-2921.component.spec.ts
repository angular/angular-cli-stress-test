/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2921Component } from './comp-2921.component';

describe('Comp2921Component', () => {
  let component: Comp2921Component;
  let fixture: ComponentFixture<Comp2921Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2921Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2921Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
