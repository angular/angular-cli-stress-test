/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3884Component } from './comp-3884.component';

describe('Comp3884Component', () => {
  let component: Comp3884Component;
  let fixture: ComponentFixture<Comp3884Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3884Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3884Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
