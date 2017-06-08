/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3481Component } from './comp-3481.component';

describe('Comp3481Component', () => {
  let component: Comp3481Component;
  let fixture: ComponentFixture<Comp3481Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3481Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3481Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
