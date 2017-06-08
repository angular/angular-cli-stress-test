/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp293Component } from './comp-293.component';

describe('Comp293Component', () => {
  let component: Comp293Component;
  let fixture: ComponentFixture<Comp293Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp293Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp293Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
