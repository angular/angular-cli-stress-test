/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2349Component } from './comp-2349.component';

describe('Comp2349Component', () => {
  let component: Comp2349Component;
  let fixture: ComponentFixture<Comp2349Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2349Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2349Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
