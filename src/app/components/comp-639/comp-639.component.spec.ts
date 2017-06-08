/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp639Component } from './comp-639.component';

describe('Comp639Component', () => {
  let component: Comp639Component;
  let fixture: ComponentFixture<Comp639Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp639Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp639Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
