/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3370Component } from './comp-3370.component';

describe('Comp3370Component', () => {
  let component: Comp3370Component;
  let fixture: ComponentFixture<Comp3370Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3370Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3370Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
