/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3055Component } from './comp-3055.component';

describe('Comp3055Component', () => {
  let component: Comp3055Component;
  let fixture: ComponentFixture<Comp3055Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3055Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3055Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
