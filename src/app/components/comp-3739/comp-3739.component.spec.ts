/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3739Component } from './comp-3739.component';

describe('Comp3739Component', () => {
  let component: Comp3739Component;
  let fixture: ComponentFixture<Comp3739Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3739Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3739Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
