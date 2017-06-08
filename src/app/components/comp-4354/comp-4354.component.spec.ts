/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4354Component } from './comp-4354.component';

describe('Comp4354Component', () => {
  let component: Comp4354Component;
  let fixture: ComponentFixture<Comp4354Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4354Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4354Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
