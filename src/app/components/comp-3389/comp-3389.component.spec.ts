/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3389Component } from './comp-3389.component';

describe('Comp3389Component', () => {
  let component: Comp3389Component;
  let fixture: ComponentFixture<Comp3389Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3389Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3389Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
